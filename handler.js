// handler.js
import kick from './commands/kick.js';
import kickall from './commands/kickall.js';
import mute from './commands/mute.js';
import unmute from './commands/unmute.js';
import add from './commands/add.js';
import promote from './commands/promote.js';
import demote from './commands/demote.js';
import tagall from './commands/tagall.js';
import link from './commands/link.js';
import groupinfo from './commands/groupinfo.js';
import config from './config.js';
import ping from './commands/ping.js';
import menu from './commands/menu.js';
import info from './commands/info.js';
import owner from './commands/owner.js';
import group from './commands/group.js';
import { getMessageInfo, getGroupInfo, getUserPermissions } from './Utils/messageUtils.js';
import alive from './commands/alive.js';
import dice from './commands/dice.js';
import coinflip from './commands/coinflip.js';
import repo from './commands/repo.js';
import ownerinfo from './commands/ownerinfo.js';
// Rendre config accessible globalement
global.config = config;

export default async function handlerCommand(dvmsy, m, msg, chatUpdate, options) {
    try {
        if (!m) {
            console.error('Message m is undefined');
            return;
        }

        // Récupérer les infos du message
        const messageInfo = getMessageInfo(m, dvmsy);
        const { body, sender, pushName } = messageInfo;
        
        // Vérification préfixe
        if (!body || !body.startsWith(config.PREFIX)) return;
        
        const args = body.slice(config.PREFIX.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        
        // Récupérer les infos supplémentaires
        const groupInfo = await getGroupInfo(m, dvmsy);
        const userPerms = getUserPermissions(sender, config.OWNERS);
        
        // Combiner toutes les infos
        const fullMessage = {
            ...m,
            ...messageInfo,
            ...groupInfo,
            ...userPerms,
            command,
            args,
            pushName: pushName || sender.split('@')[0]
        };
        
        // Console log pour debug
        console.log(`📩 Commande: ${command} de ${fullMessage.pushName}`);
        
        // Handler des commandes
        switch(command) {
case 'kick':
    await kick(fullMessage, dvmsy);
    break;

case 'kickall':
    await kickall(fullMessage, dvmsy);
    break;

case 'mute':
    await mute(fullMessage, dvmsy);
    break;

case 'unmute':
    await unmute(fullMessage, dvmsy);
    break;

case 'add':
    await add(fullMessage, dvmsy, args);
    break;

case 'promote':
    await promote(fullMessage, dvmsy);
    break;

case 'demote':
    await demote(fullMessage, dvmsy);
    break;

case 'tagall':
    await tagall(fullMessage, dvmsy);
    break;

case 'link':
    await link(fullMessage, dvmsy);
    break;

case 'groupinfo':
    await groupinfo(fullMessage, dvmsy);
    break;
case 'alive':
    await alive(fullMessage, dvmsy);
    break;

case 'dice':
    await dice(fullMessage, dvmsy);
    break;

case 'coinflip':
    await coinflip(fullMessage, dvmsy);
    break;

case 'repo':
    await repo(fullMessage, dvmsy);
    break;

case 'ownerinfo':
    await ownerinfo(fullMessage, dvmsy);
    break;
            // Commandes générales
            case 'ping':
                await ping(fullMessage, dvmsy);
                break;
                
            case 'menu':
            case 'help':
            case 'aide':
                await menu(fullMessage, dvmsy);
                break;
                
            case 'info':
            case 'infobot':
                await info(fullMessage, dvmsy);
                break;
                
            case 'runtime':
            case 'uptime':
                const uptime = process.uptime();
                const hours = Math.floor(uptime / 3600);
                const minutes = Math.floor((uptime % 3600) / 60);
                const seconds = Math.floor(uptime % 60);
                await dvmsy.sendMessage(m.key.remoteJid, {
                    text: `⏰ *Runtime:* ${hours}h ${minutes}m ${seconds}s`
                });
                break;
                
            // Commandes owner
            case 'owner':
            case 'restart':
            case 'shutdown':
            case 'broadcast':
            case 'eval':
                await owner(fullMessage, dvmsy, command, args);
                break;
                
            // Commandes groupe
            case 'tagall':
            case 'hidetag':
            case 'link':
            case 'groupinfo':
                await group(fullMessage, dvmsy, command, args);
                break;
                
            default:
                console.log(`Commande inconnue: ${command}`);
        }
    } catch (error) {
        console.error('Erreur dans handlerCommand:', error);
    }
}