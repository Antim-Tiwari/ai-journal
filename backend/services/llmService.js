import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

export const analyzeEmotion = async (text) => {

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Return ONLY JSON
    
    {
    "emotion": "",
    "keywords": [],
    "summary": ""
    }
    
    Text: ${text}`
  });

  const jsonMatch = response.text.match(/\{[\s\S]*\}/);

  return JSON.parse(jsonMatch[0]);
};