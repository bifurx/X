import fetch from 'node-fetch';
import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn, text }) => {
let query = text || 'random';
let apiKey = 'VlXYKrBwKIZQ0ZuDrPThYlCQoDqH7veq'; 
let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=15&offset=0&rating=G&lang=es`;
try {
let res = await fetch(url);
if (!res.ok) return conn.reply(m.chat, 'Error en la API de Giphy', m);
let json = await res.json();
if (json.data && json.data.length > 0) {
let randomIndex = Math.floor(Math.random() * json.data.length);
let gifUrl = json.data[randomIndex].images.original.url;
let stiker = await sticker(false, gifUrl);
conn.sendFile(m.chat, stiker, 'sticker.webp');
} else {
m.reply('No se encontró ningún sticker para esa búsqueda.');
}} catch (e) {
console.error(e);
m.reply('Hubo un error al buscar el sticker.');
}}
handler.command = ['stik'];
handler.group = true
handler.botAdmim = true
export default handler;