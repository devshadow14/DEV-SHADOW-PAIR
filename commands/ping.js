export default async function ping(m, dvmsy) {
    const message = `🏓 *Pong!*

👤 *Utilisateur:* ${m.pushName}
📱 *Numéro:* ${m.sender.split('@')[0]}
👑 *Owner:* ${m.isOwner ? '✅' : '❌'}
👥 *Groupe:* ${m.isGroup ? '✅' : '❌'}
`;

    await dvmsy.sendMessage(
        m.key.remoteJid,
        { text: message },
        { quoted: m }
    );
}