/*import { googleImage } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, isOwner }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup && !isOwner) return conn.reply(m.chat, `Comandos +18 deshabilitados`, m)
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
let name = await conn.getName(m.sender)
const iOV = `🔞PEDIDO POR: ${name}🤨`
if (/^(pax)$/i.test(m.text) ) {  
let url = pax[Math.floor(Math.random() * pax.length)]
conn.sendFile(m.chat, url, null, iOV, null, null, {viewOnce: true}, m)
}
if (/^(pax2)$/i.test(m.text) ) {  
const palabras = ['porn hard sex anal', 'porno cogiendome a la rubia', 'porno chupando verga', 'porno argentina puta chupando pija', 'porno xxx', 'porno cogiendo con la rubia', 'porno trio con la rubia', 'porno cogiendo con mi hermanastra', 'porno sexo anal', 'porno argentina puta']
const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
const res = await googleImage(palabraAleatoria + " imagesize:1500x1000");
let images = res.slice(0, 10) // Tomar los primeros 10 resultados
let randomIndex = Math.floor(Math.random() * images.length)
let image = images[randomIndex]
let link = image
conn.sendFile(m.chat, link, null, iOV, null, null, { mentions: [aa], viewOnce: true}, m)
}
}
handler.customPrefix = /^(pax|pax2)$/i
handler.command = new RegExp
handler.group = true
handler.botAdmin = true
export default handler

global.pax = [
"https://drive.google.com/uc?id=1mgc1MjENOGmq176NKOWSlWSBhfOpcU7q&export=download&authuser=0",
"https://drive.google.com/uc?id=1kChZ3i3Vptz9ZqNVUkEiRzqunAI3o7Fd&export=download&authuser=0",
"https://telegra.ph/file/7a205b623fb254dc96e3f.mp4",
"https://telegra.ph/file/02bd0c35436b05060a362.mp4",
"https://telegra.ph/file/098342418cb8973649b09.mp4",
"https://telegra.ph/file/18e6cf178ca6d7511aa14.mp4",
"https://telegra.ph/file/6daeb65c944beb682fc47.mp4",
"https://telegra.ph/file/6a2a19a8bb97bfde1ef37.mp4",
"https://telegra.ph/file/43010024858b04a90c8e4.mp4",
"https://telegra.ph/file/67b1abcef706679e31cb0.mp4",
"https://telegra.ph/file/2006e625838990b47848b.mp4",
"https://telegra.ph/file/1c5d2c26c75f4277dc1fb.mp4",
"https://telegra.ph/file/b11f929a58a7ee718c8b5.mp4",
"https://telegra.ph/file/6f3546b381c019a4c3b72.mp4",
"https://telegra.ph/file/b3ae3d19f19c06aeb9c20.mp4",
"https://telegra.ph/file/c4c29dfb488823c8e5a6c.mp4",
"https://telegra.ph/file/f7ad03fccd74020e1acc2.mp4",
"https://telegra.ph/file/a99eed6ee7ee3ad933b01.mp4",
"https://drive.google.com/uc?id=1Q4TQT7exLHFynkdzmyEE9TD4mCSqfqbx&export=download&authuser=0",
"https://drive.google.com/uc?id=1pXH056T08DAmaSgrlqIKnA_eRxL_kzTA&export=download&authuser=0",
"https://drive.google.com/uc?id=1nbx1qXDFvJ2FjjvVABxVk7V5BeICxOL_&export=download&authuser=0",
"https://drive.google.com/uc?id=1Pv3TZnYW53z4LMJ58i7QpDSZOgQ1rXqA&export=download&authuser=0",
"https://www.xpaja.net/views/albums/2024/05/connie-perignon/6.jpg",
"https://telegra.ph/file/7ae7a954cd311da6fcb51.jpg",
"https://telegra.ph/file/a5da1c65ba06b84f51d05.jpg",
"https://telegra.ph/file/930e8f6552e541c5e0662.jpg",
"https://telegra.ph/file/2c36f9bf46b81bf310717.jpg",
"https://telegra.ph/file/74c57a1e986e5527f6934.jpg",
"https://telegra.ph/file/8756ee5ca88a1a01df186.jpg",
"https://telegra.ph/file/6ba04fb3da7ec8baae637.jpg",
"https://telegra.ph/file/b19c5fad7a57e69eee05e.jpg",
"https://cdni.pornpics.com/1280/7/715/15995080/15995080_115_7d66.jpg",
"https://cdni.pornpics.com/1280/7/710/41735608/41735608_036_15f4.jpg",
"https://cdni.pornpics.com/1280/7/577/63819989/63819989_021_78e4.jpg",
"https://cdni.pornpics.com/1280/7/577/63819989/63819989_016_6a3e.jpg",
"https://cdni.pornpics.com/1280/7/577/63819989/63819989_051_ca11.jpg",
"https://cdni.pornpics.com/1280/7/368/39737696/39737696_117_6146.jpg",
"https://cdni.pornpics.com/1280/7/368/39737696/39737696_136_25da.jpg",
"https://cdni.pornpics.com/1280/7/314/10477989/10477989_081_47f7.jpg",
"https://cdni.pornpics.com/1280/7/404/20392471/20392471_086_18bc.jpg",
"https://cdni.pornpics.com/1280/7/404/20392471/20392471_100_0457.jpg",
"https://cdni.pornpics.com/1280/7/404/20392471/20392471_110_e913.jpg",
"https://cdni.pornpics.com/1280/1/376/46704884/46704884_013_0090.jpg",
"https://cdni.pornpics.com/1280/1/86/38594330/38594330_014_630b.jpg",
"https://cdni.pornpics.com/1280/1/139/62077135/62077135_004_82c0.jpg",
"https://cdni.pornpics.com/1280/1/139/62077135/62077135_006_dfe5.jpg", 
"https://cdni.pornpics.com/1280/1/139/62077135/62077135_009_4134.jpg", 
"https://cdni.pornpics.com/1280/7/402/26215721/26215721_203_88ee.jpg",
"https://cdni.pornpics.com/1280/7/492/24542302/24542302_079_e89f.jpg",
"https://cdni.pornpics.com/1280/7/524/88451536/88451536_137_cc21.jpg",
"https://cdni.pornpics.com/1280/7/346/13823074/13823074_353_95f9.jpg", 
"https://cdni.pornpics.com/1280/7/346/13823074/13823074_263_0864.jpg", 
"https://cdni.pornpics.com/1280/7/547/95344606/95344606_149_7590.jpg",
"https://cdni.pornpics.com/1280/7/573/72821516/72821516_037_b7a7.jpg", 
"https://cdni.pornpics.com/1280/7/573/72821516/72821516_032_ef71.jpg",
"https://cdni.pornpics.com/1280/5/96/15925240/15925240_006_11a8.jpg", 
"https://cdni.pornpics.com/1280/5/96/15925240/15925240_007_f155.jpg",
"https://cdni.pornpics.com/1280/5/96/15925240/15925240_015_4605.jpg", 
"https://cdni.pornpics.com/1280/5/96/15925240/15925240_014_5522.jpg",
"https://cdni.pornpics.com/1280/5/96/15925240/15925240_016_a814.jpg", 
"https://cdni.pornpics.com/1280/5/96/15925240/15925240_012_7c03.jpg",
"https://cdni.pornpics.com/1280/5/96/15925240/15925240_010_9b4e.jpg", 
"https://cdni.pornpics.com/1280/7/710/41735608/41735608_036_15f4.jpg",
"https://cdni.pornpics.com/1280/7/714/31003533/31003533_063_2023.jpg", 
"https://cdni.pornpics.com/1280/7/714/31003533/31003533_104_b93b.jpg",
"https://cdni.pornpics.com/1280/7/35/17164100/17164100_240_2554.jpg",
"https://cdni.pornpics.com/1280/7/35/17164100/17164100_347_92d2.jpg",
"https://cdni.pornpics.com/1280/7/35/17164100/17164100_309_6d41.jpg",
"https://cdni.pornpics.com/1280/7/35/17164100/17164100_370_223a.jpg",
"https://cdni.pornpics.com/1280/7/35/17164100/17164100_331_5675.jpg",
"https://cdni.pornpics.com/1280/7/529/86523847/86523847_032_2883.jpg",
"https://cdni.pornpics.com/1280/7/529/86523847/86523847_081_6fca.jpg",
"https://cdni.pornpics.com/1280/7/529/86523847/86523847_065_c28a.jpg",
"https://cdni.pornpics.com/1280/7/623/88182354/88182354_037_0b52.jpg",
"https://cdni.pornpics.com/1280/7/623/88182354/88182354_048_afb0.jpg",
"https://cdni.pornpics.com/1280/7/623/88182354/88182354_058_c3be.jpg",
"https://cdni.pornpics.com/1280/7/623/88182354/88182354_106_51e8.jpg",
"https://cdni.pornpics.com/1280/7/623/88182354/88182354_082_08cc.jpg",
"https://cdni.pornpics.com/1280/7/623/88182354/88182354_156_8bc0.jpg",
"https://cdni.pornpics.com/1280/7/623/88182354/88182354_180_db81.jpg",
"https://cdni.pornpics.com/1280/7/623/88182354/88182354_164_aeb4.jpg",
"https://cdni.pornpics.com/1280/7/623/88182354/88182354_181_4ad0.jpg",
"https://cdni.pornpics.com/1280/7/573/32780805/32780805_064_45a5.jpg",
"https://cdni.pornpics.com/1280/7/113/35161851/35161851_012_f925.jpg",
"https://cdni.pornpics.com/1280/7/571/90723882/90723882_005_20b7.jpg",
"https://cdni.pornpics.com/1280/5/155/22983552/22983552_004_e75f.jpg",
"https://cdni.pornpics.com/1280/7/370/38640102/38640102_086_376b.jpg",
"https://cdni.pornpics.com/1280/7/190/71929474/71929474_030_814d.jpg",
"https://cdni.pornpics.com/1280/7/190/71929474/71929474_182_cd82.jpg",
"https://cdni.pornpics.com/1280/7/190/71929474/71929474_143_ddb3.jpg",
"https://www.xpaja.net/views/albums/2024/04/ex-novia-la-culie-como-quise/1.jpg",
"https://www.xpaja.net/views/albums/2024/05/preciosa-chica-tetona-muy-linda/7.jpg",
"https://www.xpaja.net/views/albums/2024/05/whatsapp-cubana/2.jpg",
"https://www.xpaja.net/views/albums/2024/05/ricos-y-enormes-totos-para-mamar/11.jpg",
"https://www.xpaja.net/views/albums/2024/05/ricos-y-enormes-totos-para-mamar/8.jpg",
"https://peladas69.com/wp-content/uploads/2022/12/1666563868648.jpg",
"https://peladas69.com/wp-content/uploads/2023/09/IMG-20171023-WA0000-1.jpg",
"https://peladas69.com/wp-content/uploads/2023/09/IMG-20171014-WA0001.jpg",
"https://telegra.ph/file/e3bb0cfa608635ef709f7.jpg",
"https://telegra.ph/file/a8d03b9b185bca9e110b5.jpg",
"https://telegra.ph/file/fca8f4ba870359b5f9ccd.jpg",
]*/