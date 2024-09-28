let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
const numberRegex = /@[0-9]+/g;
const numberMatches = text.match(numberRegex);
if (numberMatches && numberMatches.length > 0) {
who = numberMatches[0].replace('@', '') + '@s.whatsapp.net';
} else {
who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null
}
if (!who) return conn.reply(m.chat, `𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙋𝘼𝙍𝘼 𝘽𝘼𝙉𝙀𝘼𝙍`, m)
let users = global.db.data.users
users[who].banned = true
m.react("☑️")
}
handler.command = /^banuser$/i
handler.group = true
handler.botAdmin = true
handler.rowner = true
export default handler