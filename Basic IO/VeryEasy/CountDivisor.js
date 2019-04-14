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
    let [l, r, k] = userInput.split(' ')
    let count = 0
    l = +l
    r = +r
    k = +k
    for(; l<r; l += k) {
        // if(l%k == 0)
            count++
    }

    console.log(count)
}
