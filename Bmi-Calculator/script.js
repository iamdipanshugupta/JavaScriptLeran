const form = document.querySelector("form");


form.addEventListener('submit', function (e) {
    e.preventDefault();


    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter valid height${height}`;
        results.style.color = 'red';
        results.style.fontWeight = 'bold';
        results.style.textAlign = 'center';
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter valid weight${weight}`;
        results.style.color = 'red';
        results.style.fontWeight = 'bold';
        results.style.textAlign = 'center';
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the results 
        results.innerHTML = `<span> ${bmi} </span>`
        results.innerHTML += `<span style="font-size: 20px; font-weight: bold;"> kg/m2 </span>`

        if (bmi < 18.5) {
            results.innerHTML += `<p style="color: blue;">You are underweight</p>`;
        } else if (bmi >= 18.5 && bmi < 24.9) {
            results.innerHTML += `<p style="color: green;">You are normal weight</p>`;
        } else {
            results.innerHTML += `<p style="color: red;">You are overweight</p>`;
        }
    }
})