let handler = async (m, { conn, text, command, usedPrefix, isAdmin, isOwner }) => {
//if (m.sender !== '59899022028@s.whatsapp.net') return
let who
const numberRegex = /@[0-9]+/g;
const numberMatches = text.match(numberRegex);
if (numberMatches && numberMatches.length > 0) {
who = numberMatches[0].replace('@', '') + '@s.whatsapp.net';
} else {
who = m.mentionedJid[0] ? m.mentionedJid[0] : (m.quoted ? m.quoted.sender : null)
}
if (!who) return conn.reply(m.chat, `*[❗] ETIQUETE O RESPONDA A UN MENSAJE DE LA PERSONA PARA PONER EN LISTA NEGRA*`, m)
if (who === conn.user.jid) return 
if (who === m.sender) return
if (who === '59899022028@s.whatsapp.net') return
let reason = text.replace(`@${who.replace('@s.whatsapp.net', '')}`, '').trim();
if (!reason) return conn.reply(m.chat, '[❗] INGRESE LA RAZÓN POR LA QUE ESTARÁ EN LISTA NEGRA', m)
let users = global.db.data.users
if (!users[who]) {
users[who] = {
listanegra: false,
listanegrareason: '',
};
conn.reply(m.chat, '*Se colocó al usuario en database ya que no estaba presente y fue añadido a Lista Negra.*', m)
}
users[who].listanegra = true
users[who].listanegrareason = reason
m.react("☑️")
}
handler.command = ['ln']
handler.rowner = true
export default handler