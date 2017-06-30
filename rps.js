var myPlay =  Math.floor((Math.random() * 100) + 1);
		if(myPlay < 33){
//rock
console.log(myPlay);
console.log("rock");
}else if(33 < myPlay && myPlay < 66){
//paper
console.log(myPlay);
console.log("paper");
}else if(myPlay > 66){
//scissors
console.log(myPlay);
console.log("scissors");
}

document.onkeyup =function(event){
console.log(event.key);
var result;
          //Ties
		if(event.key =="r" && myPlay < 33){
			result="Rock Tie"
	}else if (event.key =="p" && myPlay > 33 && myPlay < 66){
		result="Paper Tie"
	}else if(event.key =="s" && myPlay > 66){
			result="Scissors Tie"
			//User Wins
	}else if(event.key =="r" && myPlay > 66){
		result="You win! Rock beats Scissors"
	}else if(event.key =="p" && myPlay < 33){
		result="You win!. Paper beats Rock"
	}else if(event.key =="s" && myPlay > 33 && myPlay < 66){
		result="You win! Scissors beats Paper"
		//Computer Wins
	}else if(myPlay < 33 && event.key =="s"){
		result="Computer wins. Rock beats Scissors"
	}else if(myPlay > 33 && myPlay < 66 && event.key =="r"){
		result="Computer wins. Paper beats Rock";
	}else if(myPlay > 66 && event.key =="p"){
		result="Computer wins. Scissors beats Paper"
	}
	console.log(result);
	document.getElementById('displayResults').innerHTML = result;
}

	