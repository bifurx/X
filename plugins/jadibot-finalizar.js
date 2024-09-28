let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `𝙉𝙊 𝙀𝙎 𝙎𝙐𝘽 𝘽𝙊𝙏`, m)
else {
await conn.reply(m.chat, `𝙐𝙎𝙏𝙀𝘿 𝙃𝘼 𝘾𝙀𝙍𝙍𝘼𝘿𝙊 𝙎𝙀𝙎𝙄𝙊𝙉`, m)
conn.ws.close()}}
handler.command = /^(stop)$/i
handler.owner = true  
handler.fail = null
export default handler
