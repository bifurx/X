import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, command }) => {
if (command === 'quever' && !text) { 
return conn.reply(m.chat, `[❗] Elije el género, o si deseas que sea al azar (random).\n\n\`Comandos disponibles:\`\n\n* .quever random\n* .quever terror\n* .quever drama\n* .quever romance\n* .quever adolescente\n* .quever catastrofe\n* .quever belicas\n* .quever documentales`, m)
} else if (command === 'quever2' && !text) {
let link = "https://telegra.ph/file/1d1a3672e2c4089ba46ad.jpg"
return conn.sendButton(m.chat, null, null, link, [[`🎲 RANDOM 🎲`, `.quever2 random`], [`👻 TERROR 👻`, `.quever2 terror`], [`😭 DRAMA 😭`, `.quever2 drama`], [`😍 ROMANCE 😍`, `.quever2 romance`], [`✨ ADOLESCENTES ✨`, `.quever2 adolescente`], [`🌋 CATÁSTROFES 🌋`, `.quever2 catastrofe`], [`💣🪖 BÉLICAS 🪖💣`, `.quever2 belicas`], [`🗃️ DOCUMENTALES 🗃️`, `.quever2 documentales`]], null, null, fkontak)
}
let listaPeliculas;
switch (text.toLowerCase()) {
        case 'random':
            const todasLasListas = [
                JSON.parse(fs.readFileSync(`./src/JSON/peliculasTerror.json`)),
                JSON.parse(fs.readFileSync(`./src/JSON/peliculasDrama.json`)),
                JSON.parse(fs.readFileSync(`./src/JSON/peliculasAdolescentes.json`)),
                JSON.parse(fs.readFileSync(`./src/JSON/peliculasRomance.json`)),
                JSON.parse(fs.readFileSync(`./src/JSON/peliculasBelicas.json`)),
                JSON.parse(fs.readFileSync(`./src/JSON/peliculasCatastrofe.json`)),
                JSON.parse(fs.readFileSync(`./src/JSON/peliculasDocumentales.json`))
            ];
            listaPeliculas = todasLasListas[Math.floor(Math.random() * todasLasListas.length)];
            break;
        case 'terror':
            listaPeliculas = JSON.parse(fs.readFileSync(`./src/JSON/peliculasTerror.json`));
            break;
        case 'drama':
            listaPeliculas = JSON.parse(fs.readFileSync(`./src/JSON/peliculasDrama.json`));
            break;
        case 'adolescente':
            listaPeliculas = JSON.parse(fs.readFileSync(`./src/JSON/peliculasAdolescentes.json`));
            break;
        case 'romance':
            listaPeliculas = JSON.parse(fs.readFileSync(`./src/JSON/peliculasRomance.json`));
            break;
		case 'belicas':
            listaPeliculas = JSON.parse(fs.readFileSync(`./src/JSON/peliculasBelicas.json`));
            break;
		case 'catastrofe':
            listaPeliculas = JSON.parse(fs.readFileSync(`./src/JSON/peliculasCatastrofe.json`));
            break;
		case 'documentales':
            listaPeliculas = JSON.parse(fs.readFileSync(`./src/JSON/peliculasDocumentales.json`));
            break;
        default:
            return conn.reply(m.chat, 'Categoría no válida', m);
    }
    const randomIndex = Math.floor(Math.random() * listaPeliculas.length);
    const peliculaAleatoria = listaPeliculas[randomIndex];
    const busqueda = `${peliculaAleatoria.titulo} caratula pelicula`;
    const res = await googleImage(busqueda);
    let image = res[0];
    let caratula = image;
    let caption = `▰▰▰▰▰▰▰▰▰▰▰▰▰▰\n🍿 \`${peliculaAleatoria.titulo}\` 🍿\n▰▰▰▰▰▰▰▰▰▰▰▰▰▰\n\n*📌 Género:* ${peliculaAleatoria.genero}\n\n*🎞️ Sinopsis:*\n* ${peliculaAleatoria.descripcion}\n▰▰▰▰▰▰▰▰▰▰▰▰▰▰`
    if (command === 'quever') { 
    conn.sendFile(m.chat, caratula, '', caption, fkontak);
    } else if (command === 'quever2') {
        let link = "https://telegra.ph/file/cd132232c09831825aed2.jpg"
conn.sendButton(m.chat, caption, null, caratula, [[`🎬 SIGUIENTE 🎬`, `.quever2 ${text}`], [`Cambiar Género`, `.quever2`]], null, null, fkontak)
    }
};
handler.command = ['quever', 'quever2']
handler.group = true
handler.botAdmin = true
export default handler;