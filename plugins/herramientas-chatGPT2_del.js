let handler = async (m, { usedPrefix }) => {
try {
delete global.chatgpt.data.users[m.sender]  
m.reply(`*[❗] 𝙎𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝙊 𝘾𝙊𝙉 𝙀́𝙓𝙄𝙏𝙊 𝙀𝙇 𝙃𝙄𝙎𝙏𝙊𝙍𝙄𝘼𝙇 𝘿𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀𝙎 𝙀𝙉𝙏𝙍𝙀 𝙐𝙎𝙏𝙀𝘿 𝙔 𝘾𝙃𝘼𝙏𝙂𝙋𝙏*`)    
} catch (error1) {   
console.log(error1) 
}} 
handler.command = ['delchatgpt']
export default handler
