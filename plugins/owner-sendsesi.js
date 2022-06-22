let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Proses Getting File session.json')
    let sesi = await fs.readFileSync('./anggan.data.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'anggan.data.json' }, { quoted: m })
}
handler.help = ['sendsesi']
handler.tags = ['owner']
handler.command = /^send(session|sesi)$/i

handler.owner = true

module.exports = handler
