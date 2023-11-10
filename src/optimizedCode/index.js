const myObject = {
  myArray: new Array(100_000),
}

function badPerformance() {
  console.time('badPerformance')
  for (let i = 0; i < myObject.myArray.length; i++) {
    myObject.myArray[i] = 'myString'
  }
  console.timeEnd('badPerformance')
}

/* cache the length of the array so that the length property
 is not accessed on each iteration of the loop
*/
function goodPerformance() {
  console.time('goodPerformance')
  let myArray = myObject.myArray
  for (let i = 0, length = myArray.length; i < length; i++) {
    myArray[i] = 'myString'
  }
  console.timeEnd('goodPerformance')
}

badPerformance()
goodPerformance()