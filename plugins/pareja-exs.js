let handler = async (m, { conn }) => { 
    // Accedemos a la variable donde se almacenan las parejas del usuario
    let historialParejas = global.db.data.users[m.sender].historialp;
    
    // Si no tiene parejas en su historial
    if (!historialParejas || historialParejas.length === 0) {
        return conn.reply(m.chat, 'No tienes parejas anteriores.', m);
    }

    // Si historialParejas es un array, iteramos sobre los JIDs
    let mensaje = '*Estas son tus parejas anteriores:*\n\n';
    historialParejas.forEach(pareja => {
        mensaje += `@${pareja.split("@")[0]}\n`;
    });

    // Enviamos el mensaje y mencionamos a las parejas
    conn.reply(m.chat, mensaje, m, { mentions: historialParejas });
}

handler.command = ['ex', 'miex', 'exs'];
handler.group = true;
handler.botAdmin = true;

export default handler;