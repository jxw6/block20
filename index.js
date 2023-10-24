// TODO: this file! :)
const addButton = document.querySelector("#addButton")
const sortOneButton = document.querySelector("#sortOne")
const sortAllButton = document.querySelector("#sortAll")
let storedNumbers = []
let storedOdds = []
let storedEvens = []

const addButtonClicked = (e) => {
    const num = document.querySelector("#number")
    const numberBank = document.querySelector("#numberBank")
    storedNumbers.push(num.value)

    let bankList = ""
    storedNumbers.forEach((n) => {
        bankList += n.toString() + " "
    })
    numberBank.innerHTML = bankList
}

const sortOneButtonClicked = (e) => {
    if (storedNumbers.length) {
        const num = storedNumbers.shift()
        const oddsBank = document.querySelector("#odds")
        const evensBank = document.querySelector("#evens")

        if (num%2) {
            storedOdds.push(num)
            let oddsList = ""
            storedOdds.forEach((n) => {
                oddsList += n.toString() + " "
            })
            oddsBank.innerHTML = oddsList
        } else {
            storedEvens.push(num)
            let evensList = ""
            storedEvens.forEach((n) => {
                evensList += n.toString() + " "
            })
            evensBank.innerHTML = evensList
        }
        let bankList = ""
        storedNumbers.forEach((n) => {
            bankList += n.toString() + " "
        })
        numberBank.innerHTML = bankList
    }
}

const sortAllButtonClicked = (e) => {
    if (storedNumbers.length) {
        let storedLength = storedNumbers.length
        for (let i = 0; i < storedLength; i++) {
            sortOneButtonClicked()
        }
    }
}

addButton.addEventListener("click", addButtonClicked)
sortOneButton.addEventListener("click", sortOneButtonClicked)
sortAllButton.addEventListener("click", sortAllButtonClicked)