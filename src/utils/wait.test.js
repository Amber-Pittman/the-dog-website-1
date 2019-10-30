import wait from "./wait";

// PREWRITTEN MOKE FROM JEST
jest.useFakeTimers();


//import { exportAllDeclaration } from "@babel/types";


// //  METHOD 1 FOR ASYNC TESTS
// test("wait for promise to resolve", (done) => {
//     wait(3).then(result => {
//         expect(result).toBe("hoo ray!")
//         done()
//     }).catch(err => {
//         done(err)
//     })
    
// })


// //  METHOD 2 FOR ASYNC TESTS
// // without using "done"
// // Jest is automatically adding .catch for us
// test("wait for promise to resolve", () => {
//     return wait(3).then(result => {
//         expect(result).toBe("hoo ray!")
//     })
    
// })


// METHOD 3 FOR ASYNC TESTS - JASON'S FAVE
// INDUSTRY STANDARD
// async returns a promise
test("wait for promise to resolve", async () => {
    const spy = jest.fn()
    const waitFn = wait(3, spy)

    // FAST FORWARD IN TIME
    jest.runAllTimers()
    const result = await waitFn

    expect(result).toBe("hoo ray!")
    expect(spy).toHaveBeenCalledWith("hoo ray!")
    expect(spy).toHaveBeenCalledTimes(1)
});