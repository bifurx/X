/*let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, text, command }) => {
let user = global.db.data.users[m.sender]
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let picUrl = "https://telegra.ph/file/b18dbfd312e0cffa12e98.png"
let str = `*[❗] 𝙽𝙸𝙽𝙶𝚄́𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙰 𝙴𝙽 𝙿𝚁𝙸𝚅𝙰𝙳𝙾.*

*⚠️Evite el spam de comandos*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
${readMore}
\`Ultimos cambios\`

Nueva IA: .bk9 y .bk9img

▰▰▰▰▰▰▰▰▰▰▰▰▰▰
${readMore}
⬇️ \`𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎\` ⬇️


⬇️ \`IMAGENES\` 🌟
┃.imagen _Canserbero_
┃.imagen2 _Canserbero_

⬇️ \`Música de Youtube\` 🎵
┃.play _Canserbero - Es epico_

⬇️ \`Vídeos de YouTube\` 📽️
┃.video _Canserbero - Pensando en ti_

⬇️ \`SPOTIFY\` 🎵
┃.spotify _Canserbero - Es epico_

⬇️ \`DESCARGAS INSTAGRAM\` 🔗
┃.igdl _*Link Aquí*_

⬇️ \`VIDEOS DE TIKTOK\` 👤
┃.tt _*Link Aquí*_

▰▰▰▰▰▰▰▰▰▰▰▰▰▰${readMore}

💥 \`SOLO ADMINS\` 💥

┃.bc (desactiva el bot)
┃.uc (activa el bot)
┃.on ┃.off (para cambiar las configuraciones del bot en el grupo)
┃ht (sin punto) esto menciona a todos en un mensaje especifico 
┃.tagall (menciona a todos)
┃.rl (restablecer link del grupo)
┃.k (eliminar participante)
┃.p (dar admin)
┃.d (quitar admin)
┃.del (eliminar un mensaje)
┃.g (permite hablar a todos, o solamente admins)
┃.ap (esto aprueba todas las solicitudes pendientes de unirse al grupo)
┃.setpp (establecer foto de grupo)

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

🔗 \`LINK DEL GRUPO\` 🔗

┃.enlace ┃.link 
(se comparte el enlace del grupo en el chat)

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

📊 \`Encuesta con mencion a todos\`📊 [Solo Admins]

┃.encuesta pregunta - opcion1 - opcion2 - etc..

*💡EJEMPLO:*
.encuesta Que prefieren? - Futbol - Basket - Tenis

*[SEPARAR CON " - " COMO EN EL EJEMPLO]*

▰▰▰▰▰▰▰▰▰▰▰▰▰▰${readMore}
🕴🏻 \`Recuperar mensaje de Ver una Vez\` 🕴🏻
(solo para admins)
┃.r (poner .r respondiendo al mensaje de Ver Una Vez que desea recuperar)
▰▰▰▰▰▰▰▰▰▰▰▰▰▰

🤳 \`Tu perfil de Instagram\`
┃.ig _tu_usuario_aquí_

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

🔊 \`𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝙍 𝘼𝙐𝘿𝙄𝙊𝙎\` 🔊

*¡Responder a un audio o a una nota de voz!*

┃.robot
┃.bass
┃.blown
┃.deep
┃.earrape
┃.fast
┃.fat
┃.nightcore
┃.reverse
┃.slow
┃.smooth
┃.tupai

▰▰▰▰▰▰▰▰▰▰▰▰▰▰${readMore}

🍿 \`RECOMENDACIÓN DE PELICULA\` 🍿

┃.quever
┃.quever2

▰▰▰▰▰▰▰▰▰▰▰

🤖 \`Preguntar a la Inteligencia Artificial\` 🤖

*[CHATGPT]*
┃.chatgpt _pregunta_
┃.ia _pregunta_
┃.ia2 _pregunta_
┃.iavoz _pregunta_

*[BK9]*
┃.bk9 _pregunta_
┃.bk9img _genera imagenes a partir de texto

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

📖 \`VERSÍCULOS\` 📖
porque acá seguimos a Dios😀
┃.versiculo
┃.salmos

▰▰▰▰▰▰▰▰▰▰▰▰▰▰${readMore}
💥 \`CONVERTIDORES\` 💥

┃.s (crea stickers)
┃.s2 (si con ".s" el sticker queda chico, usa este comando)
┃.v2 (pasar sticker animado a video)
┃.smeme (texto a una foto)
┃.attp (texto a sticker rgb)
┃.ttp (texto a sticker)
┃.img (sticker a imagen)
┃.hd (aumenta calidad de foto)
┃.tts (aquí poner texto que quieras)
┃.tomp3 (video o nota de voz a MP3)
┃.tourl (sube imágenes a link)

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

🔎 \`BUSQUEDAS\`🔍

┃.google _texto_
┃.wikipedia _texto_
┃.letra _*nombre de canción aquí*_

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

🌌 \`A F K\` 🌌

Si vas a estar inactivo puedes usar el siguiente comando:
┃.afk _*aqui escribe el motivo*_

De ésta manera cada vez que alguien te etiquete, se le avisará a la persona que tu estás en modo AFK.

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

♑ \`HOROSCOPO DE HOY\`♑

┃.horoscopo
┃.horoscopo2

▰▰▰▰▰▰▰▰▰▰▰▰▰▰${readMore}

🤖 \`HABLAR CON EL BOT\` 🤖

┃.bot _*Hola!*_

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

😜 \`DIVERSIÓN\` 😜

┃.ttt (TaTeTi)
┃.ahorcado
┃.cancion *(adivinar la canción)*
┃.acertijo / .adivinanza
┃.pelicula / .adivinarpelicula / .advpe *(adivinar la pelicula)*
┃.palabra / .ordenar / .ordenarpalabra
┃.trivia

👇 \`OTROS\` 👇

┃.formarpareja
┃.say o .decir
┃.love
┃.gay
┃.gay2
┃.lesbiana
┃.pajero
┃.pajera
┃.puto
┃.puta
┃.manco
┃.manca
┃.rata
┃.prostituta
┃.prostituto
┃.doxxear
┃.simpcard
┃.hornycard
┃.stupid
┃.shippear
┃.piropo
┃.consejo
┃.frase
┃.reto
┃.verdad
┃.suerte
┃.topgays
┃.topotakus
┃.toppajer@s
┃.toplindos
┃.topput@s
┃.topparejas
┃.top5parejas

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

📩 \`CORREOS TEMPORALES\` 📩

┃.mail

▰▰▰▰▰▰▰▰▰▰▰▰▰▰`
const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
const document = doc[Math.floor(Math.random() * doc.length)];
let name = await conn.getName(m.sender)
const buttonMessage= {
    'document': {url: `https://youtu.be/a9jxNusr0tE`},
    'mimetype': `application/${document}`,
    'fileName': `「😍Descargame😍」`,
    'fileLength': 99999999999,
    'pageCount': 98342,
    'contextInfo': {
      'isForwarded': false,
      'externalAdReply': {
        'showAdAttribution': true,
        'renderLargerThumbnail': true,
        'mediaUrl': 'https://youtu.be/a9jxNusr0tE',
        'mediaType': 1,
        'previewType': 'pdf',
        'title': `👋 ¡ H O L A ! 👋 ${name}\n▰▰▰▰▰▰▰▰▰▰▰▰▰▰`,
        'thumbnail': imagen23,
        'sourceUrl': null
      }},
    'caption': str,
    'headerType': 6};
await conn.sendMessage(m.chat, buttonMessage, {quoted: fkontak});
}
handler.command = ['menu', 'menú', 'help', 'comandos', 'ayuda']
handler.group = true
handler.botAdmin = true
export default handler*/



let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, text, command }) => {
let user = global.db.data.users[m.sender]
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let str = `*[❗] 𝙴𝙻 𝙱𝙾𝚃 𝙴𝚂 𝙿𝙰𝚁𝙰 𝚄𝚂𝙾 𝙴𝚇𝙲𝙻𝚄𝚂𝙸𝚅𝙾 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂. 𝙽𝙸𝙽𝙶𝚄́𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙰 𝙴𝙽 𝙿𝚁𝙸𝚅𝙰𝙳𝙾.*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰${readMore}


⬇️ \`𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎\` ⬇️


⬇️ \`IMAGENES\` 🌟
┃.imagen _Canserbero_
┃.imagen2 _Canserbero_

⬇️ \`Música de Youtube\` 🎵
┃.play _Canserbero - Es epico_

⬇️ \`Vídeos de YouTube\` 📽️
┃.video _Canserbero - Pensando en ti_

⬇️ \`SPOTIFY\` 🎵
┃.spotify _Canserbero - Es epico_

⬇️ \`DESCARGAS INSTAGRAM\` 🔗
┃.igdl _*Link Aquí*_

⬇️ \`VIDEOS DE TIKTOK\` 👤
┃.tt _*Link Aquí*_

⬇️ \`DESCARGAS PINTEREST\`
┃.pin _*Alfajor*_

▰▰▰▰▰▰▰▰▰▰▰▰▰▰${readMore}

💥 \`SOLO ADMINS\` 💥

┃.bc (desactiva el bot)
┃.uc (activa el bot)
┃.on ┃.off (para cambiar las configuraciones del bot en el grupo)
┃ht (sin punto) esto menciona a todos en un mensaje especifico 
┃.tagall (menciona a todos)
┃.rl (restablecer link del grupo)
┃.k (eliminar participante)
┃.p (dar admin)
┃.d (quitar admin)
┃.del (eliminar un mensaje)
┃.g (permite hablar a todos, o solamente admins)
┃.ap (esto aprueba todas las solicitudes pendientes de unirse al grupo)
┃.setpp (establecer foto de grupo)

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

🔗 \`LINK DEL GRUPO\` 🔗

┃.enlace ┃.link 
(se comparte el enlace del grupo en el chat)

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

📊 \`Encuesta con mencion a todos\`📊 [Solo Admins]

┃.encuesta pregunta - opcion1 - opcion2 - etc..

*💡EJEMPLO:*
.encuesta Que prefieren? - Futbol - Basket - Tenis

*[SEPARAR CON " - " COMO EN EL EJEMPLO]*

▰▰▰▰▰▰▰▰▰▰▰▰▰▰${readMore}
🕴🏻 \`Recuperar mensaje de Ver una Vez\` 🕴🏻
(solo para admins)
┃.r (poner .r respondiendo al mensaje de Ver Una Vez que desea recuperar)
▰▰▰▰▰▰▰▰▰▰▰▰▰▰

🤳 \`Tu perfil de Instagram\`
┃.ig _tu_usuario_aquí_

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

🔊 \`𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝙍 𝘼𝙐𝘿𝙄𝙊𝙎\` 🔊

*¡Responder a un audio o a una nota de voz!*

┃.robot
┃.bass
┃.blown
┃.deep
┃.earrape
┃.fast
┃.fat
┃.nightcore
┃.reverse
┃.slow
┃.smooth
┃.tupai

▰▰▰▰▰▰▰▰▰▰▰▰▰▰${readMore}

🍿 \`RECOMENDACIÓN DE PELICULA\` 🍿

┃.quever
┃.quever2

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

🤖 \`Preguntar a la Inteligencia Artificial\` 🤖

*[CHATGPT]*
┃.chatgpt _pregunta_
┃.ia _pregunta_
┃.iavoz _pregunta_

*[GEMINI]*
┃.gemini _pregunta_

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

📖 \`VERSÍCULOS\` 📖
porque acá seguimos a Dios😀
┃.versiculo
┃.salmos

▰▰▰▰▰▰▰▰▰▰▰▰▰▰${readMore}
💥 \`CONVERTIDORES\` 💥

┃.s (crea stickers)
┃.s2 (si con ".s" el sticker queda chico, usa este comando)
┃.v2 (pasar sticker animado a video)
┃.smeme (texto a una foto)
┃.attp (texto a sticker rgb)
┃.ttp (texto a sticker)
┃.img (sticker a imagen)
┃.hd (aumenta calidad de foto)
┃.tts (aquí poner texto que quieras)
┃.tomp3 (video o nota de voz a MP3)
┃.tourl (sube imágenes a link)

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

🔎 \`BUSQUEDAS\`🔍

┃.google _texto_
┃.wikipedia _texto_
┃.letra _*nombre de canción aquí*_

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

🌌 \`A F K\` 🌌

Si vas a estar inactivo puedes usar el siguiente comando:
┃.afk _*aqui escribe el motivo*_

De ésta manera cada vez que alguien te etiquete, se le avisará a la persona que tu estás en modo AFK.

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

♑ \`HOROSCOPO DE HOY\`♑

┃.horoscopo
┃.horoscopo2

▰▰▰▰▰▰▰▰▰▰▰▰▰▰${readMore}

🤖 \`HABLAR CON EL BOT\` 🤖

┃.bot _*Hola!*_
┃.bot2 _*Hola!*_

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

😜 \`DIVERSIÓN\` 😜

┃.ttt (TaTeTi)
┃.ahorcado
┃.cancion *(adivinar la canción)*
┃.acertijo / .adivinanza
┃.pelicula / .adivinarpelicula / .advpe *(adivinar la pelicula)*
┃.palabra / .ordenar / .ordenarpalabra
┃.trivia

👇 \`OTROS\` 👇

┃.formarpareja
┃.say o .decir
┃.love
┃.gay
┃.gay2
┃.lesbiana
┃.pajero
┃.pajera
┃.puto
┃.puta
┃.manco
┃.manca
┃.rata
┃.prostituta
┃.prostituto
┃.doxxear
┃.simpcard
┃.hornycard
┃.stupid
┃.shippear
┃.piropo
┃.consejo
┃.frase
┃.reto
┃.verdad
┃.suerte
┃.topgays
┃.topotakus
┃.toppajer@s
┃.toplindos
┃.topput@s
┃.topparejas
┃.top5parejas

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

📩 \`CORREOS TEMPORALES\` 📩

┃.mail

▰▰▰▰▰▰▰▰▰▰▰▰▰▰`
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen23,
"title": `👋 ¡ H O L A ! 👋 ${name}\n▰▰▰▰▰▰▰▰▰▰▰▰▰▰`,
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": paypal, 
"sourceUrl": null,
}
}
}, { quoted: fkontak })}
handler.command = ['menu', 'menú', 'help', 'comandos', 'ayuda']
handler.group = true
handler.botAdmin = true
export default handler
