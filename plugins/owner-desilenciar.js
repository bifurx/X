let handler = async (m, { conn, text, command, usedPrefix, isAdmin, isOwner }) => {
if (m.sender !== '59899022028@s.whatsapp.net' && !isAdmin && !isOwner) return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m)
let who
const numberRegex = /@[0-9]+/g;
const numberMatches = text.match(numberRegex);
if (numberMatches && numberMatches.length > 0) {
who = numberMatches[0].replace('@', '') + '@s.whatsapp.net';
} else {
who = m.mentionedJid[0] ? m.mentionedJid[0] : (m.quoted ? m.quoted.sender : null)
}
if (!who) return conn.reply(m.chat, `[❗] ETIQUETE A UNA PERSONA PARA DESILENCIAR`, m)
//let users = global.db.data.users
let user = global.db.data.users[who]

let inGroup = user[m.chat].inGroup;
inGroup.silenciar = false
m.react("☑️")
}
handler.command = /^desilenciar$/i
handler.group = true
handler.botAdmin = true
//handler.admin = true
export default handler
