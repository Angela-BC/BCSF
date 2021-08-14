// JavaScript source code
console.log('startup..')

window.addEventListener("load", () => {

    const scriptFiles = [
        "content/constants/screens.js",
        "content/server.js",
        "content/main.js",
        "content/modules/chatLogger.js",
        "content/modules/actionLogger.js"
    ]

    scriptFiles.forEach(scriptFileName => {
        let script = document.createElement("script");
        script.src = chrome.runtime.getURL(scriptFileName);
        return document.head.appendChild(script);
    })

});
