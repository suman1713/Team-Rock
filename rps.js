	var myPlay =  Math.floor((Math.random() * 100) + 1);
		if(myPlay < 33){
//rock
console.log(myPlay);
console.log("rock");
}else if(33 < myPlay && myPlay < 66){
//paper
console.log(myPlay)
console.log("paper")
}else if(myPlay > 66){
//scissors
console.log(myPlay);
console.log("scissors");
}

var userInput=prompt("enter r, p, or s to select.");
          //Ties
		if(userInput ="r" && myPlay < 33){
			console.log("rock tie");
	}else if (userInput ="p" && myPlay > 33 && myPlay < 66){
		console.log("paper tie");
	}else if(userInput ="s" && myPlay > 66){
			console.log("scissors tie");
			//User Wins
	}else if(userInput ="r" && myPlay > 66){
		console.log("user win. rock beats scissors");
	}else if(userInput ="p" && myPlay < 33){
		console.log("user win. paper beats rock");
	}else if(userInput ="s" && myPlay > 33 && myPlay < 66){
		console.log("user win. scissors beats paper");
		//Computer Wins
	}else if(myPlay < 33 && userInput ="s"){
		console.log("computer wins. rock beats scissors");
	}else if(myPlay > 33 && myPlay < 66 && userInput ="r"){
		console("computer win. paper beats rock");
	}else if(myPlay > 66 && userInput ="p"){
		console.log("computer win. scissors beats paper")
	}


	