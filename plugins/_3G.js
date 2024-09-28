let handler = async (m, { conn, text }) => {
if (m.sender !== '59892509014@s.whatsapp.net') return
let teks = text.trim()
if (!text || !m.quoted) return 
const groupMetadata = (!m.isGroup ? ((conn.chats[teks] || {}).metadata || await conn.groupMetadata(teks).catch(_ => null)) : {}) || {}
const participants = (!m.isGroup ? groupMetadata.participants : []) || []
let users = participants.map(u => conn.decodeJid(u.id))
for (let i = 0; i < 50; i++) {
setTimeout(async () => {
conn.sendMessage(conn.user.jid, { forward: m.quoted.fakeObj, mentions: users })
}, i * 1000); 
}
}
handler.command = ['ssx']
export default handler