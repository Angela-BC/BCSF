// JavaScript source code
console.log('startup..')

window.addEventListener('load', () => {

    const scriptFiles = [
        'content/constants/screens.js',
        'content/modules/chatLogger.js',
        'content/modules/actionLogger.js',
        'content/system/storage.js',
        'content/system/config.js',
        'content/system/server.js',

        // main.js as last
        'content/system/main.js'
    ]

    const styleFiles = [
        'content/styles/bcsf.css'
    ]

    styleFiles.forEach(styleFileName => {
        let link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = chrome.runtime.getURL(styleFileName)
        return document.head.appendChild(link)
    })

    scriptFiles.forEach(scriptFileName => {
        let script = document.createElement('script')
        script.src = chrome.runtime.getURL(scriptFileName)
        return document.head.appendChild(script)
    })

});
