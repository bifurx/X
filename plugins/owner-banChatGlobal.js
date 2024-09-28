let handler = async (m, { conn, isAdmin, isOwner, command }) => {
if (m.sender !== '59899022028@s.whatsapp.net') return

  const filteredJIDs = [
    '120363240234311862@g.us', 
    '120363314590728155@g.us'
  ];

  if (command === 'bcg') {
    // Banear todos los grupos excepto los filtrados
    const groups = Object.entries(conn.chats).filter(
      ([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !filteredJIDs.includes(jid)
    );
    for (let i = 0; i < groups.length; i++) {
      setTimeout(() => {
        global.db.data.chats[groups[i][0]].isBanned = true;
      }, i * 1000);
    }
    m.react("☑️");

  } else if (command === 'ucg') {
    // Desbanear todos los grupos sin filtro
    const groups = Object.entries(conn.chats).filter(
      ([jid, chat]) => jid.endsWith('@g.us') && chat.isChats
    );
    for (let i = 0; i < groups.length; i++) {
      setTimeout(() => {
        global.db.data.chats[groups[i][0]].isBanned = false;
      }, i * 1000);
    }
    m.react("☑️");

  }
}

handler.command = ['bcg', 'ucg'];
export default handler;