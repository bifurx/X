let handler = async (m, { conn, text }) => {
//if (m.sender !== '59899022028@s.whatsapp.net') return
if (!text || !m.quoted) return
let destino = text.trim()

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
}}
handler.command = ['htsi']
handler.rowner = true
export default handler