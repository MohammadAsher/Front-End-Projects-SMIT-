let votes1 = 0;
let votes2 = 0;
let votes3 = 0;
let votes4 = 0;
let isVotingOpen = true;

// VOTE FUNCTION
function vote(candidate) {
  if (!isVotingOpen) return;

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
}

// TIMER FUNCTION
let totalTime = 300; // 5 minutes in seconds

function startTimer() {
  const timerDisplay = document.getElementById('timer');

  const interval = setInterval(() => {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    timerDisplay.innerText = `Time Left: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    if (totalTime <= 0) {
      clearInterval(interval);
      isVotingOpen = false;
      decideWinner(); // Automatically decide winner after time ends
    }

    totalTime--;
  }, 1000);
}

// AUTO DECIDE WINNER
function decideWinner() {
  let maxVotes = Math.max(votes1, votes2, votes3, votes4);
  let winner = '';

  if (maxVotes === votes1) winner = 'M.Asher';
  else if (maxVotes === votes2) winner = 'Zaid';
  else if (maxVotes === votes3) winner = 'A.moiz';
  else if (maxVotes === votes3) winner = 'Ahmed';

  document.getElementById('winnerMessage').innerText = winner + ' Wins!';
  triggerConfetti(); // Optional: call celebration
}

// Call timer when page loads
window.onload = startTimer;
