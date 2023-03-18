function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(2))
    } catch (msg) {
        console.log(msg)
        console.log("please pass a string ")
    }
}