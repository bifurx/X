import fs from 'fs'
import fetch from 'node-fetch';
import axios from 'axios';
import {getTracks} from '@green-code/music-track-data';

let timeout = 40000
let poin = 500 
 
let handler = async (m, { conn, command, usedPrefix, isOwner }) => {
if (!db.data.chats[m.chat].game) return conn.reply(m.chat, `Juegos deshabilitados.`, m)
if (m.sender !== '59899022028@s.whatsapp.net') return m.reply('no funciona..')
conn.tekateki = conn.tekateki ? conn.tekateki : {}
let id = m.chat
if (id in conn.tekateki && command !== 'pista' && command !== 'nose') {
conn.reply(m.chat, 'Todavía hay un juegos sin responder en este chat', conn.tekateki[id][0])
throw false
}

try {    
if (command == 'acertijo' || command == 'adivinanza') {
let tekateki = JSON.parse(fs.readFileSync(`./src/game/acertijo.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `
ⷮ *${json.question}*

*• Tiempo:* ${(timeout / 1000).toFixed(2)} segundos
`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m),
json, poin, setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `Se acabó el tiempo!\n*Respuesta:* ${json.response}`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)]}

if (command == 'advpe' || command == 'pelicula' || command == 'adivinarpelicula') {    
let tekateki = JSON.parse(fs.readFileSync(`./src/game/peliculas.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `
ⷮ *• ADIVINA LA PELÍCULA CON EMOJIS •*

*${json.question}*

*• Tiempo:* ${(timeout / 1000).toFixed(2)} segundos
`.trim()
conn.tekateki[id] = [
await 
conn.sendMessage(m.chat, { text: caption }, { quoted: m }), json, poin, setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `Se acabó el tiempo!\n*Respuesta:* ${json.response}`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)
]}

if (command == 'cancion' || command == 'canción') {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {};
if (id in conn.tebaklagu) {
conn.reply(m.chat, 'Todavía hay canciones sin respuesta en este chat.', conn.tebaklagu[id][0]);
throw false;
}
const resCancion = JSON.parse(fs.readFileSync(`./src/game/cancion2.json`));
const artistaObj = resCancion[Math.floor(Math.random() * resCancion.length)];
const song = artistaObj.question;
const resp = artistaObj.response;
const canta = artistaObj.artista;
const searchUrl = "http://api.deezer.com/search?limit=56&q=" + encodeURIComponent(song);
const response = await axios.get(searchUrl);
const data = response.data.data;
const searchResults = data.map(({ artist, title, preview, album }, index) => ({
    preview,
    title,
    artist: artist.name,
    album: {
        title: album.title,
        artwork: album.cover_xl,
    },
}));
if (searchResults.length === 0) return
const result = searchResults[0];
const caption = `*🎵 𝗔𝗗𝗜𝗩𝗜𝗡𝗔 𝗟𝗔 𝗖𝗔𝗡𝗖𝗜𝗢𝗡 🎵*
🥁🪕🎻🎺🎶🎹🎼🎸🎷🎛️

* *[⌛] Tiempo* ➺ ${(timeout / 1000).toFixed(2)} segundos
* *[💡] Escribe* ➺ .pista Para obtener una pista
* *[✖️] Escribe* ➺ .nose Para cancelar el juego

*[❗] RESPONDE UNICAMENTE A ESTE MENSAJE.*`.trim();

  conn.tebaklagu[id] = [
        await m.reply(caption),
        { question: canta, response: resp }, 
        poin,
        setTimeout(() => {
          if (conn.tebaklagu[id]) {
            conn.reply(m.chat, `*[⌛] Se acabó el tiempo!*\n\`La respuesta era:\`\n* *"${resp}"* de *${canta}*😀`, conn.tebaklagu[id][0]);
            delete conn.tebaklagu[id];
          }
        }, timeout)
      ];
await conn.sendMessage(m.chat, { audio: { url: result.preview }, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}

if (command == 'palabra' || command == 'ordenar') {
let tekateki = JSON.parse(fs.readFileSync(`./src/game/palabra.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `
ⷮ━━━━━━━━━━━━━━━━━━━
╔═════════════════╗
🔤 *ORDENA LA PALABRA* 🔤
╚═════════════════╝

🔍 *Letras:* ${json.question}

⏰ *Tiempo:* ${(timeout / 1000).toFixed(2)} segundos

✨ *Responde a este mensaje* con la palabra correcta ✨

━━━━━━━━━━━━━━━━━━━`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m),
json, poin, setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `Se acabó el tiempo!\n*Palabra:* ${json.response}`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)
]}

if (command == 'trivia') {
let tekateki = JSON.parse(fs.readFileSync(`./src/game/trivia.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `
ⷮ━━━━━━━━━━━━━━━━━━━━
╔══════════════════╗
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ 🎉 *T  R  I  V  I  A* 🎉
╚══════════════════╝

🔍 *Pregunta:* ${json.question}

⏰ *Tiempo:* ${(timeout / 1000).toFixed(2)} segundos

💡 *Responde a este mensaje* con la opción correcta

━━━━━━━━━━━━━━━━━━━━`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m),
json, poin, setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `Se acabó el tiempo!`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)
]}

if (command == 'pista') {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {};
conn.tekateki = conn.tekateki ? conn.tekateki : {};
const id = m.chat;
if (!(id in conn.tebaklagu) && !(id in conn.tekateki)) throw false;
let json, nya;
if (id in conn.tebaklagu) {
json = conn.tebaklagu[id][1];
nya = json.response;
} else {
json = conn.tekateki[id][1];
nya = json.response;
}
const nyanya = nya.replace(/[bcdfghjklmnñpqrstvwxyzBCDEFGHJKLMNÑPQRSTVWXYZ]/g, ' _ ');
m.reply('' + nyanya + '');
}} catch (e) {
console.log(e)}
}
handler.command = /^(acertijo|adivinanza|advpe|pelicula|adivinarpelicula|cancion|canción|palabra|ordenar|trivia|pista)$/i
handler.group = true
handler.botAdmin = true
export default handler

async function fetchJson(url, options) {
  try {
options ? options : {};
const res = await axios({method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options});
return res.data;
  } catch (err) {
    return err;
  }
}