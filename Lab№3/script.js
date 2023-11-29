function Fibonaci(n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
    
    let number = 12
    const fib_number = Fibonaci(number);
    console.log(`Число Фібоначчі з номером ${number}: ${fibNumber}`);