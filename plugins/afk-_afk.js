let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
if (m.fromMe) return
//if (m.text.startsWith('.afk')) return;
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
let user = global.db.data.users[m.sender]
let hap = global.db.data.users[who]
if (!user[m.chat]) return
let inGroup = user[m.chat].inGroup;
if (user.banned) return
if (inGroup.afk > -1) {
let teks = `*@${m.sender.split("@")[0]}* *DEJASTE DE ESTAR INACTIVO(A)*${inGroup.afkReason ? `\n\n*[❗] LA RAZÓN ERA:*\t\t` + inGroup.afkReason : ''}

*[⏳] TIEMPO INACTIVO:*\n*${(new Date - inGroup.afk).toTimeString()}*`
await m.reply(teks, null, { mentions: conn.parseMention(teks) }) 
inGroup.afk = -1
inGroup.afkReason = ''
}
// Verifica si la persona mencionada tiene AFK activo
if (who && who !== m.sender) {
let whoAfk = hap && hap[m.chat] && hap[m.chat].inGroup ? hap[m.chat].inGroup : {};
let afkTime = whoAfk.afk || 0;
if (afkTime > 0) {
// Verificar si el tiempo de inactividad es menor a 5 segundos
let tiempoInactivo = (new Date() - afkTime) / 1000; // Convertir a segundos
if (tiempoInactivo < 5) return; // Si es menor a 5 segundos, retornar y no enviar el mensaje
let reason = whoAfk.afkReason || '';
let tekss = `*❌EL USUARIO ESTÁ INACTIVO❌*\n\n${reason ? `*[❕] RAZÓN:*\t\t` + reason : `*MOTIVO DE LA INACTIVIDAD:\nNO ESPECIFICÓ MOTIVO DE INACTIVIDAD*`}

[⏳] TIEMPO INACTIVO:\n*${(new Date - whoAfk.afk).toTimeString()}*`
await m.reply(tekss, null, { mentions: conn.parseMention(tekss) });
}}
return true;
}
export default handler;