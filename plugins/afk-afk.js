let handler = async (m, { text, args, usedPrefix, command, conn}) => { 
let user = global.db.data.users[m.sender]
let inGroup = user[m.chat].inGroup;
if (!text) return conn.reply(m.chat, `[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙼𝙾𝚃𝙸𝚅𝙾 𝙳𝙴𝙻 𝙰𝙵𝙺.`, m)
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return 
inGroup.afk = + new Date
inGroup.afkReason = text
let teks = `⚠️ *ADVERTENCIA* ⚠️
*▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*
*[❗] NO ETIQUETEN A @${m.sender.split("@")[0]}* *ESTARÁ INACTIVO(A)*\n\n*[❔] RAZÓN:* ${text ? text : ''}`
await conn.reply(m.chat, teks, fkontak, { mentions: conn.parseMention(teks) })
}
handler.command = /^afk$/i
handler.group = true
handler.botAdmin = true
export default handler
