function calculateTotal() {
    let totalScore = 0;
    document.querySelectorAll('input[type="range"]').forEach(function (input) {
        totalScore += parseInt(input.value);
    });

    let percentageScore = Math.round((totalScore / 180) * 100);
let resultText = '';

if (totalScore <= 90) {
    resultText = `${percentageScore}%          <br>High Risk (Discuss with Line Manager)`;
} else if (totalScore <= 150) {
    resultText = `${percentageScore}%          <br>Potential Risk (Discuss with Line Manager)`;
} else {
    resultText = `${percentageScore}%          <br>Reduced risk (Looks positive, let's do business)`;
}

    document.getElementById('result').innerHTML = resultText;
}

document.querySelectorAll('input[type="range"]').forEach(function (input) {
    input.addEventListener('input', function (e) {
        e.target.nextElementSibling.querySelector('.score').textContent = e.target.value;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    var calculateButton = document.getElementById('calculate-btn');

    // Add a click event listener to the button
    calculateButton.addEventListener('click', function() {
        calculateTotal();

        // Grab the first element with the class name 'total'
var totalElement = document.querySelector('.total');

// Set its margin-bottom to 0
if (totalElement) { // Check if the element actually exists
    totalElement.style.marginBottom = '0';
}
    });
});
