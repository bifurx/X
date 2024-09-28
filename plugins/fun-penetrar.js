let handler = async (m, { conn, command, text, isAdmin, isOwner }) => {
if (!db.data.chats[m.chat].game && !isOwner) return conn.reply(m.chat, `Juegos deshabilitados.`, m)
let who = m.mentionedJid[0] ? m.mentionedJid[0] : (m.quoted ? m.quoted.sender : null)
if (who === conn.user.jid) return conn.reply(m.chat, `NO ME VAS A HACER ESO A MI🤨`, m)
if (who === '59899022028@s.whatsapp.net') return conn.reply(m.chat, '...', m)
if (!who) return conn.reply(m.chat, `*[❗] ETIQUETE A LA PERSONA O RESPONDA SU MENSAJE*`, m)
conn.reply(m.chat, 
`*@${who.split("@")[0]} TE HAN LLENADO LA CARA DE SEMEN POR PUTA Y ZORRA!*

le has metido el pene con todo y condon hasta quedar seco, ha dicho "por favor mas duroooooo!, ahhhhhhh, ahhhhhh, hazme un hijo que sea igual de pitudo que tu!" mientras te penetraba y luego te ha dejado en silla de ruedas!`, null, { mentions: [who] })
}
handler.command = ['penetrar', 'cogerparado']
handler.group = true
handler.botAdmin = true
export default handler
