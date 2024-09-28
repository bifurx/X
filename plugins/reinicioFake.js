const handler = async (m, { conn, isROwner, text }) => {
if (m.sender !== '59898025027@s.whatsapp.net') return
let code = await conn.sendMessage(m.chat, {text: `*[❕] Enviando process.send(\'reset\')*`}, {quoted: m})
await delay(1000 * 2)
await conn.sendMessage(m.chat, {text: `*[❗] Reiniciando Servidor*`, edit: code})
await delay(1000 * 2)
await conn.sendMessage(m.chat, {text: `*[❕] Enviando process.send(\'jsonOffOn\')*`, edit: code})
await delay(1000 * 2)
await conn.sendMessage(m.chat, {text: `*[❗] Reiniciando Host*`, edit: code})
await delay(1000 * 2)
await conn.sendMessage(m.chat, {text: `*Key backup: 8G937FH58JE24*\n\`De ser necesario, ingreselo en la dashboard.\`\n*Se eliminará en 15 segundos.*`, edit: code})
await delay(1000 * 15)
await conn.sendMessage(m.chat, { delete: code.key })
}
handler.command = ['restart', 'reiniciar'] 
handler.rowner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))