let handler = async (m, { conn, command, text, groupMetadata, isAdmin, isOwner }) => {
if (!db.data.chats[m.chat].game && !isOwner) return conn.reply(m.chat, `Juegos deshabilitados.`, m)
let who = m.mentionedJid[0] ? m.mentionedJid[0] : (m.quoted ? m.quoted.sender : null)
    if (who === conn.user.jid) return conn.reply(m.chat, `NO ME VAS A HACER ESO A MI🤨`, m)
if (who === '59899022028@s.whatsapp.net') return conn.reply(m.chat, '...', m)
    let toM = a => '@' + a.split('@')[0]
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let cuman
   if (command == 'follar') {
       cuman = "follartel@"
   } else if (command == 'coger') {
       cuman = "cogertel@"
   }
    if (/^(random)$/i.test(text) ) {
        let teks = `${pickRandom([ `🔥 *Acabas de ${cuman}!* 🔥

*Te acabas de ${command.toLowerCase()} a la perra de* *${toM(a)}* *a 4 patas mientras te gemia como una maldita perra "Aaah.., Aaah, sigue, no pares, no pares.." y la has dejado tan reventada que no puede sostener ni su propio cuerpo la maldita zorra!*`, `PERO A QUIEN TE QUERES COGER VOS SI TENES EL PITO MAS CHICO QUE EL DE *${toM(a)}*` ])}
`.trim()
    m.reply(teks, null, { mentions: [a] })
    } else if (who) {
        let texs = `${pickRandom([ `🔥 *Acabas de ${cuman}!* 🔥

*Te acabas de ${command.toLowerCase()} a la perra de* *@${who.split("@")[0]}* *a 4 patas mientras te gemia como una maldita perra "Aaah.., Aaah, sigue, no pares, no pares.." y la has dejado tan reventada que no puede sostener ni su propio cuerpo la maldita zorra!*`, `PERO A QUIEN TE QUERES COGER VOS SI TENES EL PITO MAS CHICO QUE EL DE *${toM(a)}*` ])}
`.trim()
        if (/(CHICO)/i.test(texs) ) {
            m.reply(texs, null, { mentions: [a] })
        } else if (/(acabas)/i.test(texs) ) {
            m.reply(texs, null, { mentions: [who] })
        }
    } else return conn.reply(m.chat, `[❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙰 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝙵𝙾𝙻𝙻𝙰𝚁𝚂𝙴😈`, m)
    }
handler.command = /^(follar|coger)$/i
handler.group = true
handler.botAdmin = true
export default handler

function pickRandom(list) {

    return list[Math.floor(Math.random() * list.length)]

}