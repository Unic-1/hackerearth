// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    let parsedInput = input.split('\n');
    let basicInput = parsedInput[0].split(' ');
    let m = +basicInput[0];
    let n = +basicInput[1];
    let p = +basicInput[2];
    let count = 0;
    let resultCount = 0;
    let arrA =  [];
    let arrB = [];

    for(let i = 1; i<parsedInput.length; i++) {
        let ab = parsedInput[i].split(' ');
        let a = +ab[0];
        let b = +ab[1];
        if(!arrA.includes(a) && !arrB.includes(a)) {
            arrA.push(a);
        }
        if(!arrA.includes(b) && !arrB.includes(b)) {
            arrA.push(b);
        }

        let diff = Math.abs(arrA.length - arrB.length);
        if(diff < p) {
            resultCount++;
        }
    }

    console.log(resultCount);
}
