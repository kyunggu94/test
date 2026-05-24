
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberCircles = document.querySelectorAll('.number-circle');

    generateBtn.addEventListener('click', () => {
        const lottoNumbers = generateLottoNumbers();
        displayNumbers(lottoNumbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        numberCircles.forEach((circle, index) => {
            if (numbers[index]) {
                circle.textContent = numbers[index];
                circle.style.backgroundColor = getNumberColor(numbers[index]);
            } else {
                circle.textContent = '';
                circle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }
        });
    }

    function getNumberColor(number) {
        const colors = [
            '#f09433', '#e6683c', '#dc2743', '#cc2366', '#bc1888',
            '#7522c5', '#4c2bcf', '#2a3ad5', '#0a4ae1', '#0056e9'
        ];
        const colorIndex = Math.floor(number / 5);
        return colors[colorIndex] || '#0066f2';
    }
});
