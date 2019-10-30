// Fake Tester Function
export default function(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hoo ray!")
        }, seconds * 1000)
    })
}