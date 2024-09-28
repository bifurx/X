let handler = async (m, { conn, isOwner }) => {
let adv = Object.entries(global.db.data.users).filter(user => user[1].warn)
let warns = global.db.data.users.warn
let user = global.db.data.users
let caption = `⚠️ \`USUARIOS ADVERTIDOS\` ⚠️

│ *Total : ${adv.length} Usuarios* ${adv ? '\n' + adv.map(([jid, user], i) => `
│ ${isOwner ? '@' + jid.split`@`[0] : jid} *(${user.warn}/4)*\n│ - - - - - - - - -`.trim()).join('\n') : ''}`
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}
handler.command = /^listaadv$/i 
handler.rowner = true
export default handler
