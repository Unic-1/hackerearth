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

    for(let i = 1; i<parsedInput.length; i++) {
        let parsedTime = parsedInput[i].split(' ')
        let startHour = +parsedTime[0]
        let startMinute = +parsedTime[1]

        let endHour = +parsedTime[2]
        let endMinute = +parsedTime[3]

        let diff = (endHour * 60 + endMinute) - (startHour * 60 + startMinute)

        console.log(parseInt(diff/60) +' '+ diff%60)
    }
}