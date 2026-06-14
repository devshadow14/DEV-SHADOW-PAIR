export default async function ownerinfo(m, dvmsy) {
    await dvmsy.sendMessage(m.key.remoteJid, {
        text: `👑 Owner : ${global.config.OWNERS[0]}`
    });
}