let handler = async (m, { conn, command, text }) => {
if (!text) return conn.reply(m.chat, 'Ingrese una pregunta.', m)
let siono = `${pickRandom(['✅ 𝗦𝗜 ✅', '❌𝗡𝗢❌'])}`
if (siono.includes('✅')) m.react('✅')
else if (siono.includes('❌')) m.react('❌')
}
handler.command = /^siono/i
handler.group = true
handler.botAdmin = true
export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
