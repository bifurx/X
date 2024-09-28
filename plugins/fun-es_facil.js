let handler = async (m, { conn, command, usedPrefix, text, groupMetadata, isAdmin }) => {
let toM = a => '@' + a.split('@')[0]
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
if (isAdmin) {
    conn.reply(m.chat, `Con la hermana de ${toM(a)} 😐`, m, {mentions: [a]})
} else {
    conn.reply(m.chat, `Con la hermana de ${toM(a)} 😐`, m, {mentions: [a]})
}
}
handler.customPrefix = /^(quiero coger|quiero cojer|necesito coger|necesito cojer|quiero garchar|esta pa garchar|está pa garchar|esta para garchar|está para garchar|que ganas de coger|que ganas de ponerla)/i
handler.command = new RegExp
handler.group = true
handler.botAdmin = true
export default handler