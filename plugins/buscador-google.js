import {googleIt} from '@bochilteam/scraper';
import google from 'google-it';
import axios from 'axios';
let handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default;
const text = args.join` `;
if (!text) return conn.reply(m.chat, '[❗] INGRESE UNA BUSQUEDA', m)
try {
const url = 'https://google.com/search?hl=es&q=' + encodeURIComponent(text);
google({'query': text}).then(res => {
let teks = `🔎 *RESULTADO DE:* ${text}\n\n*${url}*\n\n`
for (let g of res) {
teks += `_${g.title}_\n_${g.link}_\n_${g.snippet}_\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n\n`
} 
const ss = `https://image.thum.io/get/fullpage/${url}`
conn.sendFile(m.chat, ss, 'error.png', teks, fkontak)
})
} catch {    
console.log('error')
}}
handler.command = ['google']
handler.group = true
handler.botAdmin = true
export default handler