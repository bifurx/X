let handler = async (m, { conn, text, command, usedPrefix, isAdmin, isOwner }) => {
//if (m.sender !== '59899022028@s.whatsapp.net') return 
let who
const numberRegex = /@[0-9]+/g;
const numberMatches = text.match(numberRegex);
if (numberMatches && numberMatches.length > 0) {
who = numberMatches[0].replace('@', '') + '@s.whatsapp.net';
} else {
who = m.mentionedJid[0] ? m.mentionedJid[0] : (m.quoted ? m.quoted.sender : null)
}
if (!who) return conn.reply(m.chat, `*[❗] ETIQUETE O RESPONDA A UN MENSAJE DE LA PERSONA PARA SACAR DE LISTA NEGRA*`, m)
if (who === conn.user.jid) return 
if (who === m.sender) return
if (who === '59899022028@s.whatsapp.net') return 
let users = global.db.data.users
users[who].listanegra = false
m.react("☑️")
}
handler.command = ['lnremove']
handler.rowner = true
export default handler