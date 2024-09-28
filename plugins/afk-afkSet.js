let handler = async (m, { text, args, usedPrefix, command, conn }) => { 
if (!text) return conn.reply(m.chat, `[❗] RESPONDA A UN MENSAJE DE LA PERSONA CON:\n- .afkset Razón\n\nDE LO CONTRARIO, PONER:\n- .afkset @usuario Motivo`, m)
let who
const numberRegex = /@[0-9]+/g;
const numberMatches = text.match(numberRegex);
if (numberMatches && numberMatches.length > 0) {
who = numberMatches[0].replace('@', '') + '@s.whatsapp.net';
} else {
who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
}
if (who == '59899022028@s.whatsapp.net') return
const sp = '@' + who.split`@`[0];
const hax = text.split`|`[0];
let user = global.db.data.users[who]
user.afk = + new Date
user.afkReason = hax
let teks = `⚠️ *ADVERTENCIA* ⚠️
*▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*
*[❗] NO ETIQUETEN A @${who.split("@")[0]}* *ESTARÁ INACTIVO(A)*\n\n*[❔] RAZÓN:* ${hax ? hax : ''}`
await conn.reply(m.chat, teks, fkontak, { contextInfo: { mentionedJid: [ who, m.sender ]}})
}
handler.command = /^afkset$/i
handler.group = true
handler.botAdmin = true
handler.admin = true
export default handler
