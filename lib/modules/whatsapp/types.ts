export interface WhatsAppIncomingMessage {
  from: string;
  body: string;
  profileName: string;
  waId: string;
  messageSid: string;
}