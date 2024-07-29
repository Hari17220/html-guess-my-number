'use strict';
    //  console.log(document.querySelector('.message').textContent);

//  document.querySelector('.message').textContent='Correct Number';
// document.querySelector('.number').textContent=50;

// document.querySelector('.score').textContent=30;


/* let secretNum=Math.trunc(Math.random()*20)+1;


let score=20;
let highScore=0;

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}

// FUNCTION STARTS
 document.querySelector('.check').addEventListener('click',function(){
    const guessNum=Number((document.querySelector('.guess').value));

// the input is no number
    if(!guessNum){
     document.querySelector('.message').textContent='there is no number';
 // the input is correct
    }else if(secretNum===guessNum){
    //  document.querySelector('.message').textContent='correct number';
    displayMessage('correct number');
     document.querySelector('body').style.backgroundColor='green';
     document.querySelector('.number').style.width='30rem';
     document.querySelector('.number').textContent=secretNum;
    
     if(score>highScore){
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }
} 
    

    
//   When guess is wrong
    else if(guessNum!==secretNum){
          // document.querySelector('.message').textContent=guessNum>secretNum ? 'Too High':'Too Low';     
          displayMessage(guessNum>secretNum ? 'Too High':'Too Low');
          
        if(score>1){
            score--;
            document.querySelector('.score').textContent=score;
       
    }else{
        //document.querySelector('.message').textContent='you lose the Game';
        displayMessage('you lose the Game');
        document.querySelector('.score').textContent=0;
    }

    
    
    
    
      // the guessing number is too higher  
   
   
      /*--------------------------------THIS PART IS MY OWN CODE---------------------------------------*/
  
 /*    else if(guessNum>secretNum){
    
    if(score>1){
        document.querySelector('.message').textContent='Too High';
     score--;
     document.querySelector('.score').textContent=score;

    }else{
        document.querySelector('.message').textContent='you lose the Game';
        document.querySelector('.score').textContent=0;
    }
    
    // the guessing number too low
}else if(guessNum<secretNum){

   if(score>1){
     
    document.querySelector('.message').textContent='Too Low';
    score--;
    document.querySelector('.score').textContent=score;   
 }else{
     document.querySelector('.message').textContent='You Lose The Game';
     document.querySelector('.score').textContent=0;
 }  


/*---------------------------------------------------------------*/



/*  }

});

document.querySelector('.again').addEventListener('click',function(){ //project 1
   score=20;
   secretNum=Math.trunc(Math.random()*20)+1;

     
    document.querySelector('.score').textContent=score;
    // document.querySelector('.message').textContent='Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value='';
    document.querySelector('.number').textContent='?';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('body').style.backgroundColor='#222';
}); */


/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

const check=document.querySelector(".check");
//const number=Math.trunc(Math.random()*20)+1;
//document.querySelector(".number").textContent=number;
const again=document.querySelector(".again");
//const highScore=document.querySelector(".highscore").textContent;
let number=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;
console.log(number);

const displayMessage=(message)=>{
    document.querySelector(".message").textContent=message;

}
check.addEventListener('click',()=>{
    
const guess=Number(document.querySelector(".guess").value);
    
    if(!guess){
      displayMessage("number is missing");
    }
    else if(number !==guess){

        if(score>1){
            score--;
            document.querySelector(".score").textContent=score;
           const choice=(number<guess)?'Too high':"Too low";
            displayMessage(choice);
    }else{
        score=20;  
        document.querySelector(".score").textContent=0;
        displayMeassage("better Luck Next time");
        
    }
}else if(number===guess){
       displayMessage("correct Number");
        document.querySelector(".number").textContent=number;
       document.querySelector('body').style.backgroundColor="green";
        document.querySelector(".number").style.width="50rem";
    }
    })


    /*---------after clicking again button----------------------*/

again.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="#222"
    document.querySelector(".number").style.width="15rem";
    displayMessage("start guessing...");
    number=Math.trunc(Math.random()*20)+1;
    console.log(number);
    document.querySelector(".number").textContent='?';
    document.querySelector(".guess").value=" ";
    if(score>highScore){
            highScore=score
        document.querySelector(".highscore").textContent=highScore;
    }
    score=20;
    document.querySelector(".score").textContent=score;
})

