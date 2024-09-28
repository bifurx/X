/*let { downloadContentFromMessage } = (await import(global.baileys))
import axios from 'axios';
import { webp2png } from '../lib/webp2mp4.js'
import { webp2mp4 } from '../lib/webp2mp4.js'; 
import uploadImage from '../lib/uploadImage.js'

let handler = m => m 
handler.before = async function (m, { conn, text, isOwner, isAdmin, participants } ) {
//if (m.sender !== '59899022028@s.whatsapp.net') return
if (m.chat !== '120363280974542167@g.us') return
if (db.data.chats[m.chat].modohorny && m.isGroup) return
if (isOwner) return
let jidOw = '59899022028@s.whatsapp.net'

if (m.mtype !== 'stickerMessage') return
let buffer, link, isAdultContent

async function checkImageForAdultContent(imageUrl) {
        try {
            const response = await axios.get('https://api.sightengine.com/1.0/check.json', {
                params: {
                    'url': link,
                    'models': 'nudity', // Modelo a usar, ajusta según la documentación
                    'api_user': '1782026009', // Tu API user
                    'api_secret': 'JDnLxWeu2KwqNoxLLRHBsStgfrsEZhBF' // Tu API secret
                }
            });

            // Manejo de la respuesta
            console.log(response.data);
            return response.data.nudity.safe < 0.04; // Ajusta el umbral según sea necesario

        } catch (error) {
            // Manejo de errores
            if (error.response) {
                console.error('Error en la respuesta de la API:', error.response.data);
            } else {
                console.error('Error:', error.message);
            }
            return false;
        }
    }

async function checkVideoForAdultContent(videoUrl) {
        try {
            const response = await axios.get('https://api.sightengine.com/1.0/video/check-workflow-sync.json', {
                params: {
                    'stream_url': link,
                    'workflow': 'wfl_gI1WyiOP1VyB3Z14qK4CN', // Reemplaza con tu workflow_id
                    'api_user': '1782026009', // Tu API user
                    'api_secret': 'JDnLxWeu2KwqNoxLLRHBsStgfrsEZhBF' // Tu API secret
                }
            });

 // Manejo de la respuesta
            console.log(response.data);

            if (response.data.summary && response.data.summary.action === 'reject') {
                const rejectProb = response.data.summary.reject_prob;
                const rejectReasons = response.data.summary.reject_reason.map(reason => reason.text).join(', ');

                if (rejectProb > 0.93) { 
                    console.log(`Razones de rechazo: ${rejectReasons}`);
                    return true; // Contiene contenido adulto
                }
            }
            return false; // No contiene contenido adulto

        } catch (error) {
            // Manejo de errores
            if (error.response) {
                console.error('Error en la respuesta de la API:', error.response.data);
            } else {
                console.error('Error:', error.message);
            }
            return false;
        }
    }

const q = m;
const mime = q.mediaType || '';

if (!mime && text) return
    
let media = await q.download();

/*if (m.mtype !== 'stickerMessage') {
if (/image/.test(mime)) {
link = await uploadImage(media)
}}*/
    
/*if (m.mtype === 'stickerMessage') {
if (typeof media === 'string') {
                    media = Buffer.from(media, 'base64'); 
                } else if (!(media instanceof Buffer)) {
                    media = Buffer.from(media);
                }
                let videoBuffer = await webp2mp4(media);
                let buff = await (await fetch(videoBuffer)).buffer();
                link = await uploadImage(buff);
    }

if (link.endsWith('.png') || link.endsWith('.jpg')) {
isAdultContent = await checkImageForAdultContent(link);
}
    
if (link.endsWith('.mp4')) {
isAdultContent = await checkVideoForAdultContent(link);
}
    
if (isAdultContent) {
let user = global.db.data.users[m.sender]

        user.warn += 1;

        if (user.warn >= 4) {
            user.warn = 0;
            await conn.reply(m.chat, `*[❗] @${m.sender.split("@")[0]} ha sido eliminado del grupo por tener 4 advertencias previas.*`, null, {mentions: [m.sender, jidOw, ...participants.filter(p => p.admin).map(v => v.id)]});
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        } else {
            await conn.reply(m.chat, `*[❗] Se detectó contenido pornográfico enviado por @${m.sender.split("@")[0]}*\n\`Advertencias: ${user.warn}/4\``, null, {mentions: [m.sender, jidOw, ...participants.filter(p => p.admin).map(v => v.id)]});
        }

let delet = m.key.participant 
let bang = m.key.id 
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }});
    }
    return;
}
export default handler*/