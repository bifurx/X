import { googleImage } from '@bochilteam/scraper'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
if (!text) return conn.reply(m.chat, `[❗] 𝚄𝚂𝙴 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙼𝙰𝙽𝙴𝚁𝙰:\n*${usedPrefix + command} Canserbero*`, m)
if (!db.data.chats[m.chat].modohorny && m.isGroup && !isOwner) {
const prohibited = ['caca', 'polla', 'gay', 'hombres cogiendo', 'mía malkova', 'mia malkova', 'hombres gay', 'fisting', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', 'culo', 'putita', 'putito','pussy', 'hentai', 'pene', 'coño', 'asesinato', 'zoofilia', 'mia khalifa', 'desnudo', 'desnuda', 'cuca', 'chocha', 'muertos', 'pornhub', 'xnxx', 'xvideos', 'teta', 'vagina', 'marsha may', 'misha cross', 'sexmex', 'furry', 'furro', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia', 'pinga', 'horny', 'ass', 'nude', 'popo', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'pija', 'verga', 'trasero', 'violation', 'violacion', 'bdsm', 'cachonda', '+18', 'cp', 'mia marin', 'lana rhoades', 'cepesito', 'hot', 'buceta', 'xxx', 'Violet Myllers', 'Violet Myllers pussy', 'Violet Myllers desnuda', 'Violet Myllers sin ropa', 'Violet Myllers culo', 'Violet Myllers vagina', 'Pornografía', 'Pornografía infantil', 'niña desnuda', 'niñas desnudas', 'niña pussy', 'niña pack', 'niña culo', 'niña sin ropa', 'niña siendo abusada', 'niña siendo abusada sexualmente' , 'niña cogiendo', 'niña fototeta', 'niña vagina', 'hero Boku no pico', 'Mia Khalifa cogiendo', 'Mia Khalifa sin ropa', 'Mia Khalifa comiendo polla', 'Mia Khalifa desnuda']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) {
    m.react("⚠️")
    m.reply('*⚠️BUSQUEDA RESTRINGIDA⚠️*')  
    return
}
}
m.react("📷")
const res = await googleImage(text)
let images = res.slice(0, 20) 
let randomIndex = Math.floor(Math.random() * images.length)
let image = images[randomIndex]
let link = image
if (command == 'imagen' || command == 'foto') {
conn.sendFile(m.chat, link, 'error.jpg', `*𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚: ${text}*`, m)
} else if (command == 'imagen2' || command == 'foto2') {
let media = await(await fetch(link)).buffer()
let enlace = await uploadImage(media)
conn.sendButton(m.chat, `*🤔𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚: ${text}*`, `🔍BUSQUEDA🔍`, link, [[`🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚`, `.imagen2 ${text}`], [`Sticker`, `.s ${enlace}`]], null, null, m)
}}
handler.command = ['imagen', 'foto', 'imagen2', 'foto2']
//handler.group = true
//handler.botAdmin = true
export default handler