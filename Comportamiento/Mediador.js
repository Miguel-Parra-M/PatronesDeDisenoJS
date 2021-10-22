const Emitter = (() => {
    const topics = {}
    const hOP = topics.hasOwnProperty

    return {
        on: (topic, listener) => {
            if (!hOP.call(topic, topic)) topics[topic] = []
            topics[topic].push(listener)
        },
        emit: (topic, info) => {
            if (!hOP.call(topic, topic)) return
            topics[topic].forEach(item =>
                item(info != undefined ? info : {})
            );
            
        }
    }
})()

Emitter.on("lalala", x => console.log(x))
Emitter.emit("lala", { lala: "lolol" })
