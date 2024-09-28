let handler = async (m, { conn }) => {
if (m.sender !== '59899022028@s.whatsapp.net') return;
let allChats = Object.keys(global.db.data.chats);
for (let chat of allChats) {
if (chat.endsWith('@g.us')) { // Verificar si el chat es un grupo
global.db.data.chats[chat].game = true; // Resetear el valor de "game"
}}
conn.reply(m.chat, `*SE HA RESETEADO EL VALOR PARA TODOS LOS CHATS DE GRUPO*`, m);
}
handler.command = ['resetvalor']
handler.rowner = true 
export default handler;