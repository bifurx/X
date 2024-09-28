let handler = async (m, { conn, usedPrefix, command, text, isAdmin, isOwner }) => {
if (m.sender !== '59899022028@s.whatsapp.net' && !isAdmin && !isOwner) return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m)
if (m.mentionedJid.includes(conn.user.jid)) return  
if (m.quoted && m.quoted.sender === conn.user.jid) return 
if(isNaN(text) && !text.match(/@/g)){
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
if(!text && !m.quoted) return conn.reply(m.chat, `[❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝙳𝙰𝚁𝙻𝙴 *𝙰𝙳𝙼𝙸𝙽*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `Numero inválido.`, m)
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} } catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
}}
handler.command = /^p$/i
handler.group = true
handler.botAdmin = true
//handler.admin = true
export default handler 
