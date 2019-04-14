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
    let parsedUserInput = userInput.split('\n')
    let Q = parsedUserInput[1].split(' ')
    let H = parsedUserInput[2].split(' ')

    // for(let i = 0; i<H.length; i++) {
    for(let i = H.length-1; i>=0; i--) {
        let hunger = +H[i]
        let user = parsedUserInput[i+3].split(' ')

        for(let j = 1; j<= user[0]; j++) {
            let cakeIndex = +user[j] - 1
            let cake = +Q[cakeIndex]
            // console.log('Hunger', hunger, Q[cakeIndex])
            if(hunger > 0) {
                if(cake <= hunger) {
                    hunger -= cake
                    Q[cakeIndex] = 0
                    // console.log('After eating', hunger, Q[cakeIndex])
                } else {
                    Q[cakeIndex] = cake - hunger
                    hunger = 0
                    // console.log('After eating', hunger, Q[cakeIndex])
                }
            } else {
                break;
            }
        }
    }

    // console.log('Q', Q)

    for(let [index, left] of Q.entries()) {
        if(left > 0) {
            console.log(index+1)
            return
        }
    }

    console.log('-1')
}