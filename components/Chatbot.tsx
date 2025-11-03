
import React, { useState, useEffect, useRef, FormEvent } from 'react';
import type { Chat } from "@google/genai";
import { geminiService } from '../services/geminiService';
import type { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: 'Hello! I am the Blue Heron wellness assistant. How can I help you today? Remember, I am not a therapist, but I can answer general questions.' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        const chatSession = geminiService.startChatSession();
        setChat(chatSession);
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages, isLoading]);

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading || !chat) return;

        const userMessage: ChatMessage = { role: 'user', text: inputValue };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        const currentInput = inputValue;
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await chat.sendMessage({ message: currentInput });
            const modelMessage: ChatMessage = { role: 'model', text: response.text };
            setMessages(prevMessages => [...prevMessages, modelMessage]);
        } catch (error) {
            console.error("Failed to send message:", error);
            const errorMessage: ChatMessage = { role: 'model', text: "I'm sorry, I'm having trouble connecting right now. Please try again later." };
            setMessages(prevMessages => [...prevMessages, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-brand-primary text-white rounded-full p-4 shadow-lg hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 transition-all duration-300 transform hover:scale-110 z-[100]"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? (
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                )}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-full max-w-sm h-[70vh] max-h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-[99] transition-opacity duration-300 animate-fade-in-up">
                    <div className="bg-brand-primary text-white p-4 rounded-t-lg flex justify-between items-center">
                        <h3 className="font-bold text-lg">Wellness Assistant</h3>
                        <button onClick={() => setIsOpen(false)} aria-label="Close chat">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto bg-brand-light/50">
                        {messages.map((msg, index) => (
                            <div key={index} className={`my-2 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`p-3 rounded-lg max-w-[85%] shadow-sm ${msg.role === 'user' ? 'bg-brand-secondary text-white rounded-br-none' : 'bg-white text-brand-dark rounded-bl-none'}`}>
                                    <p className="whitespace-pre-wrap">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="my-2 flex justify-start">
                                <div className="p-3 rounded-lg max-w-[80%] bg-white text-brand-dark rounded-bl-none shadow-sm">
                                    <div className="flex items-center justify-center space-x-1">
                                        <span className="w-2 h-2 bg-brand-dark rounded-full animate-pulse" style={{ animationDelay: '0s' }}></span>
                                        <span className="w-2 h-2 bg-brand-dark rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></span>
                                        <span className="w-2 h-2 bg-brand-dark rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 border-t bg-white rounded-b-lg">
                        <form onSubmit={handleSendMessage} className="flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask a question..."
                                className="flex-1 border-2 border-slate-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary transition"
                                disabled={isLoading}
                                aria-label="Chat input"
                            />
                            <button type="submit" className="bg-brand-primary text-white rounded-full p-3 hover:bg-brand-secondary transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed" disabled={isLoading || !inputValue.trim()} aria-label="Send message">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `}</style>
        </>
    );
};

export default Chatbot;
