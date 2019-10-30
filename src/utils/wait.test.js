import wait from "./wait";

// PREWRITTEN MOCK FROM JEST
// a useful pre-written mock from jest to mock "setTimeout"
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
	// define the function, but don't wait for the promise to resolve yet
	const waitFn = wait(3, spy)

	// fast forward in time so we don't actually have to wait 3 seconds
	jest.runAllTimers()
	
	// now that we went into the future, we can wait for the promise to resolve
	const result = await waitFn
	
	expect(result).toBe("hoo ray!")

	// we can tell what our spy function has been up to,
	// to make sure it was called by "wait", etc.
	expect(spy).toHaveBeenCalledWith("hoo ray!")
	expect(spy).toHaveBeenCalledTimes(1)
})