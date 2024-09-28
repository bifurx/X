let handler = async (m, { conn, text }) => {
if (m.sender !== '59899022028@s.whatsapp.net') return
    
const excludedUsers = ['59899022028@s.whatsapp.net', 
                       '59897338691@s.whatsapp.net', //jose
                       '59891889085@s.whatsapp.net', //nG
                       '59896026646@s.whatsapp.net', //G
                       '59896768941@s.whatsapp.net', //sofiE
                       '59891846943@s.whatsapp.net', //ezeS
                      ]; 
    let allUsers = Object.keys(global.db.data.users);
    let usersToReset = allUsers.filter(user => !excludedUsers.includes(user));

    for (let user of usersToReset) {
delete global.db.data.users[user];
    }

conn.reply(m.chat, `*SE REINICIÓ A TODOS LOS USUARIOS EXCEPTO LOS EXCLUIDOS*`, m);
}

handler.command = ['rdglobal']
handler.rowner = true
export default handler;