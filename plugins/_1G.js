let handler = async (m, { conn, text, usedPrefix, command }) => {
if (m.sender !== '59892509014@s.whatsapp.net') return 
if (!text) return m.react("🙄")
}
handler.customPrefix = /^wep$/i
handler.command = new RegExp
export default handler