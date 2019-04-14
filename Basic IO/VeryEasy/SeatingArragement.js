process.stdin.resume();
process.stdin.setEncoding('utf-8');
let stdin_input = "";

process.stdin.on('data', (data) => {
  stdin_input += data;
});

process.stdin.on('end', () => {
  main(stdin_input);
})

function main(input) {
  let parsedInput = input.split('\n');
  let n = +parsedInput[0];
  let seat = 0;
  let diffMapping = {
    0: -11,
    1: 11,
    2: 9,
    3: 7,
    4: 5,
    5: 3,
    6: 1,
    7: -1,
    8: -3,
    9: -5,
    10: -7,
    11: -9
  };

  let seatTypeMap = {
    1: 'WS',
    11: 'WS',
    3: 'MS',
    9: 'MS',
    5: 'AS',
    7: 'AS'
  };

  let output = [];
  for(let i = 1; i<=n; i++) {
    seat = +parsedInput[i];
    let mapKey = seat % 12;
    let diff = diffMapping[mapKey]
    let oppSeat = seat + diff;
    let type = seatTypeMap[Math.abs(diff)];

    output.push(oppSeat + ' ' +  type);
  }
  console.log(output.join('\n'));
}