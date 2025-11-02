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
let oldLeads = []

// leads = JSON.stringify(leads)
// leads = JSON.parse(leads)
// leads.push('www.lead2.com')
// leads = JSON.stringify(leads)
// console.log(typeof leads)
// leads = JSON.parse(leads)
// leads.push("www.lead.com")

const inputElement = document.getElementById('inputElement')
const inputButton = document.getElementById('inputButton')
const unordered = document.getElementById('unordered')

// localStorage.setItem("leads", "name")
// let name = localStorage.getItem("leads")
// console.log(name)
// localStorage.clear()
// console.log(localStorage.getItem('leads'))
// console.log(unordered)

// localStorage.clear()
const deleteButton = document.getElementById('delete')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('leads'))
console.log(leadsFromLocalStorage)
const tabButton = document.getElementById('tab')
if (leadsFromLocalStorage) {
    leads = leadsFromLocalStorage
    render(leads)
}
const tabs = [{ url: 'www.google.com' }]
tabButton.addEventListener('click', function () {
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // })
    // console.log(tabs[0].url)
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs)
        leads.push(tabs[0].url)
        localStorage.setItem('leads', JSON.stringify(leads))
        render(leads)
    })
    // leads.push(tabs[0].url)
    // localStorage.setItem('leads', JSON.stringify(leads))
    // render(leads)
})
function render(leadsA) {
    let listItems = ''
    for (let i = 0; i < leadsA.length; i++) {
        // listItems += "<li>< a target = '_blank' href = '" + leads[i] + "' > " + leads[i] + '</li>'
        listItems += `<li>
        <a target = '_blank' href = '${leadsA[i]}'>${leadsA[i]}
        </a>
        </li>`
        console.log(listItems)
    }
    unordered.innerHTML = listItems
}
deleteButton.addEventListener('dblclick', function () {
    console.log('double')
    localStorage.clear()
    leads = []
    render(leads)
})
inputButton.addEventListener('click', function () {
    leads.push(inputElement.value)
    inputElement.value = ''
    localStorage.setItem("leads", JSON.stringify(leads))
    render(leads)
    console.log(localStorage.getItem('leads'))
})











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




