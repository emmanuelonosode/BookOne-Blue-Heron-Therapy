
import { GoogleGenAI } from "@google/genai";

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

export const geminiService = {
  generateWellnessTip,
};
