let handler = async (m, { conn, text, command, isAdmin, isOwner }) => {
if (m.sender !== '59899022028@s.whatsapp.net' && !isAdmin) return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m)
const groupId = m.chat; 
try {
if (command == 'pendientes') {
const participants = await conn.groupRequestParticipantsList(groupId);
if (!participants.length) {
await m.reply('No hay participantes pendientes de aprobación.');
return;
}
let message = "Lista de participantes pendientes de aprobación:\n\n";
participants.forEach((participant, index) => {
const phoneNumber = participant.jid.split("@")[0];
message += `${index + 1}. JID: @${phoneNumber}\n* Se unió a través de: ${participant.request_method}\n\n`;
});
await m.reply(message, null, { mentions: conn.parseMention(message) });
} else if (command == 'ap' || command == 'aprobar') {
const participants = await conn.groupRequestParticipantsList(groupId); 
if (!participants.length) {
await m.reply('No hay participantes pendientes de aprobación.');
return;
}
for (const participant of participants) {
const response = await conn.groupRequestParticipantsUpdate(groupId, [participant.jid], "approve");
console.log('Aprobando JID:', participant.jid, 'Respuesta:', response); 
}
await m.reply('*[😀] Todos los participantes han sido aprobados.*');
}} catch (error) {
console.error('Error al procesar el comando:', error);
await conn.reply(m.chat, 'Hubo un error al procesar el comando.', m);
}};
handler.command = ['ap'];
handler.group = true;
handler.botAdmin = true;
export default handler;