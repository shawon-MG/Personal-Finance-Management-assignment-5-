document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodPrice = document.getElementById('food-price').value;
    const rentPrice = document.getElementById('rent-price').value;
    const clothesPrice = document.getElementById('clothes-price').value;

    const totalExpenses = parseFloat(foodPrice) + parseFloat(rentPrice) + parseFloat(clothesPrice);

    const totalExpensesTextField = document.getElementById('total-expenses');
    totalExpensesTextField.innerText = totalExpenses;


    // updating balance:
    const balanceTextField = document.getElementById('balance-text-field');
    const incomeField = document.getElementById('income-field').value;
    if(totalExpenses < incomeField){
        balanceTextField.innerText = incomeField - totalExpenses;
    } 
    // handling eror for spending more money then earning:
    else {
        balanceTextField.innerText = "You spended more then you earn!"
    }
}); 
// calculating saving amount after spending | event listner:
document.getElementById('savings-btn').addEventListener('click', function(){
    const savingsInputField = document.getElementById('savings-input-field').value;
    const incomeField = document.getElementById('income-field').value;
    const savingAmount = parseFloat(savingsInputField) * parseFloat(incomeField) / 100;
 
    const foodPrice = document.getElementById('food-price').value;
    const rentPrice = document.getElementById('rent-price').value;
    const clothesPrice = document.getElementById('clothes-price').value;
    const totalExpenses = parseFloat(foodPrice) + parseFloat(rentPrice) + parseFloat(clothesPrice);
    
    const totalInputField = parseFloat(incomeField);
    const totalBalance = totalInputField - totalExpenses;

    if (savingAmount < totalBalance){
        const savingAmountText = document.getElementById('saving-amount');
        savingAmountText.innerText = savingAmount;
    }
    else {
        const savingAmountText = document.getElementById('saving-amount');
        savingAmountText.innerText = "You spends more than you want to save!";
    }

    // const checkIncomeFieldText = document.getElementById('income-field').value;
    // const checkIncomeField = parseFloat(checkIncomeFieldText);

    const remainigBalance = totalBalance - savingAmount;
    if (savingAmount < totalBalance) {
        const remainigBalanceText = document.getElementById('remaining-balance');
        remainigBalanceText.innerText = remainigBalance;
    }
    else{
        const remainigBalanceText = document.getElementById('remaining-balance');
        remainigBalanceText.innerText = "No Remaining Balance For Now!!!";
    }

    // const remainigBalanceText = document.getElementById('remaining-balance');
    // remainigBalanceText.innerText = remainigBalance;
});