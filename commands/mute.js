export default async function mute(m, dvmsy) {
    if (!m.isGroup) return;

    await dvmsy.groupSettingUpdate(m.key.remoteJid, "announcement");

    await dvmsy.sendMessage(m.key.remoteJid, {
        text: "🔇 Groupe mute"
    });
}