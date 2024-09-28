import ws from 'ws';
async function handler(m, { conn: _envio, usedPrefix }) {
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
function convertirMsADiasHorasMinutosSegundos(ms) {
var segundos = Math.floor(ms / 1000);
var minutos = Math.floor(segundos / 60);
var horas = Math.floor(minutos / 60);
var días = Math.floor(horas / 24);
segundos %= 60;
minutos %= 60;
horas %= 24;
var resultado = "";
if (días !== 0) {
resultado += días + " días, ";
}
if (horas !== 0) {
resultado += horas + " horas, ";
}
if (minutos !== 0) {
resultado += minutos + " minutos, ";
}
if (segundos !== 0) {
resultado += segundos + " segundos";
}
return resultado;
}
const message = users.map((v, index) => `(${index + 1})\nwa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado\n*👥 𝙉𝙊𝙈𝘽𝙍𝙀 :* *${v.user.name || '-'}*\n*🔰 𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏𝙄𝙑𝙊 :* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n••••••••••••••••••••••••••••••••••••\n\n');
const replyMessage = message.length === 0 ? '*NO HAY SUB BOTS DISPONIBLE. VERIFIQUE MÁS TARDE.*' : message;
const totalUsers = users.length;
const responseMessage = `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙎𝙐𝘽𝘽𝙊𝙏𝙎 (𝙎𝙀𝙍𝘽𝙊𝙏/𝙅𝘼𝘿𝙄𝘽𝙊𝙏) 𝘼𝘾𝙏𝙄𝙑𝙊𝙎\n\n𝙎𝙐𝘽 𝘽𝙊𝙏𝙎 𝘾𝙊𝙉𝙀𝘾𝙏𝘼𝘿𝙊 : ${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m})}
handler.command = ['listjadibots', 'bots', 'subsbots'];
handler.rowner = true
export default handler;
