const userTemperatureInput = document.getElementById("tempInput");


btnCelsius.addEventListener("click", () => {
    const userTemperature = parseFloat(userTemperatureInput.value);
    let tempAfterConversion = (userTemperature - 32) * 5/9;
    userTemperatureInput.value = tempAfterConversion;
})

btnFahrenheit.addEventListener("click", () => {
    const userTemperature = parseFloat(userTemperatureInput.value);
    let tempAfterConversion = (userTemperature * 1.8) + 32;
    userTemperatureInput.value = tempAfterConversion;
})

btnClear.addEventListener("click", () => {
    userTemperatureInput.value = "";
})
