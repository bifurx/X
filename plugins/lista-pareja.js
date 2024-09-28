let handler = async (m, { conn, isOwner }) => {
if (m.sender !== '5989907322028@s.whatsapp.net') return
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let user = conn.getName(m.sender);
    let pareja = global.db.data.users[m.sender]?.pasangan;
    let relacion = Object.entries(global.db.data.users)
        .filter(([jid, userData]) => userData.pasangan && global.db.data.users[userData.pasangan]?.pasangan === jid);
    let parejasListadas = new Set();
    let parejas = relacion.reduce((acc, [jid, userData]) => {
        if (!parejasListadas.has(jid) && !parejasListadas.has(userData.pasangan)) {
            parejasListadas.add(jid);
            parejasListadas.add(userData.pasangan);
            let casadosMessage = userData.marry && global.db.data.users[userData.pasangan].marry ? `*💍Casados:* ✅` : `*💍Casados:* ❌`;
            acc.push({ 
                user1: jid, 
                user2: userData.pasangan, 
                pasanganTime: userData.pasanganTime,
                casadosMessage: casadosMessage 
            });
        }
        return acc;
    }, []);

    if (m.chat === '120363231967502326@g.us') {
        let usuarioEspecifico = '59891846943@s.whatsapp.net';
        let parejaEspecifica = parejas.find(p => p.user1 === usuarioEspecifico || p.user2 === usuarioEspecifico);
        if (parejaEspecifica) {
            parejas = parejas.filter(p => p !== parejaEspecifica);
            parejas.unshift(parejaEspecifica);
        }
    } else {
        let usuarioEspecifico = '59899022028@s.whatsapp.net';
        let parejaEspecifica = parejas.find(p => p.user1 === usuarioEspecifico || p.user2 === usuarioEspecifico);
        if (parejaEspecifica) {
            parejas = parejas.filter(p => p !== parejaEspecifica);
            parejas.unshift(parejaEspecifica);
        }
    }

    let caption = `❤️ 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙋𝘼𝙍𝙀𝙅𝘼𝙎 ❤️
╭•·━━━━━━━━━━━━━━━━━━━━
│ *Total: ${parejas.length} Parejas* ${parejas.length > 0 ? '\n│━━━━━━━━━━━━━━━━━━━━━\n' + parejas.map((r, i) => `
│ @${r.user1.split`@`[0]} 💞 @${r.user2.split`@`[0]}\n⏳ ${timeSince(r.pasanganTime)}\n${r.casadosMessage}\n│━━━━━━━━━━━━━━━━━━━━━`.trim()).join('\n') : ''}
╰•·━━━━━━━━━━━━━━━━━━━━`;

    await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) });
}

handler.command = /^(listaparejas)$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;

function timeSince(time) {
    let seconds = Math.floor((new Date() - time) / 1000);
    let interval;
    const timeUnits = [];

    // Calcular años
    interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        timeUnits.push(interval + ` año${interval !== 1 ? 's' : ''}`);
        seconds -= interval * 31536000;
    }

    // Calcular meses
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        timeUnits.push(interval + ` mes${interval !== 1 ? 'es' : ''}`);
        seconds -= interval * 2592000;
    }

    // Calcular días
    interval = Math.floor(seconds / 86400);
    const daysPassed = interval >= 1; // Guardar si ha pasado al menos un día
    if (interval >= 1) {
        timeUnits.push(interval + ` día${interval !== 1 ? 's' : ''}`);
        seconds -= interval * 86400;
    }

    // Calcular horas
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        timeUnits.push(interval + ` hora${interval !== 1 ? 's' : ''}`);
        seconds -= interval * 3600;
    }

    // Calcular minutos
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        timeUnits.push(interval + ` minuto${interval !== 1 ? 's' : ''}`);
        seconds -= interval * 60;
    }

    // Calcular segundos solo si ha pasado menos de un día
    if (!daysPassed && seconds >= 1) {
        timeUnits.push(seconds + ` segundo${seconds !== 1 ? 's' : ''}`);
    }

    return timeUnits.join(', ');
}