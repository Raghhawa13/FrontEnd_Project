'use strict'

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'I m happy'
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10
// document.querySelector(".guess").value = 23;
// console.log( document.querySelector(".guess").value)

let secretNumber = Math.trunc(Math.random()*20 )+1;
let score = 20;
let  highscore = 0;

console.log(secretNumber)
document.querySelector('.check').addEventListener(
    'click', function(){
       const guess = Number(document.querySelector('.guess').value)

        if(!guess){
            document.querySelector('.message').textContent =
            '⛔ Not a Number';
        }else if (guess === secretNumber ){
            document.querySelector('.message').textContent =
             'Correct Number 🎉🎉'
             document.querySelector('.number').textContent = secretNumber ;
             document.querySelector('body').style.backgroundColor='#60b347'
             document.querySelector('.number').style.width='30rem'
            
             if(score>highscore){
             highscore= score;
             document.querySelector('.highscore').textContent = highscore;          
           }
        }
        else if (guess !== secretNumber ){
            if(score>1){
            document.querySelector('.message').textContent =
            guess > secretNumber ? 'Number Is Too High' :  'Number Is Too Low';
             score --;
             document.querySelector('.score').textContent = score;
            }else{
             document.querySelector('.message').textContent =
             `You Lost the Game and my number was ${secretNumber}`;
              document.querySelector('.score').textContent = 0;
              document.querySelector('body').style.backgroundColor = '#BA181B';
            }

        }


        // else if (guess> secretNumber ){
        //     if(score>1){
        //     document.querySelector('.message').textContent =
        //      'Number Is Too High' 
        //      score --;
        //      document.querySelector('.score').textContent = score;
        //     }else{
        //      document.querySelector('.message').textContent =
        //      'You Lost the Game';
        //       document.querySelector('.score').textContent = 0;
        //       document.querySelector('body').style.backgroundColor = '#BA181B';
        //     }
        // }
        // else if (guess < secretNumber ){
        //      if(score>1){
        //     document.querySelector('.message').textContent =
        //      'Number Is Too Low'
        //      score --;
        //      document.querySelector('.score').textContent = score
        //     }else{
        //          document.querySelector('.message').textContent =
        //      'You Lost the Game';
        //      document.querySelector('.score').textContent = 0;
        //      document.querySelector('body').style.backgroundColor = '#BA181B';
        //     }
        
    }
)

document.querySelector('.again').addEventListener(
    'click', function(){
        
        // document.querySelector('.score').textContent = 20;
        // document.querySelector('body').style.backgroundColor='#94cce2' 
        // document.querySelector('.number').style.width='15rem' 

        // document.querySelector('.message').textContent =
        // 'Start guessing...';
        // document.querySelector('.guess').value = ''
        // document.querySelector('.number').textContent = ''
        
        secretNumber = Math.trunc(Math.random()*20 )+1;
        console.log(secretNumber)
        score = 20;
        document.querySelector('.message').textContent =
        'Start guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?'
        document.querySelector('.guess').value = ''
        document.querySelector('body').style.backgroundColor='#94cce2' 
        document.querySelector('.number').style.width='15rem' 


    }
)
