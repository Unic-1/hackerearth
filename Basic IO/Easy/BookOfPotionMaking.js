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
    let parsedNumber = userInput.split('')
    let total = 0;
    for(let i = 1; i<=parsedNumber.length; i++) {
        total += (+parsedNumber[i-1]) * i
    }
    console.log((total % 11) ? 'Illegal ISBN': 'Legal ISBN')
}