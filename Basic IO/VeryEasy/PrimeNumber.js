process.stdin.resume();
process.stdin.setEncoding('utf-8');
let stdin_input = "";

process.stdin.on('data', function (data) {
  stdin_input += data;
});

process.stdin.on('end', function () {
  main(stdin_input);
})

function main(input) {
  let n = +input;
  let isPrime = true,
    output = [];

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= (i / 2); j++)
      if (i % j === 0) {
        isPrime = false;
      }
    if (isPrime) {
      output.push(i);
    }
    isPrime = true;
  }
  console.log(output.join(' '));
}