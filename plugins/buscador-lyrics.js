import BuscarLetra from "../lib/lyricsgg.js";
import {find_lyrics} from '@brandond/findthelyrics';
import {getTracks} from '@green-code/music-track-data';
import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
const teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : '';
if (!teks) return conn.reply(m.chat, '[❗] INGRESE EL NOMBRE DE LA CANCIÓN PARA BUSCAR LA LETRA', m)
try {
let ress = await BuscarLetra(text);
let { letra } = ress;
const result = await getTracks(teks);
const lyrics = await find_lyrics(`${result[0].artist} ${result[0].title}`);
const res = await fetch(global.API('https://some-random-api.com', '/lyrics', {title: result[0].artist + result[0].title}));
const json = await res.json();
let img; 
try {
img = result.album.artwork;
} catch {
try {
img = json.thumbnail.genius;
} catch {
const bochil = await googleImage(`${result[0].artist} ${result[0].title}`);
img = await bochil.getRandom();
}}
await conn.sendButton(m.chat, `${mid.smsYT1} :\n*${result[0].title || ''}*\n\n${mid.smsYT2} :\n*${result[0].artist || ''}*\n\n${mid.smsYT3} :\n${letra || ''}`, null, img, [
['𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧🎵', `/play ${text}`] ], null, null, m)
await conn.sendMessage(m.chat, { audio: {url: result[0].preview}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
} catch (e) {
console.log(`error`)
console.log(e)
}} 
handler.command = /^(lirik|lyrics|lyric|letra)$/i
handler.group = true
handler.botAdmin = true
export default handler

