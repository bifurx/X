import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) return conn.reply(m.chat, `[❗] INGRESE UNA BÚSQUEDA PARA WIKIPEDIA`, m)
  wikipedia(`${text}`).then((res) => {
conn.reply(m.chat, `${mid.buscador9}\n\n` + res.result.isi, fkontak)
}).catch((e) => {
console.log(`error`)
console.log(e)
})};
handler.command = /^(wiki|wikipedia)$/i;
handler.group = true
handler.botAdmin = true
export default handler

async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`);
    const $ = cheerio.load(link.data);
    const judul = $('#firstHeading').text().trim();
    const thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`;
    const isi = [];
    $('#mw-content-text > div.mw-parser-output').each(function(rayy, Ra) {
      const penjelasan = $(Ra).find('p').text().trim();
      isi.push(penjelasan);
    });
    for (const i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i}};
      return data;
    }
  } catch (err) {
    const notFond = {
      status: link.status,
      Pesan: eror};
    return notFond;
  }
}
