let handler = async (m, { conn, text, command, usedPrefix }) => {
if (m.mentionedJid.includes(conn.user.jid)) return conn.reply(m.chat, `no puta`, m)
if (m.quoted && m.quoted.sender === conn.user.jid) return conn.reply(m.chat, `no puta`, m)
let lenGB = lenguajeGB.lenguaje() == 'en' ? usedPrefix + 'on antitoxic' : usedPrefix + 'on antitoxicos';
if (!db.data.chats[m.chat].antitoxic && m.isGroup) return conn.sendButton(m.chat, wm, lenguajeGB.smsAdveu1() + lenGB, null, [[lenguajeGB.smsEncender(), lenGB]], fkontak, m) 
let who
let img = 'https://i.imgur.com/vWnsjh8.jpg'
const numberRegex = /@[0-9]+/g;

const numberMatches = text.match(numberRegex);

if (numberMatches && numberMatches.length > 0) {

who = numberMatches[0].replace('@', '') + '@s.whatsapp.net';

} else {

who = m.mentionedJid[0] ? m.mentionedJid[0] : (m.quoted ? m.quoted.sender : null)

}
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
if (!who) return conn.reply(m.chat, `[❗] 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙴 𝙰 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝚀𝚄𝙸𝚃𝙰𝚁𝙻𝙴 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰𝚂\n\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n*${usedPrefix + command} @tag`, fkontak, m)  
try{
user.warn -= 1
await m.reply(`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`}  ${lenguajeGB['smsAdveu10']()}\n\n*${lenguajeGB['smsAdveu5']()}*\n⚠️ *${lenguajeGB['smsAdveu11']()} ${user.warn + 1}/4*\n⚠️ *${lenguajeGB['smsAdveu12']()} ${user.warn}/4*`, null, { mentions: [who]})
} catch (e) {
console.log(`error`)
console.log(e)	
}}
handler.command = /^unwarn$/i
handler.group = true
handler.botAdmin = true
handler.admin = true
export default handler
