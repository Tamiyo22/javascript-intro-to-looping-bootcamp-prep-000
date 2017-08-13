
// for loop

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops`);
    }
  }
  return(array)
}


//whileloop

function whileLoop(num) {
  while (num > 0){
    console.log(--num);
  }
  return 'done';
}


//maybeTrue
function maybeTrue() {
  return Math.random() >= 0.5;
}

//dowhileloop
function doWhileLoop(array){
  do {
    array=array.slice(1)
    console.log(array)
  } while (array.length > 0 && maybeTrue())
  return(array)
}
