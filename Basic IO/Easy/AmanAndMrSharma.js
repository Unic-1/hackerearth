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
    let parsedInput = userInput.split('\n')
    let toffeeCount = 0
    for(let i = 0; i<parsedInput.length; i++) {
        let param = parsedInput[i].split(' ')
        let target = (22/7)*(+param[0])*(+param[0])
        let capacity = (+param[1]) * 100

        if(target <= capacity)
            toffeeCount++

    }

    console.log(toffeeCount)
}