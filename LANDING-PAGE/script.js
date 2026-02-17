const balanceEl = document.getElementById("balance");
const incomeAmountEl = document.getElementById("income-amount");
const expenseAmountEl = document.getElementById("expense-amount");
const transactionListEl = document.getElementById("transaction-list");
const transactionFormEl = document.getElementById("transaction-form");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions")) || []

function addTransaction(e){
    e.preventDefault()

    //get form data
    const description = descriptionEl.value.trim();
    const amount = parseFloat(amountEl.value);

    transactions.push({
        id:Date.now(),
        description,
        amount
    })

    localStorage.setItem("transactions", JSON.stringify(transactions))

    updateTransactionList()
    updateSummary()

    transactionFormEl.reset()
}

function updateTransactionList(){
    transactionFormEl.innerHTML = ""
    const sortedTransaction = [...transactions].reverse();

    sortedTransaction.forEach((transactions) => {
        const transactionEl = createTransactionEl(transaction)
        transactionListEl.appendChild(transactionEl)
    })
}

function createTransactionEl(transaction){
    const li = document.createElement(li)
    li.classList.add("transaction")
    li.classList.add(transaction.amount > 0? "income": "expense")
} 

function updateSummary(){
    
}
