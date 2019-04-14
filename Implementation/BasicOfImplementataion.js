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
    let count = {}
    for(let c of userInput) {
        if(!count[c])
            count[c] = 0
        count[c]++
    }

    for(let i = 0; i<10; i++) {
        console.log(i, count[i] ? count[i] : 0)
    }
}