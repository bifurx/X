// Bin Info ミ⁠●⁠﹏⁠☉⁠ミ
import request from 'request'

let handler = async (m,{ conn, command, args, text, usedPrefix}) => {
if (!text) return conn.reply(m.chat, `Ingresa un bin ej .bin xxxxxx`, m)
    request(`https://bins.antipublic.cc/bins/${text.slice(0, 6)}`, (error, response, body) => {
        if (body.includes('Invalid BIN') || body.includes('not found.') || body.includes('Error code 521') || body.includes('cloudflare')) {
            m.reply("Bin inválido o no se encontró Bin");
        } else {
            const js = JSON.parse(body);
            const binnn = js['bin'];
            const brand = js['brand'];
            const country = js['country'];
            const country_name = js['country_name'];
            const country_flag = js['country_flag'];
            const country_currencies = js['country_currencies'][0];
            const bank = js['bank'];
            const level = js['level'];
            const type = js['type'];
            const info=`•Bin -»  ${text.slice(0, 6)}
•Tipo -»  ${type} - ${brand} - ${level} 
•Banco -»  ${bank} 
•País -»  ${country_name} ${country_flag} ${country_currencies}
`
m.reply(info)
        }
    });
}

export default handler;
handler.tags = ['bin']
handler.command = /^(bin)$/i
handler.rowner = true
