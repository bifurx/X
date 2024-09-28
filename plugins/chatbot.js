let handler = m => m 

handler.before = async function (m, { conn, text, isOwner } ) {
if (!m.isGroup) return
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let jidOw = '59899022028@s.whatsapp.net'
let name = conn.getName(m.sender)
if (chat.isBanned) return
if (user.banned) return

// REACCION A MSG CITADO CORRECTO Y TESTEADO PARA LITE
/*if (m.fromMe) {
if (/(Antho)/i.test(m.text) ) {
setTimeout(() => {
            m.quoted.react("😍");
        }, 1500);
}}*/
    


    
/*if (/(Antho)/i.test(m.text) ) {
m.react("😍")
}*/
    
/*if (/^(que|khe|ke)$/i.test(m.text) ) {

let teks = `So😑`

conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }}) 
    
}
    
if (/^(rra)$/i.test(m.text) ) {

let teks = `Sos vos y no juego mas 🤣`

conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }}) 

    

}*/

/*if (/^(sucio)$/i.test(m.text) ) {
    
let teks = `

${pickRandom([`Como el culo de tu hermana😂🤮`, `Tu culo🤮`])}

`.trim()

conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }}) 
    
}*/
    
/*if (/^(puta|trola|sucia|la chupa bien|la chupa rico|esta divina)$/i.test(m.text) ) {  

    let teks = `

${pickRandom([`Como tu hermana😍😐`, `No tanto como tu vieja😂`])}

`.trim()

conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}*/
    
/*if (/^(esta pa cogerla|está pa cogerla|esta pa darle|está pa darle|esta para cogerla|está para cogerla|esta para darle|está para darle|me la voy a coger|me la voy a cojer|cogemos|cojemos)$/i.test(m.text) ) {  

let teks = `

${pickRandom([`Como yo a tu hermana, la trola esa🥵😍`, `Ahi lo tenes al virgen😐`])}
`.trim()

conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}*/
    
/*if (/^(me la chupas|chupamela|chupala|chúpala|haceme un pete|chupame la verga|chupame la pija|chupame el pito)$/i.test(m.text) ) {  

conn.reply(m.chat, `Sos un asco. Nadie te la va a chupar🤢`, m, { mentions: { mentionedJid: [m.sender] }})

}*/

if (/^(dame admin|denme admin|quiero admin|haganme admin|quiero ser admin|háganme admin|haceme admin|ponganme de admin|merezco ser admin|me das admin|admin quiero)$/i.test(m.text) ) {  
    let teks = `
${pickRandom([`No.`, `Jajaja no.`, `Verg te doy?`, `No pidas admin, perra`, `No se da admin, no pidas.`, `Chupala y seras admin.`, `No vas a ser admin.`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^(😾HOLAAAAAAAAAA😾)$/i.test(m.text)) { 
let delet = m.key.participant

let bang = m.key.id

conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}

/*if (/^(sexo|sexoo)$/i.test(m.text) ) {  
    let teks = `
${pickRandom([`SEXO? DONDE? YO QUIERO 🥴`, `Alguien dijo SEXO?! 😏`, `Yo quiero`, `🤤😏`, `Si, lo que no tenes ni de casualidad jaja 🤣`, `No se que es eso.. 😓`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}*/

/*if (/Buenas noches/i.test(m.text) ) {
    conn.reply(m.chat, `Buenas nochess🙂`, m)

}*/

/*if (/ahre|ah re|ahr/i.test(m.text) ) {
if (m.chat == '120363317021809335@g.us') {
let delet = m.key.participant

let bang = m.key.id

return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}*/

/*if (/bot de mierda|bot d mierda|bot de mierd|bot d mierd/i.test(m.text) && !isOwner) { 
let users = global.db.data.users
conn.reply(m.chat, '*Ah si? No me vas a usar mas entonces 😛*', m, {mentions: [jidOw, m.sender]})
users[m.sender].banned = true
}*/

if (/de quien es el bot|de quién es el bot|el bot de quien es|el bot de quién es/i.test(m.text) )
{
m.react("🙋‍♂️")
let bot = `[❗] 𝙱𝙾𝚃 𝙷𝙴𝙲𝙷𝙾 𝙿𝙾𝚁: @59899022028`
let igurl = "https://www.instagram.com/picassotgc"
await conn.reply(m.chat, bot, m, { mentions: [ m.sender, jidOw ]})

/*await conn.sendMessage(m.chat, { 
text: bot, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[ m.sender, jidOw],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen1, 
"title": `𝙸 𝙽 𝚂 𝚃 𝙰 𝙶 𝚁 𝙰 𝙼`, 
body: `𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁`, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": igurl, 
"sourceUrl": igurl, 
}
}
}, { quoted: fkontak })*/
    
}
    
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

