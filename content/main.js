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

        registerListener('ChatRoomMessage', data => {
            console.log('OnChatRoomMessage')
            console.log(data)
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

