process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    var formattedInput = input.split('\n');
    var arrayElement = formattedInput[1].split(" ");

    for(var i = 1; i < arrayElement.length; i++) {
        arrayElement[i] = +arrayElement[i] + +arrayElement[i-1];
    }
    arrayElement.unshift(0);

    var output = [];
    for(i = 2; i < formattedInput.length; i++) {
        var query = formattedInput[i].split(" ");
        startIndex = +query[0];
        endIndex = +query[1];
        var sum = arrayElement[endIndex] - +arrayElement[startIndex-1];

        output.push(Math.floor(sum / (endIndex - (startIndex-1))))
    }
    console.log(output.join('\n'));
}