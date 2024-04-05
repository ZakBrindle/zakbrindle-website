

function calculatePerformanceToTarget() {
    // Get inputs from the user
    var yearlyTarget = document.getElementById('yearlyTarget').value;
    var currentEarnings = document.getElementById('currentEarnings').value;
    var currentMonth = document.getElementById('currentMonth').value;

    // Check if any of the fields are blank
    if (!yearlyTarget || !currentEarnings || !currentMonth) {
        // Display message to fill in all fields
        document.getElementById('result').innerHTML = "Please fill in the full form above";
        return; // Exit the function early
    }    

    var monthlyTarget = yearlyTarget / 12;
    var performanceToTarget = Math.round((currentEarnings / (monthlyTarget * currentMonth)) * 100);
    document.getElementById('result').innerHTML = "Performance to Target: " + performanceToTarget + "%";
}

window.onload = function() {
    // Get the current month (0-11)
    var currentMonthIndex = new Date().getMonth();

    // Adjust the month value to make February as 1, ..., January as 12
    var adjustedMonthValue = currentMonthIndex === 0 ? 12 : currentMonthIndex;

    // Set the value of the currentMonth input field
    document.getElementById('currentMonth').value = adjustedMonthValue;


// Add event listener to the calculate button
document.getElementById('calculateButton').addEventListener('click', calculatePerformanceToTarget);


 // Add keydown event listener to the currentEarnings input to listen for Enter key press
 document.getElementById('currentEarnings').addEventListener('keydown', function(event) {
    // Check if the key pressed is the Enter key
    if (event.keyCode === 13) {
        // Prevent the form from submitting
        event.preventDefault();
        // Call the calculatePerformanceToTarget function
        calculatePerformanceToTarget();
    }
});


 document.getElementById('yearlyTarget').addEventListener('keydown', function(event) {
    // Check if the key pressed is the Enter key
    if (event.keyCode === 13) {
        // Prevent the form from submitting
        event.preventDefault();
        // Call the calculatePerformanceToTarget function
        calculatePerformanceToTarget();
    }
});

document.getElementById('currentMonth').addEventListener('keydown', function(event) {
    // Check if the key pressed is the Enter key
    if (event.keyCode === 13) {
        // Prevent the form from submitting
        event.preventDefault();
        // Call the calculatePerformanceToTarget function
        calculatePerformanceToTarget();
    }
});

}