class Calculator {
    calculate(a, b, operation) {
        switch (operation.toLowerCase()) {
            case "add":
            case "+":
                return a + b;
            case "subtract":
            case "-":
                return a - b;
            case "multiply":
            case "*":
                return a * b;
            case "divide":
            case "/":
                if (b === 0) {
                    console.log("Error: Division by zero!");
                    return null;
                }
                return a / b;
            default:
                console.log("Invalid operation!");
                return null;
        }
    }
}

const calc = new Calculator();
console.log("Add:", calc.calculate(10, 2, "add"));      
console.log("Subtract:", calc.calculate(10, 2, "subtract")); 
console.log("Multiply:", calc.calculate(10, 2, "multiply")); 
console.log("Divide:", calc.calculate(10, 2, "divide"));   
