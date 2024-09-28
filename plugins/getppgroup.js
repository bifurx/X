let handler = async (m, { conn, args }) => {
let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => global.noprofileurl)
await conn.sendFile(m.chat, pp, 'Profile.jpg', null, m)
}
handler.command = ['getpp']
handler.group = true
handler.botAdmin = true
export default handler