function yell(msg) {
try{
console.log (msg.toUpperCase())
}
catch (e) {
console.log (e)
console.log ("please pass a string ")
}
}