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
    let brickCount = +userInput
    let trackBrick = brickCount

    for(let i = 1; i<=brickCount; i++) {
        let patluCapacity = i
        if(trackBrick <= patluCapacity) {
            console.log('Patlu')
            break;
        }
        trackBrick -= patluCapacity
        let motuCapacity = i*2
        if(trackBrick <= motuCapacity) {
            console.log('Motu')
            break;
        }
        trackBrick -= motuCapacity
    }
}