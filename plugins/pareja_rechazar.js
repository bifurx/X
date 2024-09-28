import fetch from 'node-fetch'  
let handler = async (m, { conn, text, participants, groupMetadata }) => {
//if (m.sender !== '59899022028@s.whatsapp.net') return conn.fakeReply(m.chat, '‎ ', '0@s.whatsapp.net', 'Parejas no disponible')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null
var number = text.split`@`[1]

if (m.quoted && m.quoted.sender === conn.user.jid) return conn.reply(m.chat, '[❗] 𝙿𝙾𝙽𝙶𝙰 .aceptar @tag\n*𝚂𝙸𝙽* 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴𝙻 𝙱𝙾𝚃.', m)
if(!text && !m.quoted) return conn.reply(m.chat, `[❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝚁𝙴𝙲𝙷𝙰𝚉𝙰𝚁.`,  m)
	
try {
if (text) {
var user = number + '@s.whatsapp.net'
} else if (m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
	
if (user === m.sender) return conn.reply(m.chat, `𝚄𝚂𝚃𝙴𝙳 𝙼𝙸𝚂𝙼𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚂𝚄 𝙿𝙰𝚁𝙴𝙹𝙰🙄.`, fkontak,  m)
if (user === conn.user.jid) return conn.reply(m.chat, `𝚈𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝚂𝙴𝚁 𝚃𝚄 𝙿𝙰𝚁𝙴𝙹𝙰🥹`, fkontak,  m)
    
if (global.db.data.users[who].pasangan != m.sender) { 
return conn.reply(m.chat, `𝙽𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝚁𝙴𝙲𝙷𝙰𝚉𝙰𝚁 𝙰 @${who.split`@`[0]} 𝚂𝙸 𝙽𝙸𝙽𝙶𝚄𝙽𝙾 𝚂𝙴 𝙷𝙰 𝙳𝙴𝙲𝙻𝙰𝚁𝙰𝙳𝙾.`, fkontak, { contextInfo: { mentionedJid: [ user, who ] }})	
} else {
global.db.data.users[who].pasangan = ""
let kz = await conn.reply(m.chat, `🥺𝙻𝙰𝙼𝙴𝙽𝚃𝙰𝙱𝙻𝙴𝙼𝙴𝙽𝚃𝙴 @${m.sender.split("@")[0]} 𝚂𝙴 𝙷𝙰 𝙽𝙴𝙶𝙰𝙳𝙾 🚫 𝙰 𝙴𝚂𝚃𝙰𝚁 𝙴𝙽 𝚄𝙽𝙰 𝚁𝙴𝙻𝙰𝙲𝙸𝙾́𝙽 𝙲𝙾𝙽𝚃𝙸𝙶𝙾 @${who.split`@`[0]}\n\n𝙽𝙾 𝙴𝚂𝚃𝙴́𝚂 𝚃𝚁𝙸𝚂𝚃𝙴, 𝙰𝚄𝙽 𝚃𝙸𝙴𝙽𝙴𝚂 𝙼𝚄𝙲𝙷𝙰𝚂 𝙲𝙾𝚂𝙰𝚂 𝙿𝙾𝚁 𝙷𝙰𝙲𝙴𝚁🥹\n\n@${who.split`@`[0]} 💔 @${m.sender.split("@")[0]}`, fkontak, { contextInfo: { mentionedJid: [m.sender, who]}})	
conn.sendMessage(m.chat, { react: { text: "💔", key: kz.key }})
}}}
handler.command = /^rechazar$/i
handler.group = true
handler.botAdmin = true
export default handler