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
    let coordinate = [0, 0]
    for(let i = 0; i<userInput.length; i++) {
        switch(userInput[i]) {
            case 'L':
                coordinate[0]--
            break;
            case 'R':
                coordinate[0]++
            break;
            case 'D':
                coordinate[1]--
            break;
            case 'U':
                coordinate[1]++
            break;
        }
    }
    console.log(coordinate.join(' '))
}
