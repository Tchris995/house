let randvar = Math.round((Math.random()*5)+1);

let randsvar = Math.round((Math.random()*5)+1);


// document.querySelector('.ken').style.src=`images/dice${randvar}.png`

// document.querySelector('.ken').style.src="IMG-20240809-WA0001.jpg";
document.querySelector('.ken').setAttribute('src', `images/dice${randvar}.png` );
document.querySelector('.abel').setAttribute('src', `images/dice${randsvar}.png` );

header = document.querySelector('.container h1');

function show(a, b, c){
  if (a > b) {
    c.innerHTML = 'player 1 wins'
  }else if (b > a){
    c.innerHTML = 'player 2 wins'
  }else{
    c.innerHTML = 'its a draw'
  }
}

show(randvar, randsvar, header);




