let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {

    // Verifica si el usuario es admin o el dueño
    if (m.sender !== '59899022028@s.whatsapp.net' && !isAdmin) return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m);
    if (m.chat === '120363316167679155@g.us' && !isOwner) return;
    if (!db.data.chats[m.chat].menciones && !isOwner) return conn.reply(m.chat, `Comandos de menciones deshabilitados.`, m);

    const more = String.fromCharCode(8206)

const readMore = more.repeat(4001)
    let htextos = `${text ? text : "_no_establecido_"}`;
    let oi = `*MENSAJE:* ${htextos}`;
    let teks = `*😾HOLAAAAAAAAAA😾*\n\n${oi}\n\n${readMore}`;
    // Lista de jids a excluir
    const excludeJids = ['59898303505@s.whatsapp.net']; // Agrega más jids aquí

    // Construir el mensaje excluyendo los jids
    for (let mem of participants) {
        if (!excludeJids.includes(mem.id)) { // Verifica si el jid no está en la lista de excluidos
            teks += `@${mem.id.split('@')[0]} `;
        }
    }

    // Repetir el mensaje varias veces
    let repeatCount = 10;  // Número de veces que se enviará el mensaje
    let interval = 500;   // Intervalo de tiempo entre cada mensaje en milisegundos

    let i = 0;
    let intervalId = setInterval(() => {
        conn.sendMessage(m.chat, { 
            text: teks, 
            mentions: participants
                .filter(a => !excludeJids.includes(a.id))
                .map(a => a.id)
        }, {quoted: m});

        i++;
        if (i >= repeatCount) {
            clearInterval(intervalId);  // Detiene el intervalo cuando se ha alcanzado el número de repeticiones
        }
    }, interval);
}

handler.command = ['tagall2', 'todos2'];
handler.group = true;
handler.botAdmin = true;
//handler.admin = true
export default handler;