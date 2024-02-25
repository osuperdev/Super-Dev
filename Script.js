document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');
  
    questions.forEach(function (question) {
      question.addEventListener('click', function () {
        this.classList.toggle('active');
        const answer = this.querySelector('.answer');
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  });
  