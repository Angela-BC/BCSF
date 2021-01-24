function registerListener(event, handler) {
    if (window.BCSF.registeredListeners[event] !== undefined) {
        throw `Event with name ${event} already registered`
    }
    window.BCSF.registeredListeners[event] = true
    ServerSocket.on(event, handler)
    console.log(`Register handler for event ${event}`)
}