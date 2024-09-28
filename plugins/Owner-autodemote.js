let handler = async (m, { conn, isAdmin, isBotAdmin }) => {
if (!m.isGroup) return
if (!isBotAdmin) return
if (isAdmin) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], "demote")
}}
handler.customPrefix = /^(ad|ㅤ)$/i
handler.command = new RegExp

export default handler