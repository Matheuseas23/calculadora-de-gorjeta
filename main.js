let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber
    calculateResults()
}

function receiveNumberOfPeopleValue(){
    calculateResults()
    numberOfPeople = document.querySelector("#people").valueAsNumber
}

function receiveTipPercentageValue(value) {
    calculateResults()  
    tipPercentage = value / 100
    removeClassButtonSelected()
    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
}

function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
    removeClassButtonSelected()
    calculateResults()
    
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}

function calculateResults() {
    if (bill !== 0 && tipPercentage !==0 && numberOfPeople !== 0) {
    let tipamountPerson = calculateTipAmountPerson()
    calculateTotalPerson(tipamountPerson)
    
    }
}
    

function calculateTipAmountPerson() {
    let tipamountStrong = document.querySelector(".amount strong")
    let tipamountPerson = bill * tipPercentage / numberOfPeople
    tipamountStrong.textContent = `$${tipamountPerson.toFixed(2)}`
    return tipamountPerson
}

function calculateTotalPerson(tipamountPerson){
    let TotalStrong = document.querySelector(".Total strong")
    let totalamountPerson = bill / numberOfPeople + tipamountPerson
    TotalStrong.textContent = `$${totalPerson.toFixed(2)}`
    return
}