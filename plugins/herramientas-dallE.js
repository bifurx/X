import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
    if (!text) return conn.reply(m.chat, `*𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝘼𝙍𝘼 𝘾𝙍𝙀𝘼𝙍 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝘾𝙊𝙉 𝘿𝘼𝙇𝙇-𝙀 (𝙄𝘼)\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊:\n*${usedPrefix + command} Un gato de color morado con celeste estando en Júpiter, iluminando el cosmo con su encanto con un efecto minimalista.*`, m)
    

    
    try {
      // api venom xov ❤️
        const response = await fetch(`https://api-xovvip.vercel.app/text2img?text=${encodeURIComponent(text)}`);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const buffer = await response.buffer();
        
        await conn.sendMessage(m.chat, {image: buffer}, {quoted: m});
if (buffer) {
    m.react("✅")
    } 
    } catch {
        console.log('error')
    }
}

handler.command = ['dalle', 'imagina'];
handler.group = true
handler.botAdmin = true
export default handler;