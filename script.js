// Sample data array to hold expense entries
let expenses = [];

// Event listener for form submission
document.getElementById('expenseForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Capture input values
    const description = document.getElementById('expenseDescription').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const category = document.getElementById('expenseCategory').value;

    // Add expense to the list
    expenses.push({ description, amount, category });
    
    // Clear form fields
    document.getElementById('expenseForm').reset();

    // Update the dashboard views
    updateSummary();
    updateCategoryBreakdown();
});

// Function to update expense summary
function updateSummary() {
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    document.getElementById('summaryContent').innerHTML = `
        <div class="summary-item">Total Expenses: $${totalAmount.toFixed(2)}</div>
        <div class="summary-item">Total Entries: ${expenses.length}</div>
    `;
}

// Function to update expenses by category
function updateCategoryBreakdown() {
    const categoryData = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});

    const categoryContent = Object.keys(categoryData).map(category => {
        return `<div class="category-item">${category}: $${categoryData[category].toFixed(2)}</div>`;
    }).join('');

    document.getElementById('categoryContent').innerHTML = categoryContent;
}
