let handler = async (m, { conn, command, text, args }) => {
if (!text) return conn.reply(m.chat, `[❗] ESCRIBE EL NOMBRE DE DOS PERSONAS`, m)
let names = text.split(' ').filter(Boolean)
if (names.length !== 2) return conn.reply(m.chat, `[❗] PONER DOS NOMBRES.\n\nEJEMPLO:\n.${command.toLowerCase()} Mario Sofía`, m)
let [text1, text2] = names
let love = `_❤️ *${text1}* tu oportunidad de enamorarte de *${text2}* es de *${Math.floor(Math.random() * 100)}%* 👩🏻‍❤️‍👨🏻_`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })
}
handler.command = /^ship|shippear$/i
handler.group = true
handler.botAdmin = true
export default handler