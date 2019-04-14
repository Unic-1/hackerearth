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
    let sum = 0
    for(let i = 0; i<userInput.length; i++) {
        sum += userInput.charCodeAt(i)-96
    }
    console.log(sum)
}