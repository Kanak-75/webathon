//2. Convert Temperature (Celsius to Fahrenheit).
console.log("Temperature Conversion: Celsius to Fahrenheit");

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let celsiusTemp = 88; 
console.log(`${celsiusTemp}°C is equal to ${celsiusToFahrenheit(celsiusTemp)}°F`);
