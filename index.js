// Función para calcular la propina
function calculateTip(billAmount, tipPercentage) {
    if (billAmount < 0 || tipPercentage < 0) {
        throw new Error("Los valores deben ser positivos");
    }
    return (billAmount * tipPercentage) / 100;
}

module.exports = { calculateTip }; // Exportar para pruebas si se desea

// Ejemplos de uso

console.log("Ejemplo 1:");
console.log("Input: calculateTip(100, 10);");
console.log("Output:", calculateTip(100, 10)); // 10

console.log("\nEjemplo 2:");
console.log("Input: calculateTip(1524.33, 25);");
console.log("Output:", calculateTip(1524.33, 25)); // 381.0825

console.log("\nEjemplo 3:");
console.log("Input: calculateTip(200, 0);");
console.log("Output:", calculateTip(200, 0)); // 0
