function main(input) {
    input = input.split("\n");
    let aAr = input[1].split(" ");
    let sum = 0,iStart, iEnd, sOut = [], aTests;

    for(let i =1;i<aAr.length; i++) {
        aAr[i] = +(aAr[i]) + (+aAr[i -1]);
    }
    aAr.unshift(0);

    for(let i =2; i <input.length; i++) {
        aTests = input[i].split(" ");
        iStart = +(aTests[0]);
        iEnd = +(aTests[1]);
        sum = aAr[iEnd] - aAr[iStart-1];
        sOut.push(Math.floor(sum/(iEnd - iStart + 1)));
    }

    console.log(sOut.join("\n"));
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input);
});
