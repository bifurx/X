let handler = async (m, { conn, usedPrefix }) => { 
//if (m.sender !== '59899022028@s.whatsapp.net') return conn.fakeReply(m.chat, '‎ ', '0@s.whatsapp.net', 'Parejas no disponible')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let toM = persona => '@' + persona.split('@')[0]
let usuario = conn.getName(who)
let persona = global.db.data.users[m.sender].pasangan
let userPasan = global.db.data.users[m.sender]
let pasan = global.db.data.users[persona]
let totalParejas = global.db.data.users[m.sender].historialp.length;
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'

if (global.db.data.users[m.sender].pasangan == "") {
let kz = await conn.reply(m.chat, `@${m.sender.split("@")[0]} 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴𝚂 𝙿𝙰𝚁𝙴𝙹𝙰\n\n*Parejas que has tenido: ${totalParejas}*`, fkontak, {contextInfo: { mentionedJid: [ m.sender ] }})
conn.sendMessage(m.chat, { react: { text: "🤣", key: kz.key }})
}

if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) {
setTimeout(() => {
m.react("❤️")
}, 700);
let casadosMessage = userPasan.marry && pasan.marry ? `*💍Casados:* ✅\n*⏳Tiempo Casados:*\n${timeSince(userPasan.marryTime)}` : `*💍Casados:* ❌`;
let kz = await conn.reply(m.chat, `@${m.sender.split("@")[0]} 𝙴𝚂𝚃𝙰́𝚂 𝙴𝙽 𝚄𝙽𝙰 𝚁𝙴𝙻𝙰𝙲𝙸𝙾́𝙽 𝙲𝙾𝙽 ${toM(persona)} 😋\n\n───▄█▀█▄──▄███▄───
──▐█░██████████▌──
───██▒█████████───
────▀████████▀────
───────▀██▀───────
❣️‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎😍 ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ❣️
*⏳Tiempo de pareja:*\n${timeSince(userPasan.pasanganTime)}\n
${casadosMessage}\n
*Parejas anteriores: ${totalParejas}*`, fkontak, {contextInfo: { mentionedJid: [ persona, m.sender ] }})
conn.sendMessage(m.chat, { react: { text: "❤️", key: kz.key }})
return
}
await conn.reply(m.chat, `𝙿𝙰𝚁𝙴𝙲𝙴 𝚀𝚄𝙴 ${toM(persona)} 𝙽𝙾 𝙷𝙰 𝙰𝙲𝙴𝙿𝚃𝙰𝙳𝙾 𝙽𝙸 𝚁𝙴𝙲𝙷𝙰𝚉𝙰𝙳𝙾 𝚃𝚄 𝙿𝚁𝙾𝙿𝚄𝙴𝚂𝚃𝙰 𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝙰𝙼𝙱𝙾𝚂 𝙴𝙽 𝚄𝙽𝙰 𝚁𝙴𝙻𝙰𝙲𝙸𝙾́𝙽🥺\n\n*_Se anulará este pendiente_*`, fkontak, {contextInfo: { mentionedJid: [ persona, m.sender ] }})
global.db.data.users[m.sender].pasangan = ""
}
handler.command = ['mipareja']
handler.group = true
handler.botAdmin = true
export default handler

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