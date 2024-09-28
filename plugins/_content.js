import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

var handler = m => m
handler.all = async function (m) {
global.key = ''

global.yt = "https://youtu.be/kSk0kbHMGxw"
global.yt2 = "https://youtu.be/a9jxNusr0tE"
global.ig = "https://youtu.be/dGzpsBSJZow"
global.md = "https://youtu.be/wmef2TEPGgo"
global.fb = "https://youtu.be/VpCkJ8Q67sI"
global.tk = "https://youtu.be/VpCkJ8Q67sI"
global.ths = 'https://www.instagram.com/picassotgc/'
global.paypal = 'https://www.instagram.com/picassotgc/'
global.asistencia = 'wa.me/59899022028'
global.bot = 'wa.me/59899022028'
global.cuentas = "https://youtu.be/wmef2TEPGgo"

global.canal1 = "https://youtu.be/a9jxNusr0tE"
global.canal2 = "https://youtu.be/wmef2TEPGgo"
global.canal3 = "https://youtu.be/a9jxNusr0tE"
global.canal4 = "https://youtu.be/wmef2TEPGgo"

global.soporteGB = "https://youtu.be/wmef2TEPGgo"
global.grupo1 = "https://youtu.be/a9jxNusr0tE"
global.grupo2 = "https://youtu.be/a9jxNusr0tE"
global.grupo3 = "https://youtu.be/a9jxNusr0tE"
global.grupo4 = "https://youtu.be/a9jxNusr0tE"
global.grupo5 = "https://youtu.be/a9jxNusr0tE"
global.grupo6 = "https://youtu.be/a9jxNusr0tE"

global.grupo_collab1 = "https://youtu.be/wmef2TEPGgo"
global.grupo_collab2 = "https://youtu.be/wmef2TEPGgo"
global.grupo_collab3 = "https://youtu.be/wmef2TEPGgo"
global.grupo_collab4 = "https://youtu.be/wmef2TEPGgo"

global.patrocinador1 = "https://youtu.be/VpCkJ8Q67sI"
global.patrocinador2 = "https://youtu.be/VpCkJ8Q67sI"
global.patrocinador3 = "https://youtu.be/VpCkJ8Q67sI"
global.patrocinador4 = "https://youtu.be/VpCkJ8Q67sI"

global.canales = [canal1, canal2, canal3, canal4].getRandom()
global.welgata = [tk, ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb, tk, ths, asistencia].getRandom()
global.redesMenu = [canal1, canal2, canal3, canal4, soporteGB, grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, md, ig, paypal, yt, asistencia, fb, tk].getRandom()
global.accountsgb = [canal1, canal2, canal3, canal4, tk, ig, yt, paypal, fb, ths, md, asistencia].getRandom()

var channelRD = [{ link: canal1, id: "20363144038483540@newsletter", name: "WhatsApp" }]

// Imágenes 
global.imagen1 = fs.readFileSync("./media/menus/Menu3.jpg")
global.imagen2 = fs.readFileSync("./media/menus/img1.jpg")
global.imagen3 = fs.readFileSync("./media/menus/img2.jpg")
global.imagen4 = fs.readFileSync("./media/menus/img3.jpg")
global.imagen5 = fs.readFileSync("./media/menus/img4.jpg")
global.imagen6 = fs.readFileSync("./media/menus/img5.jpg")
global.imagen7 = fs.readFileSync("./media/menus/img6.jpg")
global.imagen8 = fs.readFileSync("./media/menus/img7.jpg")
global.imagen9 = fs.readFileSync("./media/menus/img8.jpg")
global.imagen10 = fs.readFileSync("./media/menus/img9.jpg")
global.imagen11 = fs.readFileSync("./media/menus/img10.jpg")
global.imagen12 = fs.readFileSync("./media/menus/img11.jpg")
global.imagen13 = fs.readFileSync("./media/menus/img12.jpg")
global.imagen23 = fs.readFileSync("./media/menus/img23.jpg")
    
global.noprofileurl = 'https://i.ibb.co/fp6t21w/avatar.jpg'
    
global.img = 'https://i.imgur.com/59lFezI.jpg'
global.img2 = 'https://i.imgur.com/59lFezI.jpg'
global.img3 = 'https://i.imgur.com/oUAGYc2.jpg' //prem
global.img4 = 'https://i.imgur.com/i0pccuo.jpg' //prem
global.img5 = 'https://i.imgur.com/iL1snRx.jpeg'
global.img6 = 'https://i.imgur.com/59lFezI.jpg'
global.img7 = 'https://i.imgur.com/59lFezI.jpg'
global.img8 = 'https://i.imgur.com/59lFezI.jpg'
global.img9 = 'https://i.imgur.com/59lFezI.jpg'
global.img10 = 'https://i.imgur.com/hetrIDi.jpeg'
global.img11 = 'https://i.imgur.com/MD8zNk1.jpg'
global.img12 = 'https://i.imgur.com/MD8zNk1.jpg'
global.img13 = 'https://i.imgur.com/59lFezI.jpg'
global.img14 = 'https://i.imgur.com/59lFezI.jpg'
global.img15 = 'https://i.imgur.com/59lFezI.jpg'
global.img16 = 'https://i.imgur.com/11MRjo4.jpeg' //+18
global.img17 = 'https://i.imgur.com/59lFezI.jpg'
global.img18 = 'https://i.imgur.com/59lFezI.jpg'
global.logogit = 'https://tinyurl.com/2qvl9vgs'

global.gataVidMenu = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4'].getRandom()
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18].getRandom()
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13].getRandom()

// Fake
global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.fakeChannel = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: '', newsletterName: channelRD.name }, externalAdReply: { title: wm, body: vs, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: gataImg, thumbnail: imagen1, sourceUrl: accountsgb }}}, { quoted: m }
  
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: gataMenu, sellerJid: '0@s.whatsapp.net' }}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}} 

//let bottime = `${name} 𝗧𝗜𝗠𝗘: ${moment.tz('America/Bogota').format('HH:mm:ss')}`//America/Los_Angeles

let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let fgif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')}}}
                             
let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: redesMenu, thumbnail: await(await fetch(gataMenu)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'SerberoX', thumbnailUrl: gataMenu, sourceUrl: accountsgb }}}
let dos = [enlace, enlace2]  

global.wait = "⌛ *`Cargando...`*\n*✪✦✦⊹⊹⊹⊹⊹⊹⊹⊹✪* `20%`"
global.waitt = "⏳ *`Cargando....`*\n*✪✦✦✦✦⊹⊹⊹⊹⊹⊹✪* `40%`"
global.waittt = "⌛ *`Cargando...`*\n*✪✦✦✦✦✦✦⊹⊹⊹⊹✪* `60%`"
global.waitttt = "⏳ *`Cargando....`*\n*✪✦✦✦✦✦✦✦✦⊹⊹✪* `80%`"
global.waittttt = "⌛ *`Procesando...`*\n*✪✦✦✦✦✦✦✦✦✦✦✪* `100%`"
  
}
export default handler

global.mensajesEditados = async function(conn, m) {
const mensajes = [waitt, waittt, waitttt, waittttt]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }
