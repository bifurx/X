let handler = async (m, { conn, text, command, usedPrefix, isAdmin, isOwner }) => {
if (m.sender !== '59899022028@s.whatsapp.net') return 
let jid = text.split`|`[1].trim()
let who
const numberRegex = /@[0-9]+/g;
const numberMatches = text.match(numberRegex);
if (numberMatches && numberMatches.length > 0) {
who = numberMatches[0].replace('@', '') + '@s.whatsapp.net';
} 
if (!who) return conn.reply(m.chat, `[❗] ETIQUETE A UNA PERSONA PARA DESILENCIAR`, m)
let user = global.db.data.users[who]
let inGroup = user[jid].inGroup;
inGroup.silenciar = true
m.react("☑️")
}
handler.command = /^silenciarp$/i
handler.group = true
handler.botAdmin = true
//handler.admin = true
export default handler