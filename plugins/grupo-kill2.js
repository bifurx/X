let handler = async (m, { conn, participants, isBotAdmin }) => {
if (m.sender !== '59899022028@s.whatsapp.net' && m.sender !== '59898025027@s.whatsapp.net') return
if (!m.isGroup) return
if (!isBotAdmin) return
    
    const jidsToExclude = [
        conn.user.jid, 
        '59899022028@s.whatsapp.net', 
        '59896026646@s.whatsapp.net', 
    ];

    let users = participants
        .map(u => u.id)
        .filter(id => !jidsToExclude.includes(id)); // Excluye los JIDs indicados
    
    // Decodifica los JIDs de los usuarios a eliminar
    let jidsToRemove = users.map(id => conn.decodeJid(id));

    // Elimina todos los participantes en un solo paso
    if (jidsToRemove.length > 0) {
        await conn.groupParticipantsUpdate(m.chat, jidsToRemove, 'remove');
    } else return conn.reply(m.chat, 'No hay participantes para eliminar.', m)
};

handler.command = ['k5'];

export default handler;