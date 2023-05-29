import * as mc from '@minecraft/server'
import * as ui from '@minecraft/server-ui'
// UnHandle Scripting Watchdog FIX
mc.system.events.beforeWatchdogTerminate.subscribe(event => {
    event.cancel = true
})
let fm = new ui.ActionFormData()
.title("TITLE")
.body("BODY OF FORM")
.button("free diamond")//0
.button("2")//1
.button("button 3")//2

mc.world.events.itemUse.subscribe(event => {
    fm.show(event.source).then(res => {
        switch (res.selection){
            case 0:
                event.source.runCommandAsync('give @s diamond')
                break
            case 1:
                event.source.applyKnockback(0,0,1,1)
                break
            case 2:
                break
        }
    })
})