const BillInput = document.getElementById('bill')
const tipInput = document.getElementById('tip')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const billOutput = document.getElementById('totalBillPerPerson')


let numberOfPeople = Number(numberOfPeopleDiv.innerText) 




const calculateBill = () => {
    // console.log(numberOfPeople)
    const bill = Number(BillInput.value)
    console.log(bill)
    const tippercentage = Number(tipInput.value) / 100
    const tipAmount = bill * tippercentage
    console.log(tippercentage)
    console.log({tipAmount})
    const total = bill + tipAmount
    console.log(total)
    const perPersonBill = total / numberOfPeople

    billOutput.innerText = `$${perPersonBill.toFixed(2).toLocaleString('en-US')}`

}

incrementpeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}

decrementpeople = () => {
    if(numberOfPeople <= 1)
    {
        return
    }
    numberOfPeople -= 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}



