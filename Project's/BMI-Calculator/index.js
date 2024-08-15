// const height = document.getElementById('height').value;
// const weight = document.getElementById('weight').value;
const height = document.getElementById('height');
// console.log(height)
height = prompt();
const weight = document.getElementById('weight');
weight = prompt();
console.log(height,weight);

document.querySelector('#calc-btn').addEventListener('click', () => {

    function clacbmi() {
        if (isNaN(height)) {
            alert('please Enter the correct input.');
            return;
        } else {
            const BMI = 703 * height / (weight*weight);// Math.sqrt(weight);
            return BMI;
        };
    }
    const getform = document.getElementById("form")
    const Result_BMI = document.createElement('div')
    Result_BMI.setAttribute('id', 'result_bmi')
    getform.replaceWith(Result_BMI);
    Result_BMI.innerHTML = clacbmi();
});