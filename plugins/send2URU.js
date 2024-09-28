let handler = async (m, { conn, text, command, isOwner }) => {
if (!m.quoted) return
let destino = '120363316167679155@g.us'

if (command == 'send' && isOwner) {
conn.sendMessage(destino, { forward: m.quoted.fakeObj })
}
if (command === 'send2') {
if (m.isGroup) {
const groupMetadata = (m.isGroup ? ((conn.chats[destino] || {}).metadata || await conn.groupMetadata(destino).catch(_ => null)) : {}) || {}
const participants = (m.isGroup ? groupMetadata.participants : []) || []
let users = participants.map(u => conn.decodeJid(u.id))
conn.sendMessage(destino, { forward: m.quoted.fakeObj, mentions: users })
} else if (!m.isGroup) {
const groupMetadata = (!m.isGroup ? ((conn.chats[destino] || {}).metadata || await conn.groupMetadata(destino).catch(_ => null)) : {}) || {}
const participants = (!m.isGroup ? groupMetadata.participants : []) || []
let users = participants.map(u => conn.decodeJid(u.id))
conn.sendMessage(destino, { forward: m.quoted.fakeObj, mentions: users })
}}}
handler.command = ['send', 'send2']
handler.rowner = true
export default handler