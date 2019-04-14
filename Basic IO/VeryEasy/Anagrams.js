process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = ''

process.stdin.on('data', (data) => {
    input += data
})

process.stdin.on('end', () => {
    main(input)
})

function removeCharAt(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }

function main(userInput) {
    let splitInput = userInput.split('\n')
    let testCase = +(splitInput[0])
    let counterArray = []

    for(let i = 1; i<splitInput.length; i+=2) {
        let text1 = splitInput[i]
        let text2 = splitInput[i+1]
        let counter = 0

        let text2Count = 0
        for(let charIndex = 0; charIndex < text1.length; charIndex++) {
            let c = text1.charAt(charIndex);
            if(text2.indexOf(c) === -1) {
                counter++
                continue
            }
            text2Count++
            text2 = removeCharAt(text2, text2.indexOf(c))
        }

        let text1Count = text1.length - counter;
        let totalCount = counter + text2.length + Math.abs(text1Count - text2Count)

        counterArray.push(totalCount)
    }

    console.log(counterArray.join('\n'))
}