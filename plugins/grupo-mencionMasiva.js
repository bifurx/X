let activeTimers = {};

let handler = async (m, { conn, text, command, usedPrefix, isAdmin, isOwner }) => {
    if (m.sender !== '59899022028@s.whatsapp.net' && !isAdmin) return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m);
    
    if (command === 'cancelar') {
        if (activeTimers[m.chat]) {
            for (let timers of activeTimers[m.chat]) {
                for (let timer of timers) {
                    clearTimeout(timer);
                }
            }
            delete activeTimers[m.chat];
            return conn.reply(m.chat, `Menciones canceladas.`, m);
        } else {
            return conn.reply(m.chat, `No hay menciones en curso.`, m);
        }
    }

    let who;
    const numberRegex = /@[0-9]+/g;
    const numberMatches = text.match(numberRegex);
    if (numberMatches && numberMatches.length > 0) {
        who = numberMatches[0].replace('@', '') + '@s.whatsapp.net';
    } else {
        who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
    }
    let mencion = `@${who.split("@")[0]}`;
    if (who) {
        if (!activeTimers[m.chat]) {
            activeTimers[m.chat] = [];
        }
        let timersArray = [];
        for (let i = 0; i < 25; i++) {
            let timer = setTimeout(async () => {
                conn.reply(m.chat, mencion, m, { mentions: [who] });
            }, i * 1000);
            timersArray.push(timer);
        }
        activeTimers[m.chat].push(timersArray);
    }
};

handler.command = ['llamar', 'mencionar', 'cancelar'];
handler.group = true;
//handler.botAdmin = true;
//handler.admin = true;
export default handler;