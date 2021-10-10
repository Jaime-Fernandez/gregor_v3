let count = 0;

let lha = 50;
let lhb = 50;

let locusA1 = 1;
let locusA2 = 1;
let locusA3 = 1;
let locusA4 = 1;
let locusA5 = 1;
let locusA6 = 1;
let locusA7 = 1;
let locusA8 = 1;
let locusA9 = 1;
let locusA10 = 1;

let locusB1 = 0;
let locusB2 = 0;
let locusB3 = 0;
let locusB4 = 0;
let locusB5 = 0;
let locusB6 = 0;
let locusB7 = 0;
let locusB8 = 0;
let locusB9 = 0;
let locusB10 = 0;

let locusC1 = 1;
let locusC2 = 1;
let locusC3 = 1;
let locusC4 = 1;
let locusC5 = 1;
let locusC6 = 1;
let locusC7 = 1;
let locusC8 = 1;
let locusC9 = 1;
let locusC10 = 1;

let locusD1 = 0;
let locusD2 = 0;
let locusD3 = 0;
let locusD4 = 0;
let locusD5 = 0;
let locusD6 = 0;
let locusD7 = 0;
let locusD8 = 0;
let locusD9 = 0;
let locusD10 = 0;



function simulateEvent(chances) {
    var sum = 0;
    chances.forEach(function(chance) {
        sum+=chance;
    });
    var rand = Math.random();
    var chance = 0;
    for(var i=0; i<chances.length; i++) {
        chance+=chances[i]/sum;
        if(rand<chance) {
            return i;
        }
    }
    // should never be reached unless sum of probabilities is less than 1
    // due to all being zero or some being negative probabilities
    return -1;
}

function runGregor() {

  var combinations = new Array();

  combinations[0] = 0;
  combinations[1] = 1;

  var likelihoods = [lha, lhb]

  count++;

  locusA1 = (combinations[simulateEvent(likelihoods)]);
  locusA2 = (combinations[simulateEvent(likelihoods)]);
  locusA3 = (combinations[simulateEvent(likelihoods)]);
  locusA4 = (combinations[simulateEvent(likelihoods)]);
  locusA5 = (combinations[simulateEvent(likelihoods)]);
  locusA6 = (combinations[simulateEvent(likelihoods)]);
  locusA7 = (combinations[simulateEvent(likelihoods)]);
  locusA8 = (combinations[simulateEvent(likelihoods)]);
  locusA9 = (combinations[simulateEvent(likelihoods)]);
  locusA10 = (combinations[simulateEvent(likelihoods)]);

  locusB1 = (combinations[simulateEvent(likelihoods)]);
  locusB2 = (combinations[simulateEvent(likelihoods)]);
  locusB3 = (combinations[simulateEvent(likelihoods)]);
  locusB4 = (combinations[simulateEvent(likelihoods)]);
  locusB5 = (combinations[simulateEvent(likelihoods)]);
  locusB6 = (combinations[simulateEvent(likelihoods)]);
  locusB7 = (combinations[simulateEvent(likelihoods)]);
  locusB8 = (combinations[simulateEvent(likelihoods)]);
  locusB9 = (combinations[simulateEvent(likelihoods)]);
  locusB10 = (combinations[simulateEvent(likelihoods)]);

  locusC1 = (combinations[simulateEvent(likelihoods)]);
  locusC2 = (combinations[simulateEvent(likelihoods)]);
  locusC3 = (combinations[simulateEvent(likelihoods)]);
  locusC4 = (combinations[simulateEvent(likelihoods)]);
  locusC5 = (combinations[simulateEvent(likelihoods)]);
  locusC6 = (combinations[simulateEvent(likelihoods)]);
  locusC7 = (combinations[simulateEvent(likelihoods)]);
  locusC8 = (combinations[simulateEvent(likelihoods)]);
  locusC9 = (combinations[simulateEvent(likelihoods)]);
  locusC10 = (combinations[simulateEvent(likelihoods)]);

  locusD1 = (combinations[simulateEvent(likelihoods)]);
  locusD2 = (combinations[simulateEvent(likelihoods)]);
  locusD3 = (combinations[simulateEvent(likelihoods)]);
  locusD4 = (combinations[simulateEvent(likelihoods)]);
  locusD5 = (combinations[simulateEvent(likelihoods)]);
  locusD6 = (combinations[simulateEvent(likelihoods)]);
  locusD7 = (combinations[simulateEvent(likelihoods)]);
  locusD8 = (combinations[simulateEvent(likelihoods)]);
  locusD9 = (combinations[simulateEvent(likelihoods)]);
  locusD10 = (combinations[simulateEvent(likelihoods)]);

  if ((locusA1 === 0)) {
    document.getElementById('locusA1').classList.add('yellow');
    document.getElementById('locusA1').classList.remove('blue');
  } else if ((locusA1 === 1)){
    document.getElementById('locusA1').classList.add('blue');
    document.getElementById('locusA1').classList.remove('yellow');
  }

  if ((locusA2 === 0)) {
    document.getElementById('locusA2').classList.add('yellow');
    document.getElementById('locusA2').classList.remove('blue');
  } else if ((locusA2 === 1)){
    document.getElementById('locusA2').classList.add('blue');
    document.getElementById('locusA2').classList.remove('yellow');
  }

  if ((locusA3 === 0)) {
    document.getElementById('locusA3').classList.add('yellow');
    document.getElementById('locusA3').classList.remove('blue');
  } else if ((locusA3 === 1)){
    document.getElementById('locusA3').classList.add('blue');
    document.getElementById('locusA3').classList.remove('yellow');
  }

  if ((locusA4 === 0)) {
    document.getElementById('locusA4').classList.add('yellow');
    document.getElementById('locusA4').classList.remove('blue');
  } else if ((locusA4 === 1)){
    document.getElementById('locusA4').classList.add('blue');
    document.getElementById('locusA4').classList.remove('yellow');
  }

  if ((locusA5 === 0)) {
    document.getElementById('locusA5').classList.add('yellow');
    document.getElementById('locusA5').classList.remove('blue');
  } else if ((locusA5 === 1)){
    document.getElementById('locusA5').classList.add('blue');
    document.getElementById('locusA5').classList.remove('yellow');
  }

  if ((locusA6 === 0)) {
    document.getElementById('locusA6').classList.add('yellow');
    document.getElementById('locusA6').classList.remove('blue');
  } else if ((locusA6 === 1)){
    document.getElementById('locusA6').classList.add('blue');
    document.getElementById('locusA6').classList.remove('yellow');
  }

  if ((locusA7 === 0)) {
    document.getElementById('locusA7').classList.add('yellow');
    document.getElementById('locusA7').classList.remove('blue');
  } else if ((locusA7 === 1)){
    document.getElementById('locusA7').classList.add('blue');
    document.getElementById('locusA7').classList.remove('yellow');
  }

  if ((locusA8 === 0)) {
    document.getElementById('locusA8').classList.add('yellow');
    document.getElementById('locusA8').classList.remove('blue');
  } else if ((locusA8 === 1)){
    document.getElementById('locusA8').classList.add('blue');
    document.getElementById('locusA8').classList.remove('yellow');
  }

  if ((locusA9 === 0)) {
    document.getElementById('locusA9').classList.add('yellow');
    document.getElementById('locusA9').classList.remove('blue');
  } else if ((locusA9 === 1)){
    document.getElementById('locusA9').classList.add('blue');
    document.getElementById('locusA9').classList.remove('yellow');
  }

  if ((locusA10 === 0)) {
    document.getElementById('locusA10').classList.add('yellow');
    document.getElementById('locusA10').classList.remove('blue');
  } else if ((locusA10 === 1)){
    document.getElementById('locusA10').classList.add('blue');
    document.getElementById('locusA10').classList.remove('yellow');
  }

  if ((locusB1 === 0)) {
    document.getElementById('locusB1').classList.add('yellow');
    document.getElementById('locusB1').classList.remove('blue');
  } else if ((locusB1 === 1)){
    document.getElementById('locusB1').classList.add('blue');
    document.getElementById('locusB1').classList.remove('yellow');
  }

  if ((locusB2 === 0)) {
    document.getElementById('locusB2').classList.add('yellow');
    document.getElementById('locusB2').classList.remove('blue');
  } else if ((locusB2 === 1)){
    document.getElementById('locusB2').classList.add('blue');
    document.getElementById('locusB2').classList.remove('yellow');
  }

  if ((locusB3 === 0)) {
    document.getElementById('locusB3').classList.add('yellow');
    document.getElementById('locusB3').classList.remove('blue');
  } else if ((locusB3 === 1)){
    document.getElementById('locusB3').classList.add('blue');
    document.getElementById('locusB3').classList.remove('yellow');
  }

  if ((locusB4 === 0)) {
    document.getElementById('locusB4').classList.add('yellow');
    document.getElementById('locusB4').classList.remove('blue');
  } else if ((locusB4 === 1)){
    document.getElementById('locusB4').classList.add('blue');
    document.getElementById('locusB4').classList.remove('yellow');
  }

  if ((locusB5 === 0)) {
    document.getElementById('locusB5').classList.add('yellow');
    document.getElementById('locusB5').classList.remove('blue');
  } else if ((locusB5 === 1)){
    document.getElementById('locusB5').classList.add('blue');
    document.getElementById('locusB5').classList.remove('yellow');
  }

  if ((locusB6 === 0)) {
    document.getElementById('locusB6').classList.add('yellow');
    document.getElementById('locusB6').classList.remove('blue');
  } else if ((locusB6 === 1)){
    document.getElementById('locusB6').classList.add('blue');
    document.getElementById('locusB6').classList.remove('yellow');
  }

  if ((locusB7 === 0)) {
    document.getElementById('locusB7').classList.add('yellow');
    document.getElementById('locusB7').classList.remove('blue');
  } else if ((locusB7 === 1)){
    document.getElementById('locusB7').classList.add('blue');
    document.getElementById('locusB7').classList.remove('yellow');
  }

  if ((locusB8 === 0)) {
    document.getElementById('locusB8').classList.add('yellow');
    document.getElementById('locusB8').classList.remove('blue');
  } else if ((locusB8 === 1)){
    document.getElementById('locusB8').classList.add('blue');
    document.getElementById('locusB8').classList.remove('yellow');
  }

  if ((locusB9 === 0)) {
    document.getElementById('locusB9').classList.add('yellow');
    document.getElementById('locusB9').classList.remove('blue');
  } else if ((locusB9 === 1)){
    document.getElementById('locusB9').classList.add('blue');
    document.getElementById('locusB9').classList.remove('yellow');
  }

  if ((locusB10 === 0)) {
    document.getElementById('locusB10').classList.add('yellow');
    document.getElementById('locusB10').classList.remove('blue');
  } else if ((locusB10 === 1)){
    document.getElementById('locusB10').classList.add('blue');
    document.getElementById('locusB10').classList.remove('yellow');
  }

  if ((locusC1 === 0)) {
    document.getElementById('locusC1').classList.add('yellow');
    document.getElementById('locusC1').classList.remove('blue');
  } else if ((locusC1 === 1)){
    document.getElementById('locusC1').classList.add('blue');
    document.getElementById('locusC1').classList.remove('yellow');
  }

  if ((locusC2 === 0)) {
    document.getElementById('locusC2').classList.add('yellow');
    document.getElementById('locusC2').classList.remove('blue');
  } else if ((locusC2 === 1)){
    document.getElementById('locusC2').classList.add('blue');
    document.getElementById('locusC2').classList.remove('yellow');
  }

  if ((locusC3 === 0)) {
    document.getElementById('locusC3').classList.add('yellow');
    document.getElementById('locusC3').classList.remove('blue');
  } else if ((locusC3 === 1)){
    document.getElementById('locusC3').classList.add('blue');
    document.getElementById('locusC3').classList.remove('yellow');
  }

  if ((locusC4 === 0)) {
    document.getElementById('locusC4').classList.add('yellow');
    document.getElementById('locusC4').classList.remove('blue');
  } else if ((locusC4 === 1)){
    document.getElementById('locusC4').classList.add('blue');
    document.getElementById('locusC4').classList.remove('yellow');
  }

  if ((locusC5 === 0)) {
    document.getElementById('locusC5').classList.add('yellow');
    document.getElementById('locusC5').classList.remove('blue');
  } else if ((locusC5 === 1)){
    document.getElementById('locusC5').classList.add('blue');
    document.getElementById('locusC5').classList.remove('yellow');
  }

  if ((locusC6 === 0)) {
    document.getElementById('locusC6').classList.add('yellow');
    document.getElementById('locusC6').classList.remove('blue');
  } else if ((locusC6 === 1)){
    document.getElementById('locusC6').classList.add('blue');
    document.getElementById('locusC6').classList.remove('yellow');
  }

  if ((locusC7 === 0)) {
    document.getElementById('locusC7').classList.add('yellow');
    document.getElementById('locusC7').classList.remove('blue');
  } else if ((locusC7 === 1)){
    document.getElementById('locusC7').classList.add('blue');
    document.getElementById('locusC7').classList.remove('yellow');
  }

  if ((locusC8 === 0)) {
    document.getElementById('locusC8').classList.add('yellow');
    document.getElementById('locusC8').classList.remove('blue');
  } else if ((locusC8 === 1)){
    document.getElementById('locusC8').classList.add('blue');
    document.getElementById('locusC8').classList.remove('yellow');
  }

  if ((locusC9 === 0)) {
    document.getElementById('locusC9').classList.add('yellow');
    document.getElementById('locusC9').classList.remove('blue');
  } else if ((locusC9 === 1)){
    document.getElementById('locusC9').classList.add('blue');
    document.getElementById('locusC9').classList.remove('yellow');
  }

  if ((locusC10 === 0)) {
    document.getElementById('locusC10').classList.add('yellow');
    document.getElementById('locusC10').classList.remove('blue');
  } else if ((locusC10 === 1)){
    document.getElementById('locusC10').classList.add('blue');
    document.getElementById('locusC10').classList.remove('yellow');
  }

  if ((locusD1 === 0)) {
    document.getElementById('locusD1').classList.add('yellow');
    document.getElementById('locusD1').classList.remove('blue');
  } else if ((locusD1 === 1)){
    document.getElementById('locusD1').classList.add('blue');
    document.getElementById('locusD1').classList.remove('yellow');
  }

  if ((locusD2 === 0)) {
    document.getElementById('locusD2').classList.add('yellow');
    document.getElementById('locusD2').classList.remove('blue');
  } else if ((locusD2 === 1)){
    document.getElementById('locusD2').classList.add('blue');
    document.getElementById('locusD2').classList.remove('yellow');
  }

  if ((locusD3 === 0)) {
    document.getElementById('locusD3').classList.add('yellow');
    document.getElementById('locusD3').classList.remove('blue');
  } else if ((locusD3 === 1)){
    document.getElementById('locusD3').classList.add('blue');
    document.getElementById('locusD3').classList.remove('yellow');
  }

  if ((locusD4 === 0)) {
    document.getElementById('locusD4').classList.add('yellow');
    document.getElementById('locusD4').classList.remove('blue');
  } else if ((locusD4 === 1)){
    document.getElementById('locusD4').classList.add('blue');
    document.getElementById('locusD4').classList.remove('yellow');
  }

  if ((locusD5 === 0)) {
    document.getElementById('locusD5').classList.add('yellow');
    document.getElementById('locusD5').classList.remove('blue');
  } else if ((locusD5 === 1)){
    document.getElementById('locusD5').classList.add('blue');
    document.getElementById('locusD5').classList.remove('yellow');
  }

  if ((locusD6 === 0)) {
    document.getElementById('locusD6').classList.add('yellow');
    document.getElementById('locusD6').classList.remove('blue');
  } else if ((locusD6 === 1)){
    document.getElementById('locusD6').classList.add('blue');
    document.getElementById('locusD6').classList.remove('yellow');
  }

  if ((locusD7 === 0)) {
    document.getElementById('locusD7').classList.add('yellow');
    document.getElementById('locusD7').classList.remove('blue');
  } else if ((locusD7 === 1)){
    document.getElementById('locusD7').classList.add('blue');
    document.getElementById('locusD7').classList.remove('yellow');
  }

  if ((locusD8 === 0)) {
    document.getElementById('locusD8').classList.add('yellow');
    document.getElementById('locusD8').classList.remove('blue');
  } else if ((locusD8 === 1)){
    document.getElementById('locusD8').classList.add('blue');
    document.getElementById('locusD8').classList.remove('yellow');
  }

  if ((locusD9 === 0)) {
    document.getElementById('locusD9').classList.add('yellow');
    document.getElementById('locusD9').classList.remove('blue');
  } else if ((locusD9 === 1)){
    document.getElementById('locusD9').classList.add('blue');
    document.getElementById('locusD9').classList.remove('yellow');
  }

  if ((locusD10 === 0)) {
    document.getElementById('locusD10').classList.add('yellow');
    document.getElementById('locusD10').classList.remove('blue');
  } else if ((locusD10 === 1)){
    document.getElementById('locusD10').classList.add('blue');
    document.getElementById('locusD10').classList.remove('yellow');
  }

  document.getElementById('counter').innerHTML="Individuo "+count;
}
