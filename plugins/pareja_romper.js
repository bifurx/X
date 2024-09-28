let handler = async (m, { conn }) => { 
//if (m.sender !== '59899022028@s.whatsapp.net') return conn.fakeReply(m.chat, '‎ ', '0@s.whatsapp.net', 'Parejas no disponible')
let pasan = global.db.data.users[m.sender].pasangan
var ayg = global.db.data.users[m.sender]
var beb = global.db.data.users[global.db.data.users[m.sender].pasangan]
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'

if (m.quoted && m.quoted.sender === conn.user.jid) return await conn.reply(m.chat, 'No responda el mensaje del bot.', m)

if(ayg.pasangan == "") {
let kz = await conn.reply(m.chat, `𝚄𝚂𝚃𝙴𝙳 @${m.sender.split("@")[0]} 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝙿𝙰𝚁𝙴𝙹𝙰.`, fkontak, {contextInfo: { mentionedJid: [ m.sender ] }})    
conn.sendMessage(m.chat, { react: { text: "🤣", key: kz.key }})
return
}
      
if (typeof beb == "undefined") {
let kz = await conn.reply(m.chat, `💔@${m.sender.split("@")[0]} 𝚁𝙾𝙼𝙿𝙸𝙾́ 𝙳𝙴𝙵𝙸𝙽𝙸𝚃𝙸𝚅𝙰𝙼𝙴𝙽𝚃𝙴 𝙲𝙾𝙽 𝚂𝚄 𝙿𝙰𝚁𝙴𝙹𝙰💔`, fkontak, {contextInfo: { mentionedJid: [ m.sender ] }}) 
conn.sendMessage(m.chat, { react: { text: "💔", key: kz.key }})
ayg.pasangan = ""
ayg.pasanganTime = -1
}

if (m.sender == beb.pasangan) {
let kz = await conn.reply(m.chat, `💔@${m.sender.split("@")[0]} 𝚁𝙾𝙼𝙿𝙸𝙾́ 𝙳𝙴𝙵𝙸𝙽𝙸𝚃𝙸𝚅𝙰𝙼𝙴𝙽𝚃𝙴 𝙲𝙾𝙽 𝚂𝚄 𝙿𝙰𝚁𝙴𝙹𝙰💔`, fkontak, {contextInfo: { mentionedJid: [ m.sender ] }}) 
conn.sendMessage(m.chat, { react: { text: "💔", key: kz.key }})
const esNuevaParejaM = !ayg.historialp.includes(pasan);
const esNuevaParejaW = !beb.historialp.includes(m.sender);

if (esNuevaParejaM) ayg.historialp.push(pasan);
if (esNuevaParejaW) beb.historialp.push(m.sender);
    
ayg.pasangan = ""
ayg.pasanganTime = -1
beb.pasangan = ""
beb.pasanganTime = -1
ayg.marry = ""
ayg.marryTime = -1
beb.marry = ""
beb.marryTime = -1
} else {
let kz = await conn.reply(m.chat, `𝚄𝚂𝚃𝙴𝙳 @${m.sender.split("@")[0]} 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝙿𝙰𝚁𝙴𝙹𝙰.`, fkontak,  {contextInfo: { mentionedJid: [ m.sender ] }})    
conn.sendMessage(m.chat, { react: { text: "🤣", key: kz.key }})
}}

handler.command = /^terminar$/i
handler.group = true
handler.botAdmin = true
export default handler
