let handler = async (m, { conn, isOwner }) => {
let users = Object.entries(global.db.data.users).filter(user => user[1].listanegra)
let caption = `
⚫ \`Usuarios en Lista Negra\`

│ *Total : ${users.length} Usuarios* 
${users ? '\n' + users.map(([jid, user], i) => `
│ ${isOwner ? '@' + jid.split`@`[0] : jid}
│ *Razón:* ${user.listanegrareason || 'No especificado'}
│ - - - - - - - - -`.trim()).join('\n') : ''}`.trim()
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^listanegra$/i
handler.rowner = true
export default handler