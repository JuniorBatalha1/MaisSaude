const btn_calculator = document.getElementById('btn_calculator');

function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');
    const obs = document.getElementById('obs');

    if(height !== '' && weight !== '') {
        const bmi = (weight / (height * height)).toFixed(1);
        result.textContent = bmi

        if(bmi < 18.5) {
            result.innerHTML = `CUIDADO! Abaixo do Peso: <span class="bmi_result">${bmi}</span>`;
            obs.innerHTML = 'Acesse a aba dicas para cuidar de sua saúde!'
        } else if(bmi >= 18.6 && bmi < 25) {
            result.innerHTML = `Peso Normal: <span class="bmi_result">${bmi}</span>`;
        } else if(bmi >= 25 && bmi < 30) {
            result.innerHTML = `CUIDADO! Acima do Peso: <span class="bmi_result">${bmi}</span>`;
            obs.innerHTML = 'Acesse a aba dicas para cuidar de sua saúde!'
        } else if(bmi >= 3 && bmi < 40) {
            result.innerHTML = `CUIDADO! Vocês está Obeso(a): <span class="bmi_result">${bmi}</span>`;
            obs.innerHTML = 'Acesse a aba dicas para cuidar de sua saúde!'
        } else {
            result.innerHTML = `CUIDADO! Vocês está com Obesidade Morbida: <span class="bmi_result">${bmi}</span>`;
            obs.innerHTML = 'Acesse a aba dicas para cuidar de sua saúde!'
        }} else {
        result.textContent = 'Preencha todos os campos corretamente!';
    }
}

btn_calculator.addEventListener("click", calculateBMI);
