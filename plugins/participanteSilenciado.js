let handler = m => m
handler.all = async function (m) {
let user = global.db.data.users[m.sender]
let inGroup = user[m.chat] && user[m.chat].inGroup ? user[m.chat].inGroup : null
if (!inGroup) return
if (!inGroup.silenciar && !user.silenciar) return 
if (inGroup.silenciar) {
let delet = m.key.participant
let bang = m.key.id
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
if (user.silenciar) {
let delet = m.key.participant
let bang = m.key.id
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
return !0 
}
export default handler


/*let handler = m => m
handler.all = async function (m) {
let user = global.db.data.users[m.sender]
let inGroup = user[m.chat] && user[m.chat].inGroup ? user[m.chat].inGroup : null
if (!inGroup) return
if (!inGroup.silenciar) return
let delet = m.key.participant
let bang = m.key.id
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
return !0 
}
export default handler*/