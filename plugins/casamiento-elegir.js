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
    
if (persona != "" && currentTime > 604800000) {
global.db.data.users[m.sender].marry = persona
    
let kz = await conn.reply(m.chat, `*🪐¡Propuesta de Casamiento!🪐*\n\nDespues de estar un tiempo juntos,*💍@${m.sender.split("@")[0]}* decidió perdirle matrimonio a *${toM(persona)}💐*\n\n𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙻𝙰 𝙳𝙴𝙲𝙻𝙰𝚁𝙰𝙲𝙸𝙾́𝙽 ${toM(persona)} 🥰\n\n.si [ Para Aceptar ]\n.no [ Para Rechazar ]`, m, { contextInfo: { mentionedJid: [ persona, m.sender ]}})

conn.sendMessage(m.chat, { react: { text: "😳", key: kz.key }})
    
} else return
}
handler.command = ['casarse', 'casarme', 'boda', 'matrimonio']
handler.group = true
handler.botAdmin = true
export default handler
