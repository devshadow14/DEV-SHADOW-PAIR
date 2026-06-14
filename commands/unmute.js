export default async function unmute(m, dvmsy) {
    if (!m.isGroup) return;

    await dvmsy.groupSettingUpdate(m.key.remoteJid, "not_announcement");

    await dvmsy.sendMessage(m.key.remoteJid, {
        text: "🔊 Groupe unmute"
    });
}