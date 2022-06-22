let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('Otewe Kirim Sc Bos')
    let sesi = await fs.readFileSync('./anggan')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'anggan.zip' }, { quoted: m })
}
handler.help = ['sendsc']
handler.tags = ['owner']
handler.command = /^send(sc|script)$/i

handler.owner = true

module.exports = handler
