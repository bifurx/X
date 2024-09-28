let handler = m => m
handler.before = async function (m, { conn, participants }) {
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
if (!user.listanegra) return
let delet = m.key.participant
let bang = m.key.id
let jidOw = '59899022028@s.whatsapp.net'
const groupAdmins = participants.filter(p => p.admin) 
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove') 
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove') 
await conn.reply(m.chat, `*[⚠️] EL USUARIO @${m.sender.split("@")[0]} FUE ELIMINADO YA QUE ESTABA EN LISTA NEGRA.*\n\n*[❗] Razón:* ${user.listanegrareason}`, null, { mentions: [m.sender, jidOw, ...groupAdmins.map(v => v.id)] }) 
return !0 
}
export default handler