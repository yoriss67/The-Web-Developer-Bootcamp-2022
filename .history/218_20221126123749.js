function yell(msg) {
try{
console.log (msg.toUpperCase().repeat())
}
catch (e) {
console.log (e)
console.log ("please pass a string ")
}
}