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
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', minute: '2-digit', second: '2-digit' }
            console.log(`${(new Date()).toLocaleString('nl-NL', options)} - OnChatRoomMessage`)
            console.log(data)
        })

        // TODO: make/use some kind of plugin framework

        // plugin BCX
        if (window.BCX_Loaded === undefined) { 
            let n = document.createElement("script")
            n.setAttribute("language", "JavaScript")
            n.setAttribute("crossorigin", "anonymous")
            n.setAttribute("src", "https://jomshir98.github.io/bondage-club-extended/bcx.js?_="+Date.now())
            n.onload = () => n.remove()
            document.head.appendChild(n) 
        }

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

