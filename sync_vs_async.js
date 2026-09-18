console.log("Sync start")
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log("Sync end")

console.log("Async start")
setTimeout(() => {
    console.log("setTimeout");

}, 1000)
console.log("Async end")


