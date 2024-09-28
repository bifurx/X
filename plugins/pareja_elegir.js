let handler = async (m, { conn, usedPrefix, command, text, participants, groupMetadata}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null
if(!text && !m.quoted) return conn.reply(m.chat, `*[❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 O RESPONDA A UN MENSAJE DE 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 PEDIRLE 𝚀𝚄𝙴 𝚂𝙴𝙰 𝚂𝚄 𝙿𝙰𝚁𝙴𝙹𝙰.*`, fkontak,  m)
if(who === m.sender) return conn.reply(m.chat, `𝚄𝚂𝚃𝙴𝙳 𝙼𝙸𝚂𝙼𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝙿𝙰𝚁𝙴𝙹𝙰🙄`, fkontak,  m)
if(who === conn.user.jid) return conn.reply(m.chat, `𝚈𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝚂𝙴𝚁 𝚂𝚄 𝙿𝙰𝚁𝙴𝙹𝙰🥹`, fkontak,  m)
let toM = persona => '@' + persona.split('@')[0]
let persona = global.db.data.users[m.sender].pasangan

try {
let users = global.db.data.users;
if (!users[who]) {
users[who] = {
pasangan: '', 
}}
let pacar = global.db.data.users[who].pasangan
if (global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != who) { 
let kz = await conn.reply(m.chat, `😡𝙀𝙍𝙀𝙎 𝙄𝙉𝙁𝙄𝙀𝙇😡\n\n𝚈𝙰 𝙴𝚂𝚃𝙰́𝚂 𝙴𝙽 𝚄𝙽𝙰 𝚁𝙴𝙻𝙰𝙲𝙸𝙾́𝙽 𝙲𝙾𝙽 ${toM(persona)}\n\n𝙿𝙰𝚁𝙰 𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝚁 𝙲𝙾𝙽 𝚂𝚄 𝙿𝙰𝚁𝙴𝙹𝙰, 𝙴𝚂𝙲𝚁𝙸𝙱𝙰: *.terminar*\n\n𝚈 𝙿𝙾𝙳𝚁𝙰́ 𝚃𝙴𝙽𝙴𝚁 𝚄𝙽𝙰 𝚁𝙴𝙻𝙰𝙲𝙸𝙾́𝙽 𝙲𝙾𝙽 @${who.split`@`[0]}`,  m, {contextInfo: { mentionedJid: [ persona, m.sender, who ] }}) 
conn.sendMessage(m.chat, { react: { text: "😡", key: kz.key }})
} else if (global.db.data.users[who].pasangan != "") {
if (pacar) {
if (m.sender == pacar && global.db.data.users[m.sender].pasangan == who) { 
let kz = await conn.reply(m.chat, `YA ESTAS EN PAREJA CON ${toM(persona)}🥰`, m , { contextInfo: { mentionedJid: [m.sender, persona]}})
conn.sendMessage(m.chat, { react: { text: "🥰", key: kz.key }})
return
}
conn.reply(m.chat, `[❗] LA PERSONA YA TIENE PAREJA O UNA CONFESIÓN PENDIENTE`, m)
} else {
global.db.data.users[m.sender].pasangan = who
conn.reply(m.chat, `${await ktnmbk.getRandom()}\n\nAcabas de invitar @${who.split('@')[0]}\n\n¡Por favor espere una respuesta!`, m , { contextInfo: { mentionedJid: [who]}})
}	
} else if (global.db.data.users[who].pasangan == m.sender) {
global.db.data.users[m.sender].pasangan = who
conn.reply(m.chat, `Felicitaciones, oficialmente están saliendo @${who.split('@')[0]}\n\nQue dure para siempre y siempre sea feliz 🥳🥳🥳`, m , { contextInfo: { mentionedJid: [who]}})
} else {
global.db.data.users[m.sender].pasangan = who
let kz = await conn.reply(m.chat, `*_💌${await ktnmbk.getRandom()}_*\n\n*@${m.sender.split("@")[0]}* 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝘾𝙇𝘼𝙍𝘼𝙉𝘿𝙊😳\n\n𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 *@${who.split`@`[0]}* 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙻𝙰 𝙳𝙴𝙲𝙻𝙰𝚁𝙰𝙲𝙸𝙾́𝙽🥹\n\n*_❤️Para aceptar escriba:_*\n*.aceptar* @${m.sender.split("@")[0]}\n\n*_💔Para rechazar escriba:_*\n*.rechazar* @${m.sender.split("@")[0]}`, m, { contextInfo: { mentionedJid: [ who, m.sender, who ]}})
conn.sendMessage(m.chat, { react: { text: "😳", key: kz.key }})
}
} catch (e) {
console.log(`error`)
console.log(e)
}}
handler.command = /^pareja$/i
handler.group = true
handler.botAdmin = true
export default handler

let ktnmbk = [
"Hay momentos en los que no me gusta estar solo. Pero tampoco quiero que todos me acompañen, solo te quiero a ti.",
"Agradezco a mis ojos, porque estos ojos me llevaron a encontrarte",
"¿Puedo enviarte un CV o no? Porque quiero postularme para ser tu novia/o.",
"No soy el más grande, pero estoy seguro que si puedo hacerte feliz con amor y cariño.",
"Solo soy una persona común que tiene muchos defectos y puede que no merezca tu amor, pero si estás dispuesto a aceptarme como tu novia/o, prometo hacer lo que sea mejor para ti. ¿Aceptarás mi amor?",
"Quiero decir algo. Me gustas desde hace mucho tiempo, pero no me atrevo a decirlo. Entonces, decidí solo WA. Quiero que seas mi novia/o.",
"Quiero decir algo que no puedo contener más. Te amo, ¿serás mi novia/o?",
"Quiero ser una persona que pueda hacerte reír y sonreír todos los días. ¿Serás mi novia/o?",
"Quiero tener una charla seria contigo. Todo este tiempo he albergado sentimientos por ti y siempre he estado pendiente de ti. Si no te importa, ¿quieres ser mi novia/o?",
"Te miro y veo el resto de mi vida ante mis ojos.",
"No tengo todo, pero al menos tengo suficiente amor para ti",
"Me gustaste desde el principio. Eres tan simple, pero la sencillez es muy especial a mis ojos. Será perfecto si eres especial en mi corazón.",
"Realmente estoy enamorado de ti. ¿Serás mía/o?",
"No te dije que no porque no tengo cupo ni crédito, pero estoy disfrutando de este anhelo por ti. Tal vez te sorprendas al escuchar eso. Siempre me has gustado.",
"No quiero que seas el sol de mi vida, porque aunque hace calor estás muy lejos. Tampoco quiero que seas aire, porque aunque te necesito y estás muy cerca, pero todos pueden respirarte también. Solo quiero que seas sangre que pueda estar muy cerca de mí.",
"No sé hasta cuándo terminará mi edad. Todo lo que sé es que mi amor es para siempre solo para ti.",
"Realmente disfruté el tiempo que pasamos juntos hoy. También nos conocemos desde hace mucho tiempo. En este día soleado, quiero expresarte que te amo.",
"Siempre imaginé lo hermoso que sería si algún día pudiéramos construir un arca de una casa y vivir juntos hasta el final de la vida. Sin embargo, todo eso no habría sucedido si los dos no hubiéramos estado juntos hasta ahora. ¿Serás mi novia/o?",
"Me preparo mentalmente para hoy. Tienes que ser mi novia/o para tratar este amor incontrolable",
"Sé que no tenemos la misma edad, pero ¿puedo vivir contigo por el resto de mi vida?",
"Sé que hemos sido amigos durante mucho tiempo. ¿Pero no está mal si me gustas? Cualquiera que sea tu respuesta, acepto. Lo más importante es ser honesto desde el fondo de mi corazón.",
"No puedo empezar esto primero, pero te daré un código que me gustas. Si entiendes este código, estaremos juntos.",
"Soy demasiado estúpido o eres demasiado egoísta para hacer que me enamore de ti.",
"Cualquier cosa sobre ti, nunca he encontrado aburrimiento en ello. Porque estar a tu lado, el regalo más hermoso para mí. Sé mi novia/o, hey tú.",
"Con el permiso de Alá y la bendición de mamá papá, ¿quieres ser mi novia/o?",
"¿Y si nos convertimos en una banda de ladrones? Yo robé tu corazón y tú me robaste el mío.",
"Feliz es que tú y yo nos hemos convertido en nosotros.",
"Mañana, si no funciona, puedo registrarme para ser tu novia/o. Déjame tener trabajo para pensar siempre en ti.",
"Déjame hacerte feliz para siempre. Solo tienes que hacer una cosa: Enamórate de mí.",
"Que toda mi alegría sea tuya, toda tu tristeza sea mía. ¡Que el mundo entero sea tuyo, solo tú seas mía/o!",
"Que el pasado sea mi pasado, pero por el presente, ¿serás tú mi futuro?",
"¿Puedes darme una dirección a tu corazón? Parece que me he perdido en tus ojos.",
"No es el trono o el tesoro lo que busco, sino el retorno de mi amor lo que espero de ti. La respuesta es sí.",
"La forma en que puedes hacerme reír incluso en los días más oscuros me hace sentir más ligero que cualquier otra cosa. Quiero que seas mía/o",
"Mi amor por ti es incuestionable porque este amor es sincero desde el fondo de mi corazón.",
"Qué chico/a se atreve a lastimarte. Aquí te trataré, mientras quieras ser mi novia/o.",
"Oye, ¿qué estás haciendo? Sal de la casa y mira la luna esta noche. La luz es hermosa y encantadora, pero sería aún más hermosa si yo estuviera a tu lado. ¿Qué tal si estamos juntos?"
]
