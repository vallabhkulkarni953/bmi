function calculateBMI() {
    // Get the input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    // Check if inputs are valid
    if (!weight || !height) {
        document.getElementById('result').innerHTML = "Please enter valid numbers!";
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);

    // Display result
    let resultMessage;
    if (bmi < 18.5) {
        resultMessage = `Your BMI is <span>${bmi}</span> (Underweight)`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultMessage = `Your BMI is <span>${bmi}</span> (Normal)`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultMessage = `Your BMI is <span>${bmi}</span> (Overweight)`;
    } else {
        resultMessage = `Your BMI is <span>${bmi}</span> (Obese)`;
    }

    document.getElementById('result').innerHTML = resultMessage;
}
