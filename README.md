# Oblig 3
by Sondre Lindaas Gjesdal

## Task 1

Each row of the matrix is added to its own thread so we end up with a number of threads equalling rows in the matrix. 

## Thread

We use threads to concurrently run operations on reach thread.

## `waitForThreads()`

Waits for each thread to be finished with its task and waits for it to die.

## `RowMultiplierTask()`

This method extends Runnable and therefore uses Java Concurrency. It also needs a run so it can start doing its task

## Task 3

### JavaScript Promises

In JavaScript, the promise datatype has three states; pending, fulfilled and rejected. The datatype promises a return that may be pending. So if we use it like it's used in the `fetchSimple(url, e)`, it will wait for a response of a result value, or an error object. If the promise that is returned is of type resolve or fulfilled it will execute the code in the `.then()` method. For handling errors we have a `.catch()` method.

### `async` and `await`

The keyword **`async`** means that the function returns a promise. In our case of the method `fetchSimple`, the async keyword is used as a workaround to await the `fetch`.

**`await`** keyword makes js wait for a promise to settle. In our case this is a double safety for `.then()` as that waits for the promise to be resolved.

### General walkthrough of the `Fetch.js`

When opening index.html we get a prompt asking for expressions. This expression is sent to `simplifyer()` where it is split into Strings and put in an array. Each element in that array is sent so the `fetchSimple()` method. The `fetchSimple()` fetches the API respoonse for the URL with the expression and returns the correct simplified expression. I've experienced some issues using addition from the API's side using some examples from Newton API's own examples.