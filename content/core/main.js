(() => {
    class Main {
        constructor(config, services, capabilities){
            this.config = config
            this.services = services
            this.capabilities = capabilities
        }

        run () {
            console.log('start main loop')
            const modules = this.services.modules   
            for (let i=0; i < modules.length; i++){
                const typeName = modules[i]
                const module = this.services.getInstance(typeName)

                // TODO: check if module is enabled in the configuration

                if (module.capabilities.indexOf(this.capabilities.onLoad) >= 0){
                    module.onLoad()
                }
            }
        }
    }
    window.BCSF.register('main', Main, ['config', 'services', 'capabilities'])
    
})()


// if (window.BCSF === undefined || !window.BCSF.Initialized) {

//     const wait = async (msTime) => new Promise(r => setTimeout(r, msTime)) 

//     const getDateString = () => {
//         const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', minute: '2-digit', second: '2-digit' }
//         const dateStr = `${(new Date()).toLocaleString('nl-NL', options)}`
//         return dateStr
//     }

//     const mainLoop = async () => {
//         if (window.CurrentScreen === undefined)
//             return

//         window.BCSF = {
//             Initialized: true,
//             registeredListeners: {}
//         }
//         console.log('framework starting V1.0.0.0')

//         await wait(1000)

//         const modules = [
//             chatLogger,
//             actionLogger            
//         ]

//         /*
//         const genericHandler = (data, event) => {
//             console.log(event)
//             console.log(data)
//         }

//         registerListener('AccountUpdate', genericHandler)
//         registerListener('ServerInfo', genericHandler)
//         registerListener('AccountQuery', genericHandler)
//         registerListener('AccountQueryResult', genericHandler)
//         registerListener('ChatRoomCharacterUpdate', genericHandler)
//         registerListener('ChatRoomSyncSingle', genericHandler)
//         */

//         registerAllListener((event, props) => {
//             const dateStr = getDateString()
//             console.log(`${dateStr} on any message: ${event} %O`, props)
//         })

//         registerListener('ChatRoomMessage', data => {
//             const dateStr = getDateString()
//             let isHandled = false
//             for (let i = 0; i < modules.length ; i++) {
//                 const module = modules[i]
//                 if (module && module.onMessage){
//                     if (module.onMessage(data, dateStr)){
//                         isHandled = true
//                     }
//                 }
//             }
//             if (!isHandled){
//                 console.log(`${dateStr} - OnChatRoomMessage`)
//                 console.log(data)
//             }
//         })

//         // plugin BCX
//         if (window.BCX_Loaded === undefined) { 
//             let n = document.createElement("script")
//             n.setAttribute("language", "JavaScript")
//             n.setAttribute("crossorigin", "anonymous")
//             n.setAttribute("src", "https://jomshir98.github.io/bondage-club-extended/bcx.js?_="+Date.now())
//             n.onload = () => n.remove()
//             document.head.appendChild(n) 
//         }

//         let lastContext = ''

//         while (true) {
//             isOnLoginScreen = (window.CurrentScreen === screens[0].id)
//             const context = isOnLoginScreen ? 'OnLoginScreen' : 'InGame'
//             if (context !== lastContext) {
//                 lastContext = context
//                 console.log(context)
//             }
//             await wait(2000)
//         }
//     }
//     mainLoop()

// }

