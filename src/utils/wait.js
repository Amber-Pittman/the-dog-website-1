// Fake Tester Function
export default function(seconds, cb) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hoo ray!")
            cb("hoo ray!")
        }, seconds * 1000)
    })
}