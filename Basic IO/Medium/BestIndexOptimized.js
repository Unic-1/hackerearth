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
        let remaining = arr.length - i
        let maxIndex = Math.ceil(remaining/2)
        let slot = 1
        for(j = maxIndex; j> 0; j--) {
            let tempSlot = (j * (j+1)) / 2
            if(tempSlot <= remaining) {
                slot = tempSlot
                break
            }
        }
        let sum = 0
        if(slot === 1) {
            sum = +(arr[i+slot])
        } 
        sum = arr.slice(i, i+slot).reduce((acc, num) => (+acc)+(+num))
        if(max < sum) {
            max = sum
        }
    }
    console.log(max)
}