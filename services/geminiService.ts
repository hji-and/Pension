import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini Client
// Assumption: process.env.API_KEY is available in the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
당신은 '더조은 펜션(The Joeun Pension)'의 프라이빗 AI 컨시어지입니다. 
고객에게 매우 정중하고 우아한 톤으로 응대하세요.

[펜션 정보]
1. 위치: 산속에 위치하지만 모든 객실에서 바다가 내려다보이는 독채 펜션입니다.
2. 타겟: 30대 신혼부부 및 연인. 조용하고 고급스러운 힐링을 지향합니다.
3. 핵심 차별점:
   - 전 객실 프라이빗 인피니티 풀 보유
   - 미슐랭 출신 셰프가 제공하는 룸서비스 웰컴 디너
   - 5성급 호텔 수준의 구스 침구류
4. 객실 타입:
   - 선라이즈 스위트(Sunrise Suite): 아침 해돋이가 아름다운 화이트톤 객실.
   - 문라이트 빌라(Moonlight Villa): 밤하늘 별과 달빛이 아름다운 우드톤 객실.
5. 부대 서비스:
   - 플로팅 조식 (Floating Breakfast)
   - 아로마 스파 테라피 (In-room Spa)
   - 별빛 시네마 (야외 빔프로젝터 대여)

고객이 예약 문의를 하면 구체적인 날짜와 인원을 물어보고, 예약 페이지로 안내해 주세요.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[] = []
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the chat history for context
    // Note: The SDK manages history via the Chat session, but here we illustrate a stateless single turn or simple reconstruction if needed.
    // For a robust implementation, we use ai.chats.create() and keep the session instance alive in the component.
    // However, to keep this service function pure-ish, we will generate a single response using the system instruction and input.
    // For better context retention, we will use the Chat interface in the component level, 
    // but here is a helper for a single generation with config if we needed it.
    
    // Let's implement a direct chat session creator instead.
    return "Error: Use the hook implementation.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "죄송합니다. 잠시 후 다시 시도해 주세요.";
  }
};

// We will export a class or hook logic helper
export class GeminiConcierge {
  private chatSession: any;

  constructor() {
    try {
        this.chatSession = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
              systemInstruction: SYSTEM_INSTRUCTION,
              temperature: 0.7,
            },
          });
    } catch (e) {
        console.warn("API Key missing or invalid initialization", e);
    }
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.chatSession) {
        return "죄송합니다. 현재 컨시어지 시스템을 이용할 수 없습니다 (API Key Missing).";
    }
    try {
      const response: GenerateContentResponse = await this.chatSession.sendMessage({
        message: message,
      });
      return response.text || "죄송합니다. 답변을 생성할 수 없습니다.";
    } catch (error) {
      console.error("Gemini Chat Error:", error);
      return "죄송합니다. 시스템 오류가 발생했습니다.";
    }
  }
}