// this is where the brain lives!!

let appleCounter = 0; // First Variable!!
let pearCounter = 0; // Second Variable!!
let strawberryCounter = 0; // Third Variable!!
let potatoCounter = 0; // Fourth Variable!!
let tomatoCounter = 0; // Fifth Variable!!

function groserycounter(fruta) {
  if(fruta === 'apple') {
    appleCounter = appleCounter + 1;
    document.getElementById("apple").innerHTML =appleCounter;
  }
  else if(fruta === 'pear') { 
   pearCounter = pearCounter + 1;
    document.getElementById("pear").innerHTML = pearCounter;
  }
  else if(fruta === 'strawberry') {
    strawberryCounter = strawberryCounter + 1;
    document.getElementById("strawberry").innerHTML = strawberryCounter;
  }
  else if(fruta === 'potato') {
    potatoCounter = potatoCounter + 1;
    document.getElementById("potato").innerHTML = potatoCounter;
  }
  else {
    tomatoCounter = tomatoCounter + 1;
    document.getElementById("tomato").innerHTML = tomatoCounter;
  }
}

function substracGrosery(fruta) {
  if(fruta === 'apple' && appleCounter > 0) {
    appleCounter = appleCounter - 1;
    document.getElementById("apple").innerHTML = appleCounter;
  }
  else if(fruta === 'pear' && pearCounter > 0) {
    pearCounter = pearCounter - 1;
    document.getElementById("pear").innerHTML = pearCounter;
  }
  else if(fruta === 'strawberry' && strawberryCounter > 0) {
    strawberryCounter = strawberryCounter - 1;
    document.getElementById("strawberry").innerHTML = strawberryCounter;
  }
  else if(fruta === 'potato' && potatoCounter > 0) {
    potatoCounter = potatoCounter - 1;
    document.getElementById("potato").innerHTML = potatoCounter;
  }
  else if(fruta === 'tomato' && tomatoCounter > 0) {
    tomatoCounter = tomatoCounter - 1;
    document.getElementById("tomato").innerHTML = tomatoCounter;
  }
}