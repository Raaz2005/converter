function convertTemp() {
    let c = document.getElementById("celsius").value;
    if (c === "") {
        document.getElementById("tempResult").innerText = "Please enter a value!";
        return;
    }
    let f = (c * 9/5) + 32;
    document.getElementById("tempResult").innerText = `${c}°C = ${f.toFixed(2)}°F`;
}
function convertWeight() {
    let kg = document.getElementById("kg").value;
    if (kg === "") {
        document.getElementById("weightResult").innerText = "Please enter a value!";
        return;
    }
    let pounds = kg * 2.20462;
    document.getElementById("weightResult").innerText = `${kg} kg = ${pounds.toFixed(2)} lbs`;
}
function convertDistance() {
    let km = document.getElementById("km").value;
    if (km === "") {
        document.getElementById("distanceResult").innerText = "Please enter a value!";
        return;
    }
    let miles = km * 0.621371;
    document.getElementById("distanceResult").innerText = `${km} km = ${miles.toFixed(2)} miles`;
}