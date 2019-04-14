process.stdin.resume()
process.stdin.setEncoding('utf-8')
let input = ''

process.stdin.on('data', (data) => {
    input += data
})

process.stdin.on('end', () => {
    main(input)
})

function main(userInput) {
    let firstSum = (+userInput[0]) + (+userInput[1])
    let text = userInput[2]
    let secondSum = (+userInput[3]) + (+userInput[4])
    let thirdSum = (+userInput[4]) + (+userInput[5])
    let fourthSum = (+userInput[7]) + (+userInput[8])
    
    if (text === 'A' || text === 'E' || text === 'I' || text === 'O' || text === 'U') {
        console.log('invalid')
    } else if(firstSum % 2 !== 0 || secondSum %2 !== 0 || thirdSum % 2 !== 0 || fourthSum % 2 !== 0) {
        console.log('invalid')
    } else {
        console.log('valid')
    }
}