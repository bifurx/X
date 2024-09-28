let handler = async (m, { conn }) => {

await conn.reply(m.sender, `Solicitaste el link del grupo del bot. 
*Si aparece el link en blanco y no puedes tocar el link, copialo y pegalo en el chat para que se ponga en azul y puedas entrar.*`, m)
await conn.reply(m.sender, `https://chat.whatsapp.com/IArqrNgXG5HJlMGL7OV7pH`, m)

}

handler.command = ['grupo'];

export default handler;