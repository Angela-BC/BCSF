if (window.BCSF === undefined || !window.BCSF.Initialized) {

    const wait = async (msTime) => new Promise(r => setTimeout(r, msTime)) 

    const mainLoop = async () => {
        if (window.CurrentScreen === undefined)
            return

        window.BCSF = {
            Initialized: true,
            registeredListeners: {}
        }
        console.log('framework starting')

        await wait(1000)

        const modules = [
            chatLogger,
            actionLogger            
        ]

        registerListener('ChatRoomMessage', data => {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', minute: '2-digit', second: '2-digit' }
            const dateStr = `${(new Date()).toLocaleString('nl-NL', options)}`
            
            let isHandled = false
            for (let i = 0; i < modules.length ; i++) {
                const module = modules[i]
                if (module && module.onMessage){
                    if (module.onMessage(data, dateStr)){
                        isHandled = true
                    }
                }
            }
            if (!isHandled){
                console.log(`${dateStr} - OnChatRoomMessage`)
                console.log(data)
            }
        })

        let lastContext = ''

        while (true) {
            isOnLoginScreen = (window.CurrentScreen === screens[0].id)
            const context = isOnLoginScreen ? 'OnLoginScreen' : 'InGame'
            if (context !== lastContext) {
                lastContext = context
                console.log(context)
            }
            await wait(2000)
        }
    }
    mainLoop()

}

