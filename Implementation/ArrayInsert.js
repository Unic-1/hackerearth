process.stdin.resume()
process.stdin.setEncoding('utf-8')
let input = ''

process.stdin.on('data', (data)=> {
    input += data
})

process.stdin.on('end', () => {
    main(input)
})

function main(userInput) {
    let parsedInput = userInput.split('\n')
    let [,n] = parsedInput[0].split(' ')
    n = +n + 2
    let arr = parsedInput[1].split(' ')
    let line = 1;
    for(let i = 2; i<n; i++) {
        let query = parsedInput[i].split(' ')
        if(query[0] == 1) {
            arr[query[1]] = query[2]
        } else {
            // console.log(arr.slice(+query[1], +query[2]+1))
            let start = +query[1]
            let end = +query[2]
            if(start <= end && end < arr.length && start > -1) {
                let sum = 0
                for(let tempStart = start; tempStart <= end; tempStart++) {
                    sum += +arr[tempStart]
                }
                // console.log(line++, start, end, sum)
                console.log( sum)

                // console.log(arr.slice(+query[1], +query[2]+1).reduce((a, b) => +a + +b, 0))
            } else {
                console.log('-1')
            }
        }
    }
}