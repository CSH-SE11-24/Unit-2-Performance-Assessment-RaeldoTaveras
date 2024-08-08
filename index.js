const prompt = require('prompt-sync')()


console.log("welcome to my baseball game")

let baseball = [
 "pitcher1","catcher2","first baseman3","second baseman4","third baseman5","shortstop6","left fielder7","center fielder8"," right fielder9"
]
let you = prompt("pick the number of the position you want to play")
console.log("do you like this position?", baseball[you])

let players = {
  pitcher:"throws the ball",
  catcher:"catches the ball coming from the pitcher",
  firstbaseman:"catches the ball if hit to him or in the infield",
  secondbaseman:"throws the ball to the first baseman if hit to him to get the out",
  thirdbaseman:"could throw the ball to the secondbaseman to get two outs or the firstbaseman to get one out",
  shortstop:"could do the same thing as the thirdbaseman to get the outs",
  leftfielder:"if ball hit in the air he could catche it",
  centerfielder:"if ball hit in the air or ground he could get it and throw it back in  the infield",
  rightfielder:"if ball hit in the air or ground could throw it back to the second baseman"
}

function player (anyposition){
  for(player in players){
    if(player == anyposition){
      console.log(players[player])
    }
  }
}

let user = prompt("do you like the game of baseball?")



while (user === "no"){
 user = prompt("are you sure you better say yes") 
} 


if (user === "yes"){
console.log("then we cool,play the game and have fun,make sure to follow the rules cuase if not then you maybe out running the bases the wrong way so don't get out the base line")

  let user = prompt("what position do you want to learn about?")
  player(user)
}

for (let i = 0; i < 1; i++) {
  console.log("can you play position 8?")
}



