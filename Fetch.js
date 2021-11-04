const newtonSimplify = 'https://newton.vercel.app/api/v2/simplify/';

//Input as a prompt, because this was the easiest way to do it
const input = prompt("Hello! Please enter formulas that you want to simplify:");
simplifyer(input);

/*
    Example input: x^2 - x*x;10x - 3x
*/

/**
 * 
 * Function for an asyncruonus fetch, along with printing the output
 * 
 * @param {*} url - The url for newtonAPI simplification
 * @param {*} e - The expression that was sent to this fetch
 */
async function fetchSimple(url, e) {
    await fetch(url + e)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("Formula '" + e + "' can be simplified as: " + data.result + ". According to newtonAPI");
        })
        .catch((err) => {
            console.log("'Error has occured: " + err + "'");
        })
}

/**
 * Splits the input string into an array and sends a fetch for each of the elements in it
 * 
 * @param {*} expression - input string with multiple 
 */
function simplifyer(expression) {

    if (expression.length != 0) {
        var array = expression.split(";");

        if (array.size == 0) {
            console.log("Not enough formulas was inputted");
        } else {

            array.forEach(e => {
                fetchSimple(newtonSimplify, e);
            });

        }
    } else {
        console.log("You must input something...");
    }
}
