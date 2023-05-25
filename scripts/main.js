import * as mc from '@minecraft/server'
// UnHandle Scripting Watchdog FIX
mc.system.events.beforeWatchdogTerminate.subscribe(event =>{
    event.cancel = true
})
//Code


mc.world.events.blockBreak.subscribe(event =>{

    event.player.applyKnockback(1,1,1,1)
    event.player.sendMessage("block broken")
})

mc.world.events.beforeChat.subscribe(event =>{
    event.cancel = true
    event.sender.sendMessage(`${event.sender.nameTag} sent : ${event.message}`)
})