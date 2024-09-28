let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
let lenGB = lenguajeGB.lenguaje() == 'en' ? usedPrefix + 'on antitoxic' : usedPrefix + 'on antitoxicos';
if (!db.data.chats[m.chat].antitoxic && m.isGroup) return conn.reply(m.chat, lenguajeGB.smsAdveu1() + lenGB, fkontak, m) 
if (m.mentionedJid.includes('59899022028@s.whatsapp.net')) return;
if (m.quoted && m.quoted.sender === '59899022028@s.whatsapp.net') return;
if (m.mentionedJid.includes(conn.user.jid)) return conn.reply(m.chat, `no puta`, m)
if (m.quoted && m.quoted.sender === conn.user.jid) return conn.reply(m.chat, `no puta`, m)
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
if (!who) return conn.reply(m.chat, `[❗] 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙴 𝙰 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝙰𝙳𝚅𝙴𝚁𝚃𝙸𝚁\n\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n*`, fkontak, m) 
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) return conn.reply(m.chat, `[❗] 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙴 𝙰 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝙰𝙳𝚅𝙴𝚁𝚃𝙸𝚁\n\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n*`, fkontak, m) 
try {
user.warn += 1
await m.reply(
    `${
      user.warn == 1 ? `⚠️ *@${who.split`@`[0]}*` : `⚠️ *@${who.split`@`[0]}*`
    } ${lenguajeGB['smsAdveu4']()}\n\n👉 *${text}*\n\n*${lenguajeGB['smsAdveu5']()}*\n⚠️ *${user.warn}/4*`,
    null,
    { mentions: [who] });
	
if (user.warn >= 4) {
user.warn = 0
await m.reply(`${lenguajeGB['smsAdveu7']()}\n*@${who.split`@`[0]}* ${lenguajeGB['smsAdveu8']()}`, false, { mentions: [who] })
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') 
}	
return !1
} catch (e) {
console.log(`error`)
console.log(e)
}}
handler.command = /^advertir$/i
handler.group = true
handler.botAdmin = true
handler.admin = true
export default handler
