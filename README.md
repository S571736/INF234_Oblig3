# Task 3

## JavaScript Promises

In JavaScript, the promise datatype has three states; pending, fulfilled and rejected. The datatype promises a return that may be pending. So if we use it like it's used in the `fetchSimple(url, e)`, it will wait for a response of a result value, or an error object. If the promise that is returned is of type resolve or fulfilled it will execute the code in the `.then()` method. For handling errors we have a `.catch()` method.

## `async` and `await`

The keyword **`async`** means that the function returns a promise. In our case of the method `fetchSimple`, the async keyword is used as a workaround to await the `fetch`.

**`await`** keyword makes js wait for a promise to settle. In our case this is a double safety for `.then()` as that waits for the promise to be resolved.

## General walkthrough of the `Fetch.js`

