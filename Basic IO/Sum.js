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
    let parsedInput = userInput.split(' ')
    let sum = 0

    parsedInput.forEach(num => {
        sum += parseInt(num)
    })

    console.log(sum)
}