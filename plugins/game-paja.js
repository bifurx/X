let handler = async (m, { conn, usedPrefix, text }) => {
let { key } = await conn.sendMessage(m.chat, { text: "Tas caliente! Ahora te haré una paja🥵" }, { quoted: m });
const array = [
'8==👊==D', '8===👊=D', '8=👊===D', '8=👊===D', '8==👊==D', '8===👊=D', '8=👊===D', '8==👊==D', '8===👊=D', '8=👊===D', '8==👊==D', '8===👊=D', '8===👊=D💦'
]
for (let item of array) {
await conn.sendMessage(m.chat, { text: `${item}`, edit: key }, { quoted: m });
await new Promise(resolve => setTimeout(resolve, 200)); 
}
return conn.sendMessage(m.chat, { text: `Oh, se vino en menos de 1 minuto!`.trim() , edit: key, mentions: [m.sender] }, { quoted: m });
};
handler.command = /^paja$/i;
handler.group = true
handler.botAdmin = true
handler.admin = true
export default handler;