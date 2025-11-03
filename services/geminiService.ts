
import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this context, we assume the key is always present.
  console.warn("API_KEY is not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const generateWellnessTip = async (query: string): Promise<string> => {
  try {
    const systemInstruction = `You are a helpful and compassionate mental wellness assistant. 
Your goal is to provide supportive, general information and resources based on the user's query. 
You must not provide medical advice, diagnosis, or treatment. Keep your response concise, friendly, and formatted in plain text with paragraphs separated by newlines.
Do not use markdown.`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: query,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            topP: 1,
            topK: 32,
        },
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating content from Gemini:", error);
    throw new Error("Failed to get a response from the wellness assistant.");
  }
};

const startChatSession = (): Chat => {
    const systemInstruction = `You are a friendly and supportive chatbot for the Blue Heron Therapy website. Your name is "Heron Helper".
Your purpose is to answer general questions about therapy, mental wellness topics, and the services offered on the website.
You must not provide medical advice, diagnosis, or treatment. You are not a substitute for a real therapist.
If a user seems to be in crisis, you must strongly and immediately advise them to contact a crisis hotline like the National Suicide Prevention Lifeline at 988 or to call 911.
Keep your answers supportive, concise, and easy to understand.
Do not answer questions that are not related to mental health or the services of Blue Heron Therapy. Gently guide the conversation back to relevant topics.`;

    const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: systemInstruction,
        },
    });
    return chat;
};


export const geminiService = {
  generateWellnessTip,
  startChatSession,
};
