process.stdin.resume()
process.stdin.setEncoding('utf-8')
let input = ""

process.stdin.on('data', (data) => {
    input += data
})

process.stdin.on('end', () => {
    main(input)
})

function main(userInput) {
    console.log(userInput.split('\n42\n')[0])
}