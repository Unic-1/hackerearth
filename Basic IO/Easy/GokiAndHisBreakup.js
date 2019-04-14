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
    let minSkillSet = +parsedInput[1]

    for(let i = 2; i<parsedInput.length; i++) {
        let skill = +parsedInput[i]
        console.log(minSkillSet <= skill ? 'YES' : 'NO')
    }
}