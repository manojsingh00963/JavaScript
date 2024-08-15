document.querySelector('#calc-btn').addEventListener('click', () => {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    function calcBMI() {
        const heightInches = parseFloat(height);
        const weightPounds = parseFloat(weight);

        if (isNaN(heightInches) || isNaN(weightPounds)) {
            alert('Please enter valid numerical inputs for both height and weight.');
            return `<h2 style="color:#ee24249a;">Your Body mass index.</h2>0`;
        }

        // Correct BMI calculation
        const BMI = (703 * weightPounds) / (heightInches * heightInches);
        return `<h2>Your Body mass index.</h2>${BMI.toFixed(2)}`;  // Round to 2 decimal places
    }calcBMI();

    const getForm = document.getElementById("form");
    let resultBMI = document.getElementById('result_bmi');
    resultBMI = document.createElement('div');
    resultBMI.setAttribute('id', 'result_bmi');
    getForm.replaceWith(resultBMI);
    resultBMI.innerHTML = `${calcBMI()}`;
});
