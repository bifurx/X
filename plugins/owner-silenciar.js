let handler = async (m, { conn, text, command, usedPrefix, isAdmin, isOwner }) => {


if (m.sender !== '59899022028@s.whatsapp.net' && !isAdmin && !isOwner) return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m)
if (m.chat === '120363316167679155@g.us' && !isOwner) return
let who
const numberRegex = /@[0-9]+/g;
const numberMatches = text.match(numberRegex);
if (numberMatches && numberMatches.length > 0) {
who = numberMatches[0].replace('@', '') + '@s.whatsapp.net';
} else {
who = m.mentionedJid[0] ? m.mentionedJid[0] : (m.quoted ? m.quoted.sender : null)
}
if (!who) return conn.reply(m.chat, `[❗] ETIQUETE O RESPONDA A UNA PERSONA PARA SILENCIAR`, m)
if (who === conn.user.jid) return conn.reply(m.chat, `*SILENCIATE EL ORTO🤨*`, m)
if (who === '59899022028@s.whatsapp.net') return 
//let users = global.db.data.users
let user = global.db.data.users[who]

let inGroup = user[m.chat].inGroup;
inGroup.silenciar = true
m.react("☑️")
}
handler.command = ['silenciar', 'silencio', 'hacesilencio', 'apagate']
handler.group = true
handler.botAdmin = true
//handler.admin = true
export default handler