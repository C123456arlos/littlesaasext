// let box = document.getElementById('box')
// box.addEventListener('click', function () {
//     console.log('open the box')
// })
// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = '5-12 days'
// shippingCost = 15
// shippingTime = '7-14 days'
// const fullPrice= basePrice-discount+shippingCost


// function renderLead() {
//     let listItem = '<li>' + inputElement.value + '</li>'
//     unordered.innerHTML += listItem
// }


// const container = document.getElementById('container')
// container.innerHTML = "<button onclick='buy()''>buy</button>"
// function buy() {
//     container.innerHTML += "<p>thank you for buying</p>"
// }


let leads = []
const inputElement = document.getElementById('inputElement')
const inputButton = document.getElementById('inputButton')
const unordered = document.getElementById('unordered')
console.log(unordered)
inputButton.addEventListener('click', function () {
    leads.push(inputElement.value)
    renderLeads()
    inputElement.value = ''
})
function renderLeads() {
    let listItems = ''
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li>< a target = '_blank' href = '" + leads[i] + "' > " + leads[i] + '</li>'
        listItems += `<li>
        <a target = '_blank' href = '${leads[i]}'>${leads[i]}
        </a>
        </li>`
        console.log(listItems)
    }
    unordered.innerHTML = listItems
}

















// const sender = 'name'
// const recipient = 'jpj'
// const email = `hey ${recipient}
// how are you
// ${sender}`
// console.log(email)
// const form = document.getElementById('form')
// const numOneInput = document.getElementById('num1')
// const numTwoInput = document.getElementById('num2')
// const resultText = document.getElementById('result')
// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     const numOneVal = Number(numOneInput.value)
//     const numTwoVal = Number(numTwoInput.value)
//     console.log(`numOneVal is of type ${typeof numOneVal} with value of ${numOneVal}`)
//     console.log(`numTwoVal is of type ${typeof numTwoVal} with value of ${numTwoVal}`)
//     resultText.innerText = `${numOneVal}+${numTwoVal}= ${numOneVal + numTwoVal}`
// })