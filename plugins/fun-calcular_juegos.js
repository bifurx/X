let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!db.data.chats[m.chat].game) return conn.reply(m.chat, `Juegos deshabilitados.`, m)
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
if (command !== 'love' && who === conn.user.jid) return conn.reply(m.chat, `Yo no soy ${command} como vos🤨🤨🤨`, m)
if (command !== 'love' && who === '59899022028@s.whatsapp.net') return conn.reply(m.chat, `Anthony es 0% ${command}. Es un Santo😍`, m)
//if (command !== 'love' && who === '59899892842@s.whatsapp.net') return conn.reply(m.chat, `Sofi es 0% ${command}. Es una santa😍 es la mujer que todos quieren, una diosa😍`, m)
let porcentaje 
if (who === '5989839989273842@s.whatsapp.net') {
porcentaje = "100"
} else {
porcentaje = Math.floor(Math.random() * 101);
}
if (command == 'gay2') {
let juego = `_*@${who.split("@")[0]}* *ES* *${porcentaje}%* *GAY*_ 🏳️‍🌈`.trim()
let kz = await m.reply(juego, null, { mentions: conn.parseMention(juego) })
conn.sendMessage(m.chat, { react: { text: "🏳️‍🌈", key: kz.key }})
}

if (command == 'zorro') {
let veces = porcentaje <= 30 ? "🙄" : "ES UN FÁCIL🤨🦊";
let zorro = porcentaje <= 30 ? "ZORRO." : "ZORRO😈";
let juego = `*🤨𝙼𝙴𝙳𝙸𝙳𝙾𝚁 𝙳𝙴 𝚉𝙾𝚁𝚁𝙴𝚁𝙸́𝙰🦊*\n\n*@${who.split("@")[0]}* ES *${porcentaje}%* ${zorro}\n\n${veces}`.trim();
let kz = await m.reply(juego, null, { mentions: conn.parseMention(juego) })
conn.sendMessage(m.chat, { react: { text: "🦊", key: kz.key }})
}

if (command == 'zorra') {
let veces = porcentaje <= 30 ? "🙄" : "ES UNA FÁCIL🤨🦊";
let zorra = porcentaje <=30 ? "ZORRA." : "ZORRA😈";
let juego = `*🤨𝙼𝙴𝙳𝙸𝙳𝙾𝚁 𝙳𝙴 𝚉𝙾𝚁𝚁𝙴𝚁𝙸́𝙰🦊*\n\n*@${who.split("@")[0]}* ES *${porcentaje}%* ${zorra}\n\n${veces}`.trim();
let kz = await m.reply(juego, null, { mentions: conn.parseMention(juego) })
conn.sendMessage(m.chat, { react: { text: "🦊", key: kz.key }})
}
  
if (command == 'lesbiana') { 
let juego = `_*@${who.split("@")[0]}* *ES* *${porcentaje}%* *${command.replace('how', '').toUpperCase()}*_ 🏳️‍🌈`.trim()
await m.reply(juego, null, { mentions: conn.parseMention(juego) })
}
  
if (command == 'pajero') {
let juego = `_*@${who.split("@")[0]}* *ES* *${porcentaje}%* *${command.replace('how', '').toUpperCase()}*_ 😏💦`.trim()
let kz = await m.reply(juego, null, { mentions: conn.parseMention(juego) })
conn.sendMessage(m.chat, { react: { text: "💦", key: kz.key }})
}
  
if (command == 'pajera') {
let juego = `_*@${who.split("@")[0]}* *ES* *${porcentaje}%* *${command.replace('how', '').toUpperCase()}*_ 😏💦`.trim()
let kz = await m.reply(juego, null, { mentions: conn.parseMention(juego) })
conn.sendMessage(m.chat, { react: { text: "💦", key: kz.key }})
}

if (command == 'puto') {
let juego = `_*@${who.split("@")[0]}* *ES* *${porcentaje}%* *${command.replace('how', '').toUpperCase()},* *MÁS INFORMACIÓN A SU PRIVADO 🔥🥵*_`.trim()
await m.reply(juego, null, { mentions: conn.parseMention(juego) })
}
  
if (command == 'puta') {
let juego = `_*@${who.split("@")[0]}* *ES* *${porcentaje}%* *${command.replace('how', '').toUpperCase()},* *MÁS INFORMACIÓN A SU PRIVADO 🔥🥵*_`.trim()
await m.reply(juego, null, { mentions: conn.parseMention(juego) })
}

if (command == 'manco') {
let juego = `_*@${who.split("@")[0]}* *ES* *${porcentaje}%* *${command.replace('how', '').toUpperCase()} 💩*_`.trim()
await m.reply(juego, null, { mentions: conn.parseMention(juego) })
}

if (command == 'manca') {
let juego = `_*@${who.split("@")[0]}* *ES* *${porcentaje}%* *${command.replace('how', '').toUpperCase()} 💩*_`.trim()
await m.reply(juego, null, { mentions: conn.parseMention(juego) })
}

if (command == 'rata') {
let juego = `_*@${who.split("@")[0]}* *ES* *${porcentaje}%* *${command.replace('how', '').toUpperCase()} 🐁 COME QUESO 🧀*_`.trim()
await m.reply(juego, null, { mentions: conn.parseMention(juego) })
}
    
if (command == 'infiel') {
let veces = porcentaje === 0 ? "ES UN ANGEL😇" : porcentaje <= 30 ? "SOLO AVECES TIENE TENTACIONES🙄" : "🦊🦊🦊🦊🦊🦊🦊🦊";
let infiel = porcentaje === 0 ? "INFIEL." : "INFIEL😈";
let juego = `*@${who.split("@")[0]}* ES *${porcentaje}%* ${infiel}\n\n${veces}`.trim();
let kz = await m.reply(juego, null, { mentions: conn.parseMention(juego) })
let react;
if (juego.includes('ANGEL')) {
    react = "😇"
} else if (juego.includes('TENTACIONES')) {
        react = "🤨"
    } else {
        react = "😮"
        }
conn.sendMessage(m.chat, { react: { text: react, key: kz.key }})
}
    
if (command == 'prostituto') {
let juego = `_*@${who.split("@")[0]} ES ${porcentaje}%* *${command.replace('how', '').toUpperCase()} 🫦👅, QUIEN QUIERE DE SUS SERVICIOS?*_`.trim()
await m.reply(juego, null, { mentions: conn.parseMention(juego) })
}
  
if (command == 'prostituta') {
let juego = `_*@${who.split("@")[0]} ES ${porcentaje}%* *${command.replace('how', '').toUpperCase()} 🫦👅, QUIEN QUIERE DE SUS SERVICIOS?*_`.trim()
await m.reply(juego, null, { mentions: conn.parseMention(juego) })
}
  
if (command == 'cornuda') {
let getR = Math.floor(Math.random() * 11);
let pregunta = getR <= 4 ? "Podría haber sido peor😐" : "POBRE CORNUDA😔";
let veces = getR === 1 ? "VEZ" : "VECES";
let juego = `*A @${who.split("@")[0]} LE METIERON LOS CUERNOS ${getR} ${veces}*\n\n*_${pregunta}_*`.trim()
let kz = await m.reply(juego, null, { mentions: conn.parseMention(juego) })
conn.sendMessage(m.chat, { react: { text: "🫎", key: kz.key }})
}
    
if (command == 'cornudo') {
let getR = Math.floor(Math.random() * 11);
let pregunta = getR <= 4 ? "Podría haber sido peor😐" : "POBRE CORNUDO😔";
let veces = getR === 1 ? "VEZ" : "VECES";
let juego = `*A @${who.split("@")[0]} LE METIERON LOS CUERNOS ${getR} ${veces}*\n\n*_${pregunta}_*`.trim()
let kz = await m.reply(juego, null, { mentions: conn.parseMention(juego) })
conn.sendMessage(m.chat, { react: { text: "🫎", key: kz.key }})
}
    
//===========================
    
if (command == 'love') {
let getR = Math.floor(Math.random() * 101);
let pregunta = getR <= 50 ? "Resultado un poco bajo😔" : "¿Deberías pedirle que sea tu novia/o?😍";
let juego = `*❤️MEDIDOR DE AMOR❤️*\n\n*_El amor de @${who.split("@")[0]} ES DE ${getR}%_*\n\n*_${pregunta}_*`.trim()
await m.reply(juego, null, { mentions: conn.parseMention(juego) })}
}
handler.command = [ 'love', 'gay2', 'lesbiana', 'zorra', 'zorro', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'infiel', 'cornudo', 'cornuda', 'prostituto' ]
handler.group = true
handler.botAdmin = true
export default handler