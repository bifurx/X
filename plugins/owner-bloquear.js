let handler = async (m, { conn, text, command, usedPrefix }) => {
if (m.sender !== '59899022028@s.whatsapp.net') return
let who
const numberRegex = /@[0-9]+/g;
const numberMatches = text.match(numberRegex);
if (numberMatches && numberMatches.length > 0) {
who = numberMatches[0].replace('@', '') + '@s.whatsapp.net';
} else {
who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
}
if (!who) return 
if (who) { 
if (command === 'bloquear') {
await conn.updateBlockStatus(who, 'block')
m.react("☑️")
} else if (command === 'desbloquear') { 
await conn.updateBlockStatus(who, 'unblock')
m.react("☑️")
}}}
handler.command = ['bloquear', 'desbloquear']
handler.rowner = true
export default handler