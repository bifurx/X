import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, args, usedPrefix, command }) => {
if (!text && !m.quoted) return conn.reply(m.chat, `*[❗] INGRESE UN TEXTO PARA CONVERTIR A STICKER*`, m)
let teks = encodeURI(text ? text : m.quoted ? m.quoted.text : null)
    
if (command == 'attp') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, {asSticker: true});
}
    
if (command == 'attp2') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp2?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, {asSticker: true});
}
    
if (command == 'attp3') {
let stiker = await sticker(null,`https://api.erdwpe.com/api/maker/attp?text=${teks}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}

if (command == 'ttp') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, {asSticker: true});
}
    
if (command == 'ttp2') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp6?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, {asSticker: true});
}
    
if (command == 'ttp3') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp3?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, {asSticker: true});
}
    
if (command == 'ttp4') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp5?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, {asSticker: true});
}
    
if (command == 'ttp5') {
let stiker = await sticker(null,`https://api.erdwpe.com/api/maker/ttp?text=${teks}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
    
if (command == 'ttp6') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp2?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, {asSticker: true});
}
}
handler.command = ['attp', 'attp2', 'attp3', 'ttp', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'ttp6']
handler.group = true
handler.botAdmin = true
export default handler