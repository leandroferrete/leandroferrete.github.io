import { GoogleGenAI } from "@google/genai";
import { EXPERIENCE_DATA, PROJECTS_DATA, GAMES_DATA } from "../constants";

// Prepare context for the AI
const PORTFOLIO_CONTEXT = `
You are an AI assistant for Leandro Ferrete's portfolio website. 
Your goal is to answer questions about Leandro's professional experience, focusing on his expertise in Robust Backend Systems and Game Development.
Keep answers concise, professional, and friendly.

Experience:
${JSON.stringify(EXPERIENCE_DATA)}

Software Projects:
${JSON.stringify(PROJECTS_DATA)}

Games Developed:
${JSON.stringify(GAMES_DATA)}

If asked about something not in this data, politely say you don't have that information but suggest contacting Leandro directly.
`;

let aiClient: GoogleGenAI | null = null;

export const initializeGemini = () => {
  if (process.env.API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
};

export const chatWithLeandroAI = async (message: string): Promise<string> => {
  if (!aiClient) {
    initializeGemini();
    if (!aiClient) {
      return "I'm sorry, I'm currently offline (API Key missing). Please contact Leandro via email.";
    }
  }

  try {
    const model = aiClient.models;
    const response = await model.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: PORTFOLIO_CONTEXT,
      }
    });
    
    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered an error while thinking. Please try again later.";
  }
};