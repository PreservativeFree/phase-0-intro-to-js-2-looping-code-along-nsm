// Code your solutions in this file
for(let age = 30; age < 40; age++)
    console.log(`I'm ${age} years old. Happy Birthday to me!`)

const gifts = ["teddy bear", "drone", "doll"]


function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++)
        console.log(`Wrapped ${gifts[i]} and added a bowl!`)
    return gifts
}

const thankMessages = []

function writeCards(names, eventName) {
    
    for (let i = 0; i < names.length; i++)
       thankMessages[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`

    return thankMessages
}


wrapGifts(gifts)
writeCards(["Charlie","Samip","Ali"], "birthday")
console.log(thankMessages)

function countDown(num) {
    while(num > -1) {
        console.log(num)
        --num
    }
}

let num = 10
countDown(num)