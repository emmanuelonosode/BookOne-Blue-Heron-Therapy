
import React, { useState, useCallback } from 'react';
import { geminiService } from '../services/geminiService';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center space-x-2">
        <div className="w-3 h-3 bg-brand-secondary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-3 h-3 bg-brand-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-brand-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    </div>
);


const ResourceHub: React.FC = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const exampleQueries = [
        "How can I manage daily stress?",
        "Tips for better communication in relationships",
        "What are some mindfulness exercises?"
    ];

    const handleSubmit = useCallback(async (currentQuery: string) => {
        if (!currentQuery.trim()) return;

        setIsLoading(true);
        setError(null);
        setResponse('');

        try {
            const result = await geminiService.generateWellnessTip(currentQuery);
            setResponse(result);
        } catch (err) {
            setError('Sorry, something went wrong. Please try again later.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit(query);
    };
    
    const handleExampleClick = (exampleQuery: string) => {
        setQuery(exampleQuery);
        handleSubmit(exampleQuery);
    }

    return (
        <section id="resources" className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">Mental Wellness Resource Hub</h2>
                    <p className="text-lg text-brand-dark">
                        Ask a question to get helpful information and tips on mental wellness topics. This AI-powered tool is for informational purposes only.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="bg-brand-light p-4 rounded-lg shadow-inner">
                        <div className="mb-4">
                            <p className="font-semibold mb-2 text-brand-dark">Try an example:</p>
                            <div className="flex flex-wrap gap-2">
                                {exampleQueries.map((ex) => (
                                    <button 
                                        key={ex}
                                        onClick={() => handleExampleClick(ex)}
                                        className="bg-white text-brand-secondary px-3 py-1 rounded-full border border-brand-secondary/50 hover:bg-brand-secondary/10 transition-colors text-sm"
                                    >
                                        {ex}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <form onSubmit={handleFormSubmit}>
                            <div className="flex items-center border-2 border-brand-secondary/50 rounded-full p-1 focus-within:ring-2 focus-within:ring-brand-accent/50">
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="e.g., How to practice self-compassion?"
                                    className="w-full bg-transparent p-3 text-brand-dark placeholder-brand-dark/50 focus:outline-none"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    className="bg-brand-secondary text-white rounded-full p-3 hover:bg-brand-primary transition-colors disabled:bg-slate-400"
                                    disabled={isLoading || !query.trim()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-8 min-h-[150px]">
                        {isLoading && <LoadingSpinner />}
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        {response && (
                            <div className="bg-white p-6 rounded-lg shadow-md prose max-w-none">
                                <p className="whitespace-pre-wrap">{response}</p>
                                <p className="mt-6 text-sm text-brand-dark/70 border-t pt-4">
                                    <strong>Disclaimer:</strong> This information is generated by AI and is for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResourceHub;