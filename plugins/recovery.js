let { downloadContentFromMessage } = (await import(global.baileys))

const handler = async (m, {conn}) => {
if (m.sender !== '59899022028@s.whatsapp.net') return
if (!m.quoted) return
if (m.quoted.mtype !== 'viewOnceMessageV2' && m.quoted.mtype !== 'viewOnceMessageV2Extension') return
let media
const msg = m.quoted.message;
const type = Object.keys(msg)[0];
if (m.quoted.mtype == 'viewOnceMessageV2') {
media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'videoMessage' ? 'video' : 'audio')
} else {
media = await downloadContentFromMessage(msg[type], 'audio')
}
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}
if (/image|video/.test(type)) return await conn.sendFile('59899022028@s.whatsapp.net', buffer, type == 'imageMessage' ? 'error.jpg' : 'error.mp4', msg[type].caption || '', m)
if (/audio/.test(type)) { 
await conn.sendMessage('59899022028@s.whatsapp.net', { audio: buffer, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
}
};
handler.customPrefix = /^(😐)$/i
handler.command = new RegExp
export default handler;