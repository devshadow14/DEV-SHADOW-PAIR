export default async function kick(m, dvmsy) {
    if (!m.isGroup) return;

    const user = m.message.extendedTextMessage?.contextInfo?.participant;
    if (!user) return;

    await dvmsy.groupParticipantsUpdate(m.key.remoteJid, [user], "remove");

    await dvmsy.sendMessage(m.key.remoteJid, {
        text: "👢 Kick effectué"
    });
}