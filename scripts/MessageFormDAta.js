import * as mc from '@minecraft/server'
import * as ui from '@minecraft/server-ui'
// UnHandle Scripting Watchdog FIX
mc.system.events.beforeWatchdogTerminate.subscribe(event => {
    event.cancel = true
})

let fm = new ui.MessageFormData()
.title("Bunni")
.body("2+2=?")//Simple "New update about server"
.button1("2")
.button2("4")
mc.world.events.itemUse.subscribe(event => {
    if (event.item.typeId == "minecraft:apple") fm.show(event.source).then((res)=>{
    if (res.selection == 0)mc.world.sendMessage("oh wait! 4 letters is Chinese"); else if (res.selection) mc.world.sendMessage("nub")
    })
})