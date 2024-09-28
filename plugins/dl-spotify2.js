const handler = async (m, { conn, args, command, usedPrefix }) => {
  // Verificar que el comando tiene el formato correcto
  if (!args.length) return m.reply(`Ingrese canción y artista.`);
await m.react("⌛")
  const query = args.join(' ');
  const searchUrl = `https://api.diego-ofc.store/spotifysearch?query=${encodeURIComponent(query)}`;

  try {
    // Realizar la búsqueda en la API de Spotify
    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();

    if (!searchData.status || !searchData.data.length) {
      return m.reply('No se encontraron resultados para la búsqueda.');
    }

    // Obtener la URL del primer resultado
    const firstResult = searchData.data[0];
    const trackUrl = firstResult.url;

    // Realizar la solicitud de descarga usando la URL del primer resultado
    const downloadUrl = `https://api.diego-ofc.store/spotifydl?url=${encodeURIComponent(trackUrl)}`;
    const downloadResponse = await fetch(downloadUrl);
    const downloadData = await downloadResponse.json();

    if (!downloadData.status) {
      return m.reply('No se pudo obtener la información de descarga.');
    }

    const { thumbnail, title, artist, duration, preview, url } = downloadData.data;

    // Enviar la información del track
    let info = `✨ *Título:* ${title}\n🗣️ *Artista:* ${artist.name}\n⏱️ *Duración:* ${duration}\n🔗 *Enlace de Spotify:* ${trackUrl}`;
    await conn.sendMessage(m.chat, {
      text: info,
      contextInfo: {
        forwardingScore: 9999999,
        isForwarded: true,
        externalAdReply: {
          showAdAttribution: true,
          containsAutoReply: true,
          renderLargerThumbnail: true,
          title: '🎶 DESCARGAS SPOTIFY 🎶',
          mediaType: 1,
          thumbnail: await (await fetch(`${thumbnail}`)).buffer(),
          mediaUrl: thumbnail
        }
      }
    }, { quoted: m });

    // Enviar el archivo de audio
    await conn.sendMessage(m.chat, { audio: { url: url }, fileName: `${title}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m });

  } catch (error) {
    console.error(error);
    m.reply('Hubo un error al procesar tu solicitud.');
  }
};

handler.command = /^spotify2$/i;
handler.group = true;
handler.botAdmin = true;

export default handler;
