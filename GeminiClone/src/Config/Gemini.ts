import {
  GoogleGenAI,
  FunctionCallingConfigMode,
  FunctionDeclaration,
  Type,
} from "@google/genai";

const GEMINI_API_KEY = "AIzaSyBcpkZAWQvfan-YzH6f-SZol0dP8udGcHw";

async function runChat(prompt: string) {
  const controlLightDeclaration: FunctionDeclaration = {
    name: "controlLight",
    parametersJsonSchema: {
      type: Type.OBJECT,
      properties: {
        brightness: { type: Type.NUMBER },
        colorTemperature: { type: Type.STRING },
      },
      required: ["brightness", "colorTemperature"],
    },
  };

  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  const textOutput = response.candidates?.[0]?.content?.parts?.[0]?.text;
  console.log("Output:", textOutput);
  return textOutput;
}

export default runChat;
