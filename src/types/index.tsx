export interface Message {
    id: string;
    content: string;
    sender: "user" | "other";
    timestamp: Date;
  }

  export interface ParsedChatHistory {
    id: string;
    role: 'user' | 'other';
    content: string;
  }

  export type ChatProps = {
    proficiency: string;
    technology: string;
  };