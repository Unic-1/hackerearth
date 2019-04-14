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
    let arr = userInput.split('\n')[1].split(' ')
    let product = 1

    arr.forEach(item => {
        product = (product * item) % 1000000007
    })

    console.log(product)
}