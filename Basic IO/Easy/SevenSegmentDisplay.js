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
    let segmentMap = {
        0: 6,
        1: 2,
        2: 5,
        3: 5,
        4: 4,
        5: 5,
        6: 6,
        7: 3,
        8: 7,
        9: 6
    }

    let parseInput = userInput.split('\n')
    
    for(let i = 1; i< parseInput.length; i++) {
        let parsedNumber = parseInput[i].split('')
        let totalSegment = 0
        
        parsedNumber.forEach(num => {
            totalSegment += segmentMap[num]
        })

        if(totalSegment % 2 === 0) {
            console.log('1'.repeat(totalSegment/2))
        } else {
            console.log('7'+ '1'.repeat(totalSegment/2 -1))
        }
    }
}
