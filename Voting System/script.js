
let votes1 = 0;
let votes2 = 0;
let votes3 = 0;
let isVotingOpen = true; 


function vote(candidate) {
  if (!isVotingOpen) {
    return; 
  }

 
  if (candidate === 'candidate1') {
    votes1++;
    document.getElementById('votes1').innerText = votes1;
  } else if (candidate === 'candidate2') {
    votes2++;
    document.getElementById('votes2').innerText = votes2;
  } else if (candidate === 'candidate3') {
    votes3++;
    document.getElementById('votes3').innerText = votes3;
  } else if (candidate === 'candidate4') {
    votes4++;
    document.getElementById('votes4').innerText = votes4;
  }

  
  checkForWinner();
}


function checkForWinner() {
  let winner = '';
  if (votes1 >= 2) {
    winner = 'M.Asher';
  } else if (votes2 >= 2) {
    winner = 'Zaid';
  } else if (votes3 >= 2) {
    winner = 'Abdul Moiz';
  } 

  if (winner) {
   
    document.getElementById('winnerMessage').innerText = winner + ' Wins!';

    
    triggerConfetti();

    
    isVotingOpen = false;
  }
}

function triggerConfetti() {
  const confettiCount = 100; 
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    document.body.appendChild(confetti);

    
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
  }
}
