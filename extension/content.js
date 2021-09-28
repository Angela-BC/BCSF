(() => {
    console.log('BCSF v1.0.0 startup..')

    const loadScript = src => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.onload = resolve
            script.onerror = reject
            script.async = true
            script.src = chrome.runtime.getURL(src)
            document.head.append(script)
        })
    }    

    const loadStyle = src => {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link')
            link.rel = 'stylesheet'
            link.onload = resolve
            link.onerror = reject
            link.async = true
            link.href = chrome.runtime.getURL(src)
            document.head.append(link)
        })
    }    

    window.addEventListener('load', () => {
        loadScript('content/core/di.js').then((context) => {
            const scriptFiles = [
                'content/constants/capabilities.js',
                'content/modules/bcx.js',
                'content/modules/chatLogger.js',
                'content/core/config.js',
                'content/core/main.js',
            ]
    
            const styleFiles = [
                'content/styles/bcsf.css'
            ]
    
            const promises = []
    
            styleFiles.forEach(f => promises.push(loadStyle(f)))        
            scriptFiles.forEach(f => promises.push(loadScript(f)))
    
            Promise.all(promises).then(() => {
                loadScript('content/core/start.js').then(() =>{
                    console.log('BCSF loaded')
                })
            })
    
        })
    });

})()
