let handler = async (m, { conn, usedPrefix, command, text, participants, groupMetadata }) => {
let toM = persona => '@' + persona.split('@')[0]
let persona = global.db.data.users[m.sender].pasangan
if (persona === "") return conn.reply(m.chat, 'Primero debes tener pareja para poder casarte con ella.\n\nUtilice .pareja @etiqueta La persona que quiere que sea su pareja.', m)
let pTime = global.db.data.users[m.sender].pasanganTime
let matrim = global.db.data.users[m.sender].marry
let matrimPasan = global.db.data.users[persona].marry
let pasanPerson = global.db.data.users[persona].pasangan
let currentTime = new Date() - pTime;
if (m.sender == matrimPasan && matrim == persona) return conn.reply(m.chat, 'Ya están casados 🥰', m)

if (matrimPasan !== "") {
global.db.data.users[persona].marry = ""
let kz = await conn.reply(m.chat, `💔 *${toM(m.sender)}* ha decidido rechazar la propuesta de matrimonio de *${toM(persona)}* por ahora.\n\n💖 Pero no se preocupen, ¡aún son pareja! Tómense su tiempo para decidir cuándo es el mejor momento para casarse.`, m, { contextInfo: { mentionedJid: [ persona, m.sender ]}})

conn.sendMessage(m.chat, { react: { text: "💔", key: kz.key }})
    
} else return conn.reply(m.chat, 'No hay propuesta de casamiento pendiente de tu pareja.', m)
}
handler.command = /^no$/i
handler.group = true
handler.botAdmin = true
export default handler
