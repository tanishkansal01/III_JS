function greet(username, callback) {
    console.log("Welcome")
    setTimeout(() => {
        callback(username);
    }, 1000)
}
greet("Tanish", () => {
console.log(username);
})










