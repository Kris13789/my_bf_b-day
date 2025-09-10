// Set the target date (September 13, 2026)
const targetDate = new Date('2026-09-13T23:59:59').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  } else {
    // Certificate has expired
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
  }
}

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Unlock Certificate functionality
const unlockBtn = document.getElementById('unlockBtn');
const taskContainer = document.getElementById('taskContainer');
const successContainer = document.getElementById('successContainer');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('errorMessage');

// Correct answers (case insensitive)
const correctAnswers = ['500 euros', '500 eur', '500 EUROS', '500 EUR'];

unlockBtn.addEventListener('click', function() {
  taskContainer.style.display = 'block';
  unlockBtn.style.display = 'none';
  answerInput.focus();
});

submitBtn.addEventListener('click', function() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const isCorrect = correctAnswers.some(answer => 
    answer.toLowerCase() === userAnswer
  );

  if (isCorrect) {
    taskContainer.style.display = 'none';
    successContainer.style.display = 'block';
    errorMessage.style.display = 'none';
  } else {
    errorMessage.style.display = 'block';
    answerInput.value = '';
    answerInput.focus();
  }
});

// Allow Enter key to submit
answerInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    submitBtn.click();
  }
});

// Idea cards click functionality
const ideaCards = document.querySelectorAll('.idea-card');
ideaCards.forEach(card => {
  card.addEventListener('click', function() {
    const link = this.getAttribute('data-link');
    if (link && link !== '#') {
      window.open(link, '_blank');
    }
  });
});
