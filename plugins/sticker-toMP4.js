import { sticker } from '../lib/sticker.js';
import { webp2mp4 } from '../lib/webp2mp4.js'; 

let handler = async (m, { conn }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || '';

    if (!mime.startsWith('image/webp')) {
        return conn.reply(m.chat, '[❗] RESPONDA A UN STICKER ANIMADO', m);
    }

    let media = await q.download?.();
    if (!media) return conn.reply(m.chat, '[❗] ERROR AL DESCARGAR EL STICKER ANIMADO.', m);

    try {

        if (typeof media === 'string') {
            media = Buffer.from(media, 'base64'); 
        } else if (!(media instanceof Buffer)) {
            media = Buffer.from(media);
        }

        let videoBuffer = await webp2mp4(media); 
        let caption = '*Sticker convertido a video*';
        conn.sendFile(m.chat, videoBuffer, 'sticker.mp4', caption, m);
    } catch (error) {
        console.error('Error al convertir sticker animado a video MP4:', error);
        conn.reply(m.chat, '[❗] Ocurrió un error al convertir el sticker animado a video MP4.', m);
    }
};

handler.command = ['img2', 'v2'];
handler.group = true;
handler.botAdmin = true;
export default handler;