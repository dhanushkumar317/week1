function externalCalculation() 
{
    let numbers = [10, 20, 30, 40, 50];
    let sum = numbers.reduce((a, b) => a + b, 0);
    let result = (sum - 40) * 30;
    console.log("Result (External JS):", result);
}
