var id;
var counterDisplay = 0;

var col = ['A', 'B', 'C', 'D'];
var locus = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lha = 50;
var lhb = 50;

var isDeriva = document.getElementById('gregorButton').classList.contains('isDeriva');
var isDominant;

var counter = 0;

if (isDeriva){
  counter = 50;
} else {
  counter = 0;
}

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
    return -1;
}

function runGregor(){

      counter ++;
      counterDisplay++;
      document.getElementById('counter').innerHTML = ('Individuo ' + counterDisplay);
      console.log('Individuo ' + counter + ' chances are: ' + lha + ' ' + lhb);

  for(i = 0; i < col.length; i++){
    for(j = 0; j < locus.length; j++){

      id = (col[i] + locus[j]);

      var value;
      var combinations = [0, 1];
      var likelihoods = [lha, lhb];

      value = (combinations[simulateEvent(likelihoods)]);

      if (value === 0) {
        isDominant = true;
        document.getElementById(id).classList.add('yellow');
        document.getElementById(id).classList.remove('blue');

      } else if (value === 1) {
        isDominant = false;
        document.getElementById(id).classList.add('blue');
        document.getElementById(id).classList.remove('yellow');
      }

    }
    if ((counter == 71) && isDeriva) {
      lha = 75;
      lhb = 25;
    } else if ((counter == 91) && isDeriva){
      lha = 85;
      lhb = 25;
    } else if ((counter == 131) && isDeriva){
      lha = 95;
      lhb = 5;
    } else if ((counter == 141) && isDeriva){
      lha = 80;
      lhb = 20;
    } else if ((counter == 146) && isDeriva){
      lha = 60;
      lhb = 40;
    } else if ((counter == 151) && isDeriva){
      lha = 30;
      lhb = 70;
    } else if ((counter == 171) && isDeriva){
      lha = 10;
      lhb = 90;
    }
  }

}
