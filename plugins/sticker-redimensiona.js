import jimp from "jimp";
import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import uploadImage from "../lib/uploadImage.js";
import uploadFile from '../lib/uploadFile.js';
import { sticker } from '../lib/sticker.js';
import { webp2png } from "../lib/webp2mp4.js";
const DEFAULT_SIZE = 500;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let resizeImage = async (buffer, size) => {
let image = await jimp.read(buffer);
let { width, height } = image.bitmap;
if (width > height) {
height = jimp.AUTO;
width = size;
} else {
width = jimp.AUTO;
height = size;
}
let resizedImage = await image.resize(width, height);
return await resizedImage.getBufferAsync(jimp.MIME_PNG);
};

let resizeVideo = async (buffer, size) => {
let inputPath = path.join(__dirname, 'input.mp4');
let outputPath = path.join(__dirname, 'output.mp4');
fs.writeFileSync(inputPath, buffer);

return new Promise((resolve, reject) => {
ffmpeg(inputPath)
.outputOptions([
`-vf scale=${size}:-1`
])
.output(outputPath)
.on('end', () => {
fs.unlinkSync(inputPath);
let resizedBuffer = fs.readFileSync(outputPath);
fs.unlinkSync(outputPath);
resolve(resizedBuffer);
})
.on('error', (err) => {
fs.unlinkSync(inputPath);
reject(err);
})
.run();
});
};

let handler = async (m, { conn, args }) => {
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || q.mediaType || '';
let media = await q.download?.();
if (!media) return conn.reply(m.chat, '[❗] RESPONDA A UNA IMAGEN, VIDEO O GIF.', m);
let buffer;
if (/image\/(png|jpe?g)/.test(mime)) {
buffer = await resizeImage(media, DEFAULT_SIZE);
} else if (/video|gif/.test(mime)) {
buffer = await resizeVideo(media, DEFAULT_SIZE);
} else {
return conn.reply(m.chat, '[❗] EL FORMATO NO ES COMPATIBLE.', m);
}
let link = await uploadFile(buffer);
let stiker = await sticker(false, link);
conn.sendFile(m.chat, stiker, 'sticker.webp')
};

handler.command = ['s2'];
handler.group = true;
handler.botAdmin = true;
export default handler;
