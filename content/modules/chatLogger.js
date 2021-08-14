const chatLogger = {
    onMessage: (data, dateStr) => {
        if (data.Type !== 'Chat') {
            return false
        }
        console.log(`${dateStr} ${data.Sender} ${data.Content}`)
        return true
    }
}