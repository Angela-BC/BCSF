// function registerListener(event, handler) {
//     if (window.BCSF.registeredListeners[event] !== undefined) {
//         throw `Event with name ${event} already registered`
//     }
//     window.BCSF.registeredListeners[event] = true
//     ServerSocket.on(event, data => handler(data, event))
//     console.log(`Register handler for event ${event}`)
// }

// function registerAllListener(handler) {
//     const event= '*'
//     if (window.BCSF.registeredListeners[event] !== undefined) {
//         throw `Event with name ${event} already registered`
//     }
//     window.BCSF.registeredListeners[event] = true
//     ServerSocket.onAny((event, ...args)  => handler(event, { ...args}))
//     console.log(`Register handler for event ${event}`)
// }
