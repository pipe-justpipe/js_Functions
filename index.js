//Assigment.
	//1.	Create a function that checks if the input/parameter is an even number.
    function isEven(number) {
        console.log(number % 2 === 0);
    }
    isEven(30);

	//2.	Create aa function tthat prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter

    function printNumbers(n1,n2){
        for (let num = n1; num <= n2; num++) {
            console.log(num);
        }
    } printNumbers(10, 30)

	//3/.	Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3. try

    function sumValues(num1, num2){
        let sum = 0;
        for (let num = num1; num <= num2; num++) {
            sum += num;
        }
        return sum;    
    } console.log(sumValues(70, 80));

