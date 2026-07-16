import type { WhatsAppIncomingMessage } from "./types";

export function parseIncomingWhatsAppMessage(
  formData: FormData
): WhatsAppIncomingMessage {
  return {
    from: formData.get("From") as string,
    body: formData.get("Body") as string,
    profileName: formData.get("ProfileName") as string,
    waId: formData.get("WaId") as string,
    messageSid: formData.get("MessageSid") as string,
  };
}