let handler = async (m, { conn, text }) => {
let who
const numberRegex = /@[0-9]+/g;
const numberMatches = text.match(numberRegex);
if (numberMatches && numberMatches.length > 0) {
who = numberMatches[0].replace('@', '') + '@s.whatsapp.net';
} else {
who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
}
if (!who) return conn.reply(m.chat `Menciona a un usuario o responda a su mensaje`, m)
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => global.noprofileurl)
await conn.sendFile(m.chat, pp, 'Profile.jpg', null, m)
}
handler.command = ['getppuser']
handler.group = true
handler.botAdmin = true
export default handler