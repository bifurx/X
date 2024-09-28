/*import { randomBytes } from 'crypto';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let handler = async (m, { conn }) => {
if (m.sender !== '59892509014@s.whatsapp.net') return
const groupMetadata = (!m.isGroup ? ((conn.chats['120363282915310446@g.us'] || {}).metadata || await conn.groupMetadata('120363282915310446@g.us').catch(_ => null)) : {}) || {}
const participants = (!m.isGroup ? groupMetadata.participants : []) || []
const messageText = "*Hola. Te invito a entrar si queres*\n\nhttps://chat.whatsapp.com/BplQbwemrV26t7cIrmij8X";
for (let participant of participants) {
    const userJid = participant.id;
    try {
      await delay(4000); 
      await conn.sendMessage(userJid, { text: messageText }, { quoted: null });
    } catch (error) {
      console.error(`Error al enviar mensaje a ${userJid}:`, error);
    }
}
return
};
handler.customPrefix = /^sodfuhgsdfgiji/i
handler.command = new RegExp
export default handler;*/