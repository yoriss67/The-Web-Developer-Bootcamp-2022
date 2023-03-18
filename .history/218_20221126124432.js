function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(2))
    } catch () {
        console.log(e)
        console.log("please pass a string ")
    }
}