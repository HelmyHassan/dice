    /*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var score , roundScore , Activeplayer , gameplaying  ;

init();


document.querySelector('.btn-roll').addEventListener('click' , function(){
    if (gameplaying){
            var dice1 = Math.floor(Math.random() * 6 ) + 1 ;
            var dice2 = Math.floor(Math.random() * 6 ) + 1 ;
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    
    if (dice1 !==1 && dice2 !== 1){
        roundScore += dice1 + dice2;
        document.querySelector('#current-'+ Activeplayer).textContent = roundScore;
        
    }else{
        nextPlayer()
    }
    }
})



//hold
document.querySelector('.btn-hold').addEventListener('click' , function(){
    if (gameplaying){
        score[Activeplayer]+=roundScore
    document.querySelector('#score-'+ Activeplayer).textContent = score[Activeplayer];
    
    var input = document.querySelector('.final-score').value ;
        var winningScore ;
        if(input){
            winningScore = input;
        }else{
            winningScore = 100;
        }
    
    
    //check the winner 
    if ( score[Activeplayer] >=winningScore){
        document.querySelector('#name-'+ Activeplayer).innerHTML = 'winner !';
        hideDice();
        document.querySelector('.player-' + Activeplayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + Activeplayer + '-panel').classList.remove('active');
        gameplaying = false;
    }else{
        nextPlayer()
    }
    }
    
    
  
})




document.querySelector('.btn-new').addEventListener('click',init)

function init (){
     score = [0,0];
roundScore = 0 ;
Activeplayer =  0 ;
gameplaying = true;

        document.getElementById('score-0').textContent = 0;
        document.getElementById('score-1').textContent = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        document.getElementById('name-0').textContent = 'player 1';
        document.getElementById('name-1').textContent = 'player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        hideDice();
    
}


function nextPlayer (){
    roundScore = 0;
        Activeplayer ===0 ? Activeplayer = 1 :Activeplayer = 0 ;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        hideDice()
 
}


function hideDice (){
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}





















