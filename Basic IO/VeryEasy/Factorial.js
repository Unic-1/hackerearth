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
    console.log(factorial(+userInput))
}

function factorial(num) {
    if(num === 1) 
        return 1
    return num * factorial(num - 1)
}