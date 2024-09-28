let handler = async (m, { conn, command, usedPrefix, text, customPrefix, groupMetadata, isAdmin }) => {
let toM = a => '@' + a.split('@')[0]
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let caption
if (usedPrefix !== 'que rica') {
caption = [`Como la hermana de ${toM(a)} 😐🤣`, 'Como la puta y sucia de tu hermana 🤣', 'Tu hermana es facil y nadie dice nada 😂'].getRandom()
} else {
caption = [`Como la hermana de ${toM(a)} 😐🤣`, 'Rica está tu hermana 🤣'].getRandom()
}
conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })
}
handler.customPrefix = /^(facil|es facil|fácil|es fácil|re facil|re fácil|muy facil|muy fácil|que rica)$/i
handler.command = new RegExp
handler.group = true
handler.botAdmin = true
export default handler