/*
Write a function called countdown that accepts a number as a parameter and 
every 1000 milliseconds decrements the value and console.logs it. 
Once the value is 0 it should log “DONE!” and stop.
*/


function countdownFunc(num) {
    let counter = num - 1
    const myVar = setInterval(() => {
        if (counter > 0) {
            console.log(counter)
            counter--
        } else {
            clearInterval(myVar)
            console.log("DONE!")
        }
    }, 1000)
}
countdownFunc(4)

// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds 
// and each time that a random number is picked, add 1 to a counter. 
// If the number is greater than .75, stop the timer and console.log the number of tries it took before we 
// found a number greater than .75.

function randomGame(){
    let tries = 0 // tries is stored
    const myVar = setInterval(()=> { // interval every 1 second
        let zeroToOne = Math.random() // random number between 0 and 1
        tries++
        console.log(`randomGame has started...finding a number greater than 0.75.. \n Attempt: ${tries} \n Number Generated: ${zeroToOne}`)
        if(zeroToOne > 0.75){
            console.log(`Found a number greater than 0.75: \n Number Generated: ${zeroToOne} \n Tries: ${tries}`)
            clearInterval(myVar) //clear interval
        }
    },1000)
}
randomGame()