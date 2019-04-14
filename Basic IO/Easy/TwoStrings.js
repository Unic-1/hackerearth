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
    let inputArr = userInput.split('\n')

    for(let i = 1; i<inputArr.length; i++) {
        let [string1, string2] = inputArr[i].split(' ')
        
        let sortString1 = string1.split('').sort().join('')
        let sortString2 = string2.split('').sort().join('')

        console.log(sortString1 === sortString2 ? 'YES':'NO')
    }
}