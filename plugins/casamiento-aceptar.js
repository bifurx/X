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
if (currentTime < 604800000) return conn.reply(m.chat, 'Debes tener una semana de pareja para poder casarte.', m)

if (matrimPasan.length >= 1 && currentTime > 604800000) {
global.db.data.users[m.sender].marry = persona

global.db.data.users[m.sender].marryTime = + new Date 
global.db.data.users[persona].marryTime = + new Date 
    
let kz = await conn.reply(m.chat, `💞 *¡Felicidades!* 💞\n\n*${toM(m.sender)}* ha aceptado la propuesta de matrimonio de *${toM(persona)}*.\n\n🎉 *¡Oficialmente están casados!* 🎉\n\nQue su amor siga creciendo y floreciendo cada día más. 🌸`, m, { contextInfo: { mentionedJid: [ persona, m.sender ]}})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "💗", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "❤️‍🔥", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "🩵", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "💚", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "💛", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "🩷", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "❤️", key: kz.key }})
await delay(3000)
conn.sendMessage(m.chat, { react: { text: "💗", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "❤️‍🔥", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "🩵", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "💚", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "💛", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "🩷", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "❤️", key: kz.key }})
} else return conn.reply(m.chat, 'No hay propuesta de casamiento pendiente de tu pareja.', m)
}
handler.command = /^si$/i
handler.group = true
handler.botAdmin = true
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))