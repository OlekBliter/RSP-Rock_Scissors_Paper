let score = 0
let userChoise = 0
let computerChoise = 0

function disBtns(){
    document.querySelector(".rock").disabled = true;
    setTimeout(function(){
        document.querySelector(".rock").disabled = false;
    },3000);
    document.querySelector(".scissors").disabled = true;
    setTimeout(function(){
        document.querySelector(".scissors").disabled = false;
    },3000);
    document.querySelector(".paper").disabled = true;
    setTimeout(function(){
        document.querySelector(".paper").disabled = false;
    },3000);
}


function userRock(){   
    userChoise = 1
    computerChoose()
    let count = 3;
    let timer = setInterval(function() { startTimer(count); }, 1000);
    disBtns() 
    document.getElementById('winORlose').textContent = ""
    document.querySelector("#userHand").style.animation = "hand 0.3s infinite";
    document.querySelector("#userHand").src = 'img/hand.png'   
    document.querySelector('#userHand').style.transform = 'scaleX(1)'
    document.querySelector('.time-count').textContent = count
    document.querySelector('.time-part').style.display = 'flex'
    function startTimer() { 
        if(count === 1) {
          clearInterval(timer);
          document.querySelector('.time-part').style.display = 'none'
          document.querySelector("#userHand").style.animation = "none"
          document.querySelector("#userHand").src = 'img/rock.png'
        } else {
          $('#count_num').html(count);
          count--;
          document.querySelector('.time-count').textContent = count
        }
      }
      setTimeout(winORlose, 3000)
}
function userScissors(){  
    userChoise = 2 
    computerChoose()
    let count = 3;
    let timer = setInterval(function() { startTimer(count); }, 1000);
    disBtns() 
    document.getElementById('winORlose').textContent = ""
    document.querySelector("#userHand").style.animation = "hand 0.3s infinite";
    document.querySelector("#userHand").src = 'img/hand.png'
    document.querySelector('#userHand').style.transform = 'scaleX(1)'
    document.querySelector('.time-count').textContent = count
    document.querySelector('.time-part').style.display = 'flex'
    function startTimer() { 
        if(count === 1) {
          clearInterval(timer);
          document.querySelector('.time-part').style.display = 'none'
          document.querySelector("#userHand").style.animation = "none"
          document.querySelector('#userHand').style.transform = 'scaleX(-1)'
          document.querySelector("#userHand").src = 'img/scissors.png'
        } else {
          $('#count_num').html(count);
          count--;
          document.querySelector('.time-count').textContent = count
        }
      }
      setTimeout(winORlose, 3000)
}
function userPaper(){  
    userChoise = 3 
    computerChoose()
    let count = 3;
    let timer = setInterval(function() { startTimer(count); }, 1000);
    disBtns() 
    document.getElementById('winORlose').textContent = ""
    document.querySelector("#userHand").style.animation = "hand 0.3s infinite";
    document.querySelector("#userHand").src = 'img/hand.png'
    document.querySelector('#userHand').style.transform = 'scaleX(1)'
    document.querySelector('.time-count').textContent = count
    document.querySelector('.time-part').style.display = 'flex'
    function startTimer() { 
        if(count === 1) {
          clearInterval(timer);
          document.querySelector('.time-part').style.display = 'none'
          document.querySelector("#userHand").style.animation = "none"
          document.querySelector('#userHand').style.transform = 'scaleX(-1)'
          document.querySelector("#userHand").src = 'img/paper.png'
        } else {
          $('#count_num').html(count);
          count--;
          document.querySelector('.time-count').textContent = count
        }
      }
      setTimeout(winORlose, 3000)
}


function computerChoose(){
    let random = Math.ceil(Math.random()*3)
    if(random===1){
        computerRock()
        computerChoise = 1
    }else if(random===2){
        computerScissors()
        computerChoise = 2
    }else{
        computerPaper()
        computerChoise = 3
    }
}


function computerRock(){   
    let count = 3;
    let timer = setInterval(function() { startTimer(count); }, 1000);
    disBtns() 
    document.querySelector("#computerHand").style.animation = "hand 0.3s infinite";
    document.querySelector("#computerHand").src = 'img/hand.png'
    document.querySelector('.time-count').textContent = count
    document.querySelector('.time-part').style.display = 'flex'
    function startTimer() { 
        if(count === 1) {
          clearInterval(timer);
          document.querySelector('.time-part').style.display = 'none'
          document.querySelector("#computerHand").style.animation = "none"
          document.querySelector('#computerHand').style.transform = 'scaleX(1)'
          document.querySelector("#computerHand").src = 'img/rock.png'
        } else {
          $('#count_num').html(count);
          count--;
          document.querySelector('.time-count').textContent = count
        }
      }
}
function computerScissors(){   
    let count = 3;
    let timer = setInterval(function() { startTimer(count); }, 1000);
    disBtns() 
    document.querySelector("#computerHand").style.animation = "hand 0.3s infinite";
    document.querySelector("#computerHand").src = 'img/hand.png'
    document.querySelector('.time-count').textContent = count
    document.querySelector('.time-part').style.display = 'flex'
    function startTimer() { 
        if(count === 1) {
          clearInterval(timer);
          document.querySelector('.time-part').style.display = 'none'
          document.querySelector("#computerHand").style.animation = "none"
          document.querySelector('#computerHand').style.transform = 'scaleX(-1)'
          document.querySelector("#computerHand").src = 'img/scissors.png'
        } else {
          $('#count_num').html(count);
          count--;
          document.querySelector('.time-count').textContent = count
        }
      }
}
function computerPaper(){   
    let count = 3;
    let timer = setInterval(function() { startTimer(count); }, 1000);
    disBtns() 
    document.querySelector("#computerHand").style.animation = "hand 0.3s infinite";
    document.querySelector("#computerHand").src = 'img/hand.png'
    document.querySelector('.time-count').textContent = count
    document.querySelector('.time-part').style.display = 'flex'
    function startTimer() { 
        if(count === 1) {
          clearInterval(timer);
          document.querySelector('.time-part').style.display = 'none'
          document.querySelector("#computerHand").style.animation = "none"
          document.querySelector('#computerHand').style.transform = 'scaleX(-1)'
          document.querySelector("#computerHand").src = 'img/paper.png'
        } else {
          $('#count_num').html(count);
          count--;
          document.querySelector('.time-count').textContent = count
        }
      }
}
function winORlose(){
    if(userChoise == computerChoise){
        document.getElementById('winORlose').textContent = "It's draw"
        document.getElementById('winORlose').style.color = 'gray'
    }else if(userChoise==1 && computerChoise==2){
        document.getElementById('winORlose').textContent = "You win"
        document.getElementById('winORlose').style.color = 'yellowgreen'
        score++
        document.querySelector('.score-count').textContent = score
    }else if(userChoise==1 && computerChoise==3){
        document.getElementById('winORlose').textContent = "You lose"
        document.getElementById('winORlose').style.color = 'red'
        score--
        document.querySelector('.score-count').textContent = score
    }else if(userChoise==2 && computerChoise==1){
        document.getElementById('winORlose').textContent = "You lose"
        document.getElementById('winORlose').style.color = 'red'
        score--
        document.querySelector('.score-count').textContent = score
    }else if(userChoise==2 && computerChoise==3){
        document.getElementById('winORlose').textContent = "You win"
        document.getElementById('winORlose').style.color = 'yellowgreen'
        score++
        document.querySelector('.score-count').textContent = score
    }else if(userChoise==3 && computerChoise==1){
        document.getElementById('winORlose').textContent = "You win"
        document.getElementById('winORlose').style.color = 'yellowgreen'
        score++
        document.querySelector('.score-count').textContent = score
    }else if(userChoise==3 && computerChoise==2){
        document.getElementById('winORlose').textContent = "You lose"
        document.getElementById('winORlose').style.color = 'red'
        score--
        document.querySelector('.score-count').textContent = score
    }
}