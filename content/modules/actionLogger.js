const actionLogger = {
    onMessage: (data, dateStr) => {
        if (data.Type !== 'Action') {
            return false
        }
        console.log(`${dateStr} ${data.Sender} ${data.Content}`)
        if (data.Dictionary){
            let line = ''
            for (let i=0; i<data.Dictionary.length; i++){
                if (i > 0){
                    line = line + ', '
                }
                const row = data.Dictionary[i]
                Object.keys(row).forEach(key => line = `${line} ${row[key]}`)
            }
            console.log(line)
        }
        return true
    }
}