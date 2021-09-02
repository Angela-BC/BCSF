const chatLogger = {
    onMessage: (data, dateStr) => {
        if (data.Type !== 'Chat' && data.Type !== 'Emote') {
            return false
        }
        console.log(`${dateStr} %c${data.Sender} %c${data.Content}`, 'color: blue', data.Type === 'Emote' ? 'color: red' : 'color: blue')
        return true
    }
}