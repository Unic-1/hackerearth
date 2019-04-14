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
    let steps = +userInput

    for(let i = 0; i<steps; i++) {
        console.log('*   *')
        console.log('*   *')
        console.log('*****')
    }

    if(steps > 0) {
        console.log('*   *')
        console.log('*   *')
    }

}