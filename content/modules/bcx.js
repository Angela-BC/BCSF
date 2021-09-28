(()=>{
    class bcx {
        constructor(capabilities) {
            this.capabilities = [capabilities.onLoad]        
        }

        onLoad() {
            console.log('on load')
            if (window.BCX_Loaded === undefined) { 
                let n = document.createElement("script")
                n.setAttribute("language", "JavaScript")
                n.setAttribute("crossorigin", "anonymous")
                n.setAttribute("src", "https://jomshir98.github.io/bondage-club-extended/bcx.js?_="+Date.now())
                n.onload = () => n.remove()
                document.head.appendChild(n) 
            }
}
    }

    window.BCSF.register('module', bcx, ['capabilities'], window.BCSF.dependencyTypes.perContext)
})()