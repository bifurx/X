let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴`, m)
await conn.updateProfileName(text)
m.reply('Listo.')
}
handler.command = /^(setbotname)$/i
handler.rowner = true
export default handler