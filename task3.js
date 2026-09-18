console.log("1. Synchronous code before scheduling callbacks.");

process.nextTick(() => {
    console.log("3. process.nextTick() executed.");
});

setTimeout(() => {
    console.log("4. setTimeout() executed.");
}, 0);

setImmediate(() => {
    console.log("5. setImmediate() executed.");
});

console.log("2. Synchronous code after scheduling callbacks.");