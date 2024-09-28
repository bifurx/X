let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
if (m.fromMe) return
let user = global.db.data.users[m.sender]
if (user.banned) return
if (user.afk > -1) {
let teks = `*@${m.sender.split("@")[0]}* *DEJASTE DE ESTAR INACTIVO(A)*${user.afkReason ? `\n\n*[❗] LA RAZÓN ERA:*\t\t` + user.afkReason : ''}

*[⏳] TIEMPO INACTIVO:*\n*${(new Date - user.afk).toTimeString()}*`
await m.reply(teks, null, { mentions: conn.parseMention(teks) }) 
user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
let user = global.db.data.users[jid]
if (!user)
continue
let afkTime = user.afk
if (!afkTime || afkTime < 0)
continue
let reason = user.afkReason || ''
let tekss = `*❌EL USUARIO ESTÁ INACTIVO❌*\n\n${reason ? `*[❕] RAZÓN:*\t\t` + reason : `*MOTIVO DE LA INACTIVIDAD:\nNO ESPECIFICÓ MOTIVO DE INACTIVIDAD*`}

[⏳] TIEMPO INACTIVO:\n*${(new Date - user.afk).toTimeString()}*`
await m.reply(tekss, null, { mentions: conn.parseMention(tekss) }) 
}
return true
}
export default handler
