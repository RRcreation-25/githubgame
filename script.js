let score = 0;
const scoreSpan = document.getElementById('score');
const btn = document.getElementById('clickBtn');

btn.addEventListener('click', () => {
    score++;
    scoreSpan.textContent = score;
});
