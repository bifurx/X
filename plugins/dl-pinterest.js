import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply('*[❗] INGRESE UNA BUSQUEDA PARA PINTEREST*')
    try {
        await m.react("")
        // Realiza la solicitud a la nueva API de Pinterest
        let response = await fetch(`https://api.diego-ofc.store/v2/pinterest?query=${encodeURIComponent(text)}`)
        let data = await response.json()

        // Verifica si la solicitud fue exitosa
        if (!data.status || !data.results || data.results.length === 0) {
            return m.reply('*[❗] No se encontraron resultados para la búsqueda*')
        }

        // Selecciona una imagen al azar de los resultados
        let randomIndex = Math.floor(Math.random() * data.results.length)
        let dl_url = data.results[randomIndex]

        if (command === 'pinterest' || command === 'pin') {
            await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*🤔𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚: ${text}*\n🔍 \`PINTEREST\` 🔍`, m)
        } else if (command === 'pinterest2' || command === 'pin2') {
            let media = await (await fetch(dl_url)).buffer()
            let enlace = await uploadImage(media)
            conn.sendButton(m.chat, `*🤔𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚: ${text}*`, `🔍PINTEREST🔍`, dl_url, [[`🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚`, `.pin2 ${text}`], [`Sticker`, `.s ${enlace}`]], null, null, fkontak)
        }
    } catch (e) {
        console.log(e)
    }
}

handler.command = ['pinterest', 'pinterest2', 'pin', 'pin2']
handler.group = true
handler.botAdmin = true

export default handler