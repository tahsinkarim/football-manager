// Append Players
const buttons = document.getElementsByClassName('button')
const selected = document.getElementById('selected-list')
for (button of buttons){
    button.addEventListener('click', function(e){
        const childLength = selected.childElementCount;
        if (childLength >= 5){
            alert('Maximum player already added')
            return
        }
        e.target.disabled = true;
        const playerName = e.target.parentNode.childNodes[1].innerText
        const li = document.createElement('li')
        li.innerText = playerName

        selected.appendChild(li)

    })
}

// Calculate
document.getElementById('btn-calculate').addEventListener('click', function(){
   const perPlayer = valueToInt('per-player');
   const listLength = selected.childElementCount

   const playerExpenses = document.getElementById('player-expenses');
    if (isNaN(perPlayer) || perPlayer < 0 ){
        alert('Enter a Valid Number');
    } else {
        playerExpenses.innerText = perPlayer * listLength;
    }
})

//Calculate Total
document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseInt(playerExpensesString);

    const managerExpenses = valueToInt('manager');
    if (isNaN(managerExpenses) || managerExpenses < 0 ){
        alert('Enter a valid number')
        return
    }

    const coachExpenses = valueToInt('coach');
    if (isNaN(coachExpenses) || coachExpenses < 0 ){
        alert('Enter a valid number')
        return
    }

    const total = document.getElementById('total');
    const totalExpenses = playerExpenses + managerExpenses + coachExpenses;
    total.innerText = totalExpenses
})