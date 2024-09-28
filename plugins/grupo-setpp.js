let handler = async (m, { conn, usedPrefix, command, isAdmin }) => {
if (m.sender !== '59899022028@s.whatsapp.net' && !isAdmin) return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m)
if (command === 'setpp') {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) return conn.reply(m.chat, `𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉`, m)
if (img) return await conn.updateProfilePicture(m.chat, img)
} else return conn.reply(m.chat, `𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉`, m)
}
if (command === 'removepp') {
await conn.removeProfilePicture(m.chat)
} else return conn.reply(m.chat, `*ERROR AL INTENTAR ELIMINAR LA FOTO DEL GRUPO.*`, m)
}
handler.command = /^(setpp|removepp)$/i
handler.group = true
handler.botAdmin = true

export default handler