const { prepareWAMessageMedia, proto, generateWAMessageFromContent } = (await import('@whiskeysockets/baileys')).default;
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (m.sender !== '59899022028@s.whatsapp.net') return
    let q = m.quoted ? m.quoted : null;
    if (!q) return
    let mime = (q.msg || q).mimetype || '';
    let result = await q.download?.();
    if (!result) return 

let parts = text ? text.split('|').map(s => s.trim()) : [];

    let real = parts[0] || '';

    let usuario = parts[1] ? parts[1].replace('@', '') : ''; // Remover '@' inicial si está presente

    let destino = parts[2] || m.chat;
    
/*let esp = text.split`|`.trim()
let real = esp[0]
let usuario = esp[1].split`@`.trim()
let destino = esp[2].trim()*/
    /*if (text) {
        destino = text
    } else {
        destino = m.chat
    }*/

    if (mime.includes('webp')) {
    let media = await prepareWAMessageMedia({ sticker: result }, { upload: conn.waUploadToServer });
    const stickerMessage = { 
        key: { 
            fromMe: false, 
            participant: `${usuario}@s.whatsapp.net`, 
            ...(m ? { remoteJid: m.key.remoteJid } : {})
        },
        message: { 
            stickerMessage: media.stickerMessage
        }
    };
    await conn.sendMessage(destino, { text: real}, { quoted: stickerMessage });
    } else if (mime.includes('image')) {
let media = await prepareWAMessageMedia({ image: result }, { upload: conn.waUploadToServer });
    const imageMessage = { 
        key: { 
            fromMe: false, 
            participant: `${usuario}@s.whatsapp.net`, 
            ...(m ? { remoteJid: m.key.remoteJid } : {})
        },
        message: { 
            imageMessage: media.imageMessage
        }
    };
await conn.sendMessage(destino, {text: real}, {quoted: imageMessage})
    } else if (mime.includes('video')) {
        let media = await prepareWAMessageMedia({ video: result }, { upload: conn.waUploadToServer });
    const videoMessage = { 
        key: { 
            fromMe: false, 
            participant: `${usuario}@s.whatsapp.net`, 
            ...(m ? { remoteJid: m.key.remoteJid } : {})
        },
        message: { 
            videoMessage: media.videoMessage
        }
    };
await conn.sendMessage(destino, {text: real}, {quoted: videoMessage})
    }
};
handler.command = ['c4'];
handler.rowner = true;
export default handler;