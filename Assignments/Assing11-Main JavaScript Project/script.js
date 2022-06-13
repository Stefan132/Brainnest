const computerPlay = () => {
   const choices = [`Rock`, `Paper`, `Scissors`];
   const selectedChoice = Math.floor(Math.random() * 3);
 
   return choices[selectedChoice];
 }
 
 const whoWins = (player, computer) => {
   switch (player){
     case computer:
       return {'msg': `It's a tie!`, 'winner': `tie`};
       break;
     case 'ROCK':
       if (computer === `SCISSORS`){
         return {'msg': `You Win! Rock beats Scissors`, 'winner': `player`};
       } else {
         return {'msg': `You Lose! Paper beats Rock`, 'winner': `computer`};
       }
       break;
     case 'PAPER':
       if (computer === `ROCK`){
         return {'msg': `You Win! Paper beats Rock`, 'winner': `player`};
       } else {
         return {'msg': `You Lose! Scissors beats Paper`, 'winner': `computer`};
       }
       break;
     case 'SCISSORS':
       if (computer === `PAPER`){
         return {'msg': `You Win! Scissors beats Paper`, 'winner': `player`};
       } else {
         return {'msg': `You Lose! Rock beats Scissors`, 'winner': `computer`};
       }
       break;
     default:
       return [``,`computer`];
       break;
   }
 }
 
 const playJankenRound = (playerChoice, computerChoice) => {
   const player = playerChoice.toUpperCase();
   const computer = computerChoice.toUpperCase();
 
   return whoWins(player,computer);
 }
 
 
 const game = () => {
   let score = {
     'player': 0, 
     'computer': 0,
     'tie': 0,
   };
   
   for (let i = 0; i < 5; i++){
 
     let playerChoice = prompt(`Please insert either rock, paper or scissors`);
     while (playerChoice.toLowerCase() !== 'rock' && playerChoice.toLowerCase() !== 'paper' && playerChoice.toLowerCase() !== 'scissors'){
       playerChoice = prompt(`Player inserted invalid choice. Please select between rock, paper or scissors`);
     }
 
     let result = playJankenRound(playerChoice,computerPlay());
     alert(`This round... ${result.msg}`);
     console.log(result.msg);
     score[result.winner]++;
   }
 
   console.log(score);
   if (score.player == score.computer){
     alert(`It's a tie! \nThe result was: \nPlayer: ${score.player} \nComputer: ${score.computer} \nTies: ${score.tie}`);
   } else if (score.player > score.computer){
     alert(`You Win! \nThe result was: \nPlayer: ${score.player} \nComputer: ${score.computer} \nTies: ${score.tie}`);
   } else {
     alert(`You Lose! \nThe result was: \nPlayer: ${score.player} \nComputer: ${score.computer} \nTies: ${score.tie}`);
   }
 }
 
 //Uncomment next line if you want it to play automatically
 game(); 
 
 