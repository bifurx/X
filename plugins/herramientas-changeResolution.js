import jimp from "jimp";
import uploadImage from "../lib/uploadImage.js";
let handler = async (m, { conn, usedPrefix, text }) => {
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || '';
if (!/image\/(png|jpe?g)/.test(mime)) return conn.reply(m.chat, '*[❗] RESPONDA A UNA IMAGEN PARA CAMBIARLE LA RESOLUCIÓN*', m)
let [newWidth, newHeight] = text.split('x').map(v => parseInt(v));
if (isNaN(newWidth) || isNaN(newHeight)) return conn.reply(m.chat, '*[❗] INGRESE UNA RESOLUCIÓN VÁLIDA EN FORMATO ancho x alto*\n*(ej. 500x500)*', m)
let media = await q.download();
let link = await uploadImage(media);
let source = await jimp.read(await link);
let resizedImage = await source.resize(newWidth, newHeight);
let buffer = await resizedImage.getBufferAsync(jimp.MIME_PNG);
let caption = `_*NUEVA RESOLUCIÓN :*_ ${newWidth} x ${newHeight}
> Ancho : ${newWidth}
> Altura : ${newHeight}`
conn.sendFile(m.chat, buffer, null, caption, m)
}
handler.command = ['res']
handler.group = true
handler.botAdmin = true
export default handler