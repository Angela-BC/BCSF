const actionLogger = {
    onMessage: (data, dateStr) => {
        if (data.Type !== 'Action' && data.Type !== 'Activity' /* && data.Type !== 'Hidden' */) {
            return false
        }
        console.log(`${dateStr} %c${data.Sender} %c${data.Content}`, 'color: blue', 'color: green')
        if (data.Dictionary){
            let line = ''
            for (let i=0; i<data.Dictionary.length; i++){
                if (line !== '') {
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