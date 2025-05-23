let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber
    calculateResults()
}

function receiveNumberOfPeopleValue(){
    
    numberOfPeople = document.querySelector("#people").valueAsNumber
    calculateResults()
}

function receiveTipPercentageValue(value) {
      
    tipPercentage = value / 100
    removeClassButtonSelected()
    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
    calculateResults()
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


function reset() {
    bill = 0
    document.querySelector(`#bill`).value = ""

    tipPercentage = 0 
    removeClassButtonSelected()
    document.querySelector("#custom-tip").value =  ""

    numberOfPeople = 0
    document.querySelector(`#people`).value = ""

    document.querySelector(".amount strong").textContent = "$0.00"
    document.querySelector(".Total strong").textContent = "$0.00"
}
    
