// Fake Tester Function

// This function just simulates an async operation like an API call.
export default function(seconds, cb) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hoo ray!")
            cb("hoo ray!")
        }, seconds * 1000)
    })
}