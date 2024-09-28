let handler = async (m, { conn, command, usedPrefix, text, groupMetadata, isAdmin }) => {
    if (!text) return conn.reply(m.chat, `*[ ! ] Agrege una razon para la ejecuci\xf3n*`, m)
    if (text.length < 6) return conn.reply(m.chat, `*[ ! ] La razon es muy corta*`, m)
	let toM = a => '@' + a.split('@')[0]
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let pp = await conn.profilePictureUrl(a, 'image').catch((e) => "https://telegra.ph/file/24fa902ead26340f3df2c.png");
    let texto = `*[ Death Note ]* 📓

┏━⊱ *Seleccinado:* ${toM(a)}
┗⊱ *Raz\xf3n de su ejecucion:* 
${text}`
    await conn.sendFile(m.chat, pp, 'error.png', texto, m, fkontak, { mentions: [a]})
    setTimeout(async () => {
        await conn.groupParticipantsUpdate(m.chat, [a], 'remove');
    }, 5000);
}
handler.command = /^(deathnote)$/i
handler.group = true
handler.botAdmin = true
handler.admin = true
export default handler