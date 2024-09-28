let handler = async (m, { conn, isOwner }) => {
let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
let caption = `❌ \`USUARIOS BANEADOS\` ❌

│ *Total : ${users.length} Usuarios* ${users ? '\n' + users.map(([jid], i) => `
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*Estos usuarios no pueden usar el bot*`.trim()
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}
handler.command = /^listabanuser$/i
handler.rowner = true
export default handler
