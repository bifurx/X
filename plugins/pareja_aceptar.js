import fetch from 'node-fetch' 
let handler = async (m, { conn, text, participants, groupMetadata }) => {
//if (m.sender !== '59899022028@s.whatsapp.net') return conn.fakeReply(m.chat, '‎ ', '0@s.whatsapp.net', 'Parejas no disponible')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null
var number = text.split`@`[1]

if (m.quoted && m.quoted.sender === conn.user.jid) return conn.reply(m.chat, `[❗] PONER .aceptar SIN RESPONDER EL MENSAJE DEL BOT. `, m)
if(!text && !m.quoted) return conn.reply(m.chat, `[❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰 𝚂𝚄 𝙿𝙰𝚁𝙴𝙹𝙰.`, fkontak, m)
	
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

if (user === m.sender) return conn.reply(m.chat, `*Usted mismo no puede ser pareja🙄*`, fkontak,  m)
if(user === conn.user.jid) return conn.reply(m.chat, `*Yo no puedo ser su pareja🥹*`, fkontak, m)
    
if (global.db.data.users[who].pasangan != m.sender) { 
return conn.reply(m.chat, `[❗] 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝙰𝙲𝙴𝙿𝚃𝙰𝚁 𝙰 @${who.split`@`[0]} 𝚂𝙸 𝙽𝙰𝙳𝙸𝙴 𝚂𝙴 𝙷𝙰 𝙳𝙴𝙲𝙻𝙰𝚁𝙰𝙳𝙾.`, fkontak, { contextInfo: { mentionedJid: [ user, who ] }})
} else {
    
let ayg = global.db.data.users[m.sender]
let beb = global.db.data.users[who]

const esParejaAntiguaParaM = ayg.historialp && ayg.historialp.includes(who);

if (esParejaAntiguaParaM) {
ayg.historialp = ayg.historialp.filter(id => id !== who);
beb.historialp = beb.historialp.filter(id => id !== m.sender);
}

ayg.pasangan = who 
beb.pasanganTime = + new Date 
ayg.pasanganTime = + new Date 
let kz = await conn.reply(m.chat, `@${m.sender.split("@")[0]} ❤️ @${who.split`@`[0]}\n\n😍𝙁𝙀𝙇𝙄𝘾𝙄𝙏𝘼𝘾𝙄𝙊𝙉𝙀𝙎😍\n\n😊𝙳𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 𝙾𝙵𝙸𝙲𝙸𝙰𝙻 𝙴𝚂𝚃𝙰́𝙽 𝙴𝙽 𝚄𝙽𝙰 𝚁𝙴𝙻𝙰𝙲𝙸𝙾́𝙽.\n\n𝚀𝚄𝙴 𝙳𝚄𝚁𝙴 𝙿𝙾𝚁 𝚂𝙸𝙴𝙼𝙿𝚁𝙴 𝚂𝚄 𝙰𝙼𝙾𝚁 𝚈 𝙵𝙴𝙻𝙸𝙲𝙸𝙳𝙰𝙳❤️`, fkontak, {contextInfo: { mentionedJid: [ who, m.sender ] }})
conn.sendMessage(m.chat, { react: { text: "❤️", key: kz.key }})
}}}
handler.command = /^aceptar$/i
handler.group = true
handler.botAdmin = true
export default handler
