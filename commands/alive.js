export default async function alive(m, dvmsy) {
    await dvmsy.sendMessage(m.key.remoteJid, {
        text: "✅ Bot en ligne !"
    });
}