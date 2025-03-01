// script.js

function calculateBMI() {
    // Get the input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

    // Check if the inputs are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    document.getElementById('bmiResult').textContent = bmi.toFixed(2);

    // Determine health category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display health category
    document.getElementById('category').textContent = category;
}