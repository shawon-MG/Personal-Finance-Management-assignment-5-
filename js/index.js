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