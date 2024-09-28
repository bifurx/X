let handler = async (m, { conn }) => {
if (m.sender !== '59899022028@s.whatsapp.net') return
let ban = global.db.data.chats    
let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
let caption = `💬 \`CHATS BANEADOS\` 💬

│ *Total: ${chats.length} Chats* ${chats ? '\n│\n' + chats.map(([jid], i) =>`
│ ${i + 1}. ${conn.getName(jid) == undefined ? 'Sin Chats Baneados' : `*CHAT BANEADO*`}
│ ${jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}`
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}
handler.command = /^listabc$/i
handler.rowner = true
export default handler
