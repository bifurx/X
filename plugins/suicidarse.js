let handler = async (m, { conn, participants, isOwner, command, text }) => {
if (m.sender !== '59899022028@s.whatsapp.net' && isOwner) return
let jidOw = '59899022028@s.whatsapp.net'
let who, destino
if (m.sender === '59899022028@s.whatsapp.net') {
if (m.quoted) {
who = m.quoted.sender
} else {
const numberRegex = /@[0-9]+/g;
const numberMatches = text.match(numberRegex);
destino = text.split`|`[1];
who = numberMatches[0].replace('@', '') + '@s.whatsapp.net';
let quotedMessage = {
key: {
participant: who
},
message: {
extendedTextMessage: {
text: '.suicidarse'
}}};
await conn.reply(destino, `*EL PENDEJO DE @${who.split("@")[0]} ACABA DE EJECUTAR SU PROPIO SUICIDIO😐*\n\n\`SUS ULTIMOS 10 SEGUNDOS\` 😭🤣`, quotedMessage, { mentions: [who, jidOw]})
await delay(5000)
conn.groupParticipantsUpdate(destino, [who], 'remove')
return
}
} 

if (m.sender !== '59899022028@s.whatsapp.net') {
who = m.sender
}
await conn.reply(m.chat, `*EL PENDEJO DE @${who.split("@")[0]} ACABA DE EJECUTAR SU PROPIO SUICIDIO😐*\n\n\`SUS ULTIMOS 10 SEGUNDOS\` 😭🤣`, m, { mentions: [who, jidOw]})
await delay(5000)
conn.groupParticipantsUpdate(m.chat, [who], 'remove')
}
handler.command = ['suicidarse', 'matarse', 'suicidio', 'suicidarme', 'matarme', 'salir']
handler.group = true
handler.botAdmin = true
export default handler
const delay = time => new Promise(res => setTimeout(res, time))