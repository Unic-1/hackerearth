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
    let str = userInput
    let startIndex = 0
    let endIndex = userInput.length - 1
    let isPalindrome = true

    for(;startIndex <= endIndex; startIndex++, endIndex--) {
        if(str[startIndex] != str[endIndex]) {
            isPalindrome = false
            break
        }
    }

    console.log(isPalindrome ? 'YES' : 'NO')

}
