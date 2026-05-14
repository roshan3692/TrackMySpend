let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    const categoryInput = document.getElementById("category");
    const amountInput = document.getElementById("amount");

    const category = categoryInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (category === "" || isNaN(amount)) {
        alert("Please enter valid details");
        return;
    }

    const expense = {
        category,
        amount
    };

    expenses.push(expense);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    categoryInput.value = "";
    amountInput.value = "";

    displayExpenses();
}

function displayExpenses() {
    const expenseList = document.getElementById("expense-list");
    const totalDisplay = document.getElementById("total");

    expenseList.innerHTML = "";

    let total = 0;

    expenses.forEach((expense, index) => {
        total += expense.amount;

        const li = document.createElement("li");

        li.innerHTML = `
            ${expense.category} - ₹${expense.amount}
            <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
        `;

        expenseList.appendChild(li);
    });

    totalDisplay.textContent = total;
}

function deleteExpense(index) {
    expenses.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
}

displayExpenses();