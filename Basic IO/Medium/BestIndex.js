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
    let arr = parsedInput[1].split(' ')
    let max = 0
    
    for(let i = 0; i < arr.length; i++) {
        let sum = 0
        let count = i
        for(let j = i; (count + (j-i)) < arr.length; j++) {
            // console.log('count:',count)
            // console.log('i:', i, 'j:', j)
            for(let k = i; k <= j; k++) {
                // console.log('K:', k)
                sum += parseInt(arr[count])
                count++
            }
        }

        if(max < sum) {
            max = sum
        }
    }
    console.log(max)
}