const palabras = [
    "gato",
    "perro",
    "pajaro",
    "elefante",
    "tigre",
    "ballena",
    "mariposa",
    "tortuga",
    "conejo",
    "rana",
    "pulpo",
    "ardilla",
    "jirafa",
    "cocodrilo",
    "pinguino",
    "delfin",
    "serpiente",
    "hamster",
    "mosquito",
    "abeja",
    "camello",
    "hipopotamo",
    "rinoceronte",
    "zorro",
    "lobo",
    "raton",
    "murcielago",
    "caballo",
    "burro",
    "cebra",
    "ciervo",
    "buho",
    "aguila",
    "halcon",
    "puma",
    "leon",
    "pantera",
    "canguro",
    "koala",
    "castor",
    "mapache",
    "comadreja",
    "morsa",
    "foca",
    "orca",
    "tiburon",
    "langosta",
    "gamba",
    "medusa",
    "coral",
    "cangrejo",
    "anguila",
    "trucha",
    "caracol",
    "lombriz",
    "hormiga",
    "araña",
    "escorpion",
    "mariquita",
    "saltamontes",
    "grillo",
    "avispa",
    "cucaracha",
    "polilla",
    "escarabajo",
    "ocelote",
    "alpaca",
    "llama",
    "carpincho",
    "bufalo",
    "antilope",
    "piraña",
    "pez",
    "calamar",
    "almeja",
    "ostra",
    "erizo",
    "estrella",
    "pepino",
    "camaron",
    "bacalao",
    "merluza",
    "dorada",
    "sardina",
    "bonito",
    "pescado",
    "manta",
    "rayas",
    "volador",
    "luna",
    "martillo",
    "dragon",
    "iguana",
    "lagarto",
    "labial",
    "marina",
    "varano",
    "salamandra",
    "cobra",
    "coral",
    "liga",
    "rey",
    "ratonera",
    "leche",
    "vibora",
    "anaconda",
    "ciega",
    "azul",
    "lagartija",
    "hocico",
    "culebra",
    "agua",
    "verde",
    "bronceada",
    "cobre",
    "arbol",
    "arena",
    "maiz",
    "tierra",
    "voladora",
    "jardin",
    "venenosa",
    "escalera",
    "bastarda",
    "herradura",
    "europa",
    "collar",
    "ciega"
];

const intentosMaximos = 10

const gam = new Map()

function elegirPalabraAleatoria() {
return palabras[Math.floor(Math.random() * palabras.length)]
}

function ocultarPalabra(palabra, letrasAdivinadas) {
let palabraOculta = ""
for (const letra of palabra) {
if (letrasAdivinadas.includes(letra)) {
palabraOculta += letra
} else {
palabraOculta += " _ "
}}
return palabraOculta
}

function mostrarAhorcado(intentos) {
const dibujo = [
" ____",
" |  |",
intentos < 6 ? " |  O" : " |",
intentos < 5 ? " | /" : intentos < 4 ? " | / " : intentos < 3 ? " | / \\" : intentos < 2 ? " | / \\ " : " |",
intentos < 2 ? "_|_" : " |",
]
return dibujo.slice(0, intentosMaximos - intentos).join("\n")
}

function juegoTerminado(sender, mensaje, palabra, letrasAdivinadas, intentos) {
if (intentos === 0) {
gam.delete(sender)
return `¡Perdiste! La palabra era "${palabra}".\n\n${mostrarAhorcado(intentos)}`
} else if (!mensaje.includes("_")) {
gam.delete(sender)
return `¡Ganaste! Adivinaste la palabra "${palabra}".`
} else {
return `${mensaje}\n\n${mostrarAhorcado(intentos)}`
}}
let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].game) return conn.reply(m.chat, `Juegos deshabilitados.`, m)
let users = global.db.data.users[m.sender]
if (gam.has(m.sender)) {
return conn.reply(m.chat, "Ya tienes un juego en curso. ¡Termina ese primero!", m)
}
let palabra = elegirPalabraAleatoria()
let letrasAdivinadas = []
let intentos = intentosMaximos
let mensaje = ocultarPalabra(palabra, letrasAdivinadas)
gam.set(m.sender, { palabra, letrasAdivinadas, intentos })
let ejemplo = `¡Bienvenido al juego del ahorcado! Adivina la palabra:\n\n${mensaje}\n\nIntentos restantes: ${intentos}`
let instrucciones = `Para adivinar letras, *envía una letra a la vez.* Por ejemplo, si crees que la letra "a" está en la palabra, envía "a". Si fallas 6 veces, pierdes el juego.😀`
conn.reply(m.chat, ejemplo + "\n\n" + instrucciones, m)
}

handler.before = async (m, { conn }) => {
let users = global.db.data.users[m.sender]
let juego = gam.get(m.sender)
if (!juego) return
let { palabra, letrasAdivinadas, intentos } = juego
if (m.text.length >= 2) return conn.reply(m.chat, '[❗] Debes poner de a una letra.', m);
if (m.text.length === 1 && m.text.match(/[a-zA-Z]/)) {
let letra = m.text.toLowerCase()
if (!letrasAdivinadas.includes(letra)) {
letrasAdivinadas.push(letra)
if (!palabra.includes(letra)) {
intentos--
}
}
let mensaje = ocultarPalabra(palabra, letrasAdivinadas)
let respuesta = juegoTerminado(m.sender, mensaje, palabra, letrasAdivinadas, intentos)
if (respuesta.includes("¡Perdiste!") || respuesta.includes("¡Ganaste!")) {
 conn.reply(m.chat, respuesta, m)
} else {
gam.set(m.sender, { palabra, letrasAdivinadas, intentos })
conn.reply(m.chat, respuesta + `\n\nIntentos restantes: ${intentos}`, m)
}
} else {
let mensaje = ocultarPalabra(palabra, letrasAdivinadas);
let respuesta = juegoTerminado(m.sender, mensaje, palabra, letrasAdivinadas, intentos)
conn.reply(m.chat, respuesta, m)
gam.delete(m.sender)
}}
handler.command = ['ahorcado']
handler.group = true
handler.botAdmin = true
export default handler