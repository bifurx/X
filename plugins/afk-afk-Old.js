let handler = async (m, { text, args, usedPrefix, command, conn}) => { 
if (!text) return conn.reply(m.chat, `[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙴𝙻 𝙰𝙵𝙺.`, m)
let user = global.db.data.users[m.sender]
for (let jid in user) {
if (jid.endsWith('@g.us')) {
let userAfk = user[jid].inGroup
if (userAfk && userAfk.afk > -1) {
userAfk.afk = -1
userAfk.afkReason = ''
//return conn.reply(m.chat, `[❗] Para usar afk8x, debes quitar tu afk individual de los grupos, sinó aparecerán alertas dobles cada vez que te mencionen.`, m)
}}}
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return 
user.afk = + new Date
user.afkReason = text
let teks = `⚠️ *ADVERTENCIA* ⚠️
*▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*
*[❗] NO ETIQUETEN A @${m.sender.split("@")[0]}* *ESTARÁ INACTIVO(A)*\n\n*[❔] RAZÓN:* ${text ? text : ''}`
await conn.reply(m.chat, teks, fkontak, { mentions: conn.parseMention(teks) })
}
handler.command = /^afk8x$/i
handler.rowner = true
export default handler
