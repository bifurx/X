let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let handler = async (m, { conn, text, isOwner }) => {
//if (m.sender !== '59899022028@s.whatsapp.net') return
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (!code) return conn.reply(m.chat, '*[❗] INGRESE EL ENLACE DEL GRUPO*', m)
conn.reply(m.chat, '*[⏳] Entrando al grupo..*', m)
await delay(5000)
let res = await conn.groupAcceptInvite(code)
}
handler.command = /^join$/i 
//handler.private = true
handler.rowner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))