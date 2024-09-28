import fetch from 'node-fetch';
import fs from 'fs';
import axios from 'axios';

const handler = async (m, { conn, text, usedPrefix, command }) => {

 if (!text) return conn.reply(m.chat, 'INGRESE UNA CANCIÓN O ARTISTA', m);
  try {
      await m.react("⌛")
    const res = await fetch(`https://api.cafirexos.com/api/spotifysearch?text=${text}&apikey=BrunoSobrino`);
    const data = await res.json()
    const linkDL = data?.spty?.resultado[0]?.url || data?.spty?.resultado[0]?.link;
    const musics = await fetch(`https://api.cafirexos.com/api/spotifydl?text=${linkDL}&apikey=BrunoSobrino`);
    const music = await conn.getFile(musics?.url)
    const infos = await fetch(`https://api.cafirexos.com/api/spotifyinfo?text=${linkDL}&apikey=BrunoSobrino`);
    const info = await infos.json()
    const spty = info?.spty?.resultado
    const img = await (await fetch(`${spty.thumbnail}`)).buffer()  
    let spotifyi = `▢ *Título:* ${spty.title}\n
▢ *Artista:* ${spty.artist}\n
▢ *Álbum:* ${spty.album}\n
▢ *Publicado:* ${spty.year}\n\n
> *[ ℹ️ ] Se está enviando el audio. espere...*`
    await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: music.data, fileName: `${spty.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch (error) {
    console.error('Error: ' + error.message);
  }
};
handler.command = /^(spotify)$/i;
handler.group = true
handler.botAdmin = true
export default handler;