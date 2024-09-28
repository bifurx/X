let handler = async (m, { conn, command, text, isAdmin }) => {
//if (m.chat === '120363280974542167@g.us' && !isAdmin) return
if (!text) return conn.reply(m.chat, `Ingrese el texto`, m)
if (text) return conn.reply(m.chat, text, null, { mentions: conn.parseMention(text) })
}
handler.command = /^say|decir$/i
handler.group = true
handler.botAdmin = true
export default handler
