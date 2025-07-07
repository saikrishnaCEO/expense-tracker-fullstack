const apiUrl = "http://localhost:8080/api/expenses";
let currentPage = 0;
const pageSize = 5;

const expenseForm = document.getElementById("expenseForm");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");
const messageBox = document.getElementById("message");

const expenseList = document.getElementById("expenseList");
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

expenseForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newExpense = {
    category: categoryInput.value.trim(),
    amount: parseFloat(amountInput.value),
    date: dateInput.value,
    description: descriptionInput.value.trim(),
  };

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExpense),
    });

    if (res.ok) {
      messageBox.innerText = "✅ Expense added successfully!";
      messageBox.style.display = "block";
      setTimeout(() => {
        messageBox.style.display = "none";
      }, 2500);

      expenseForm.reset();
      loadExpenses();
    } else {
      const errorData = await res.json();
      console.error("❌ Server Error:", errorData); // Log full server error
      alert("❌ Error from server: " + (errorData.message || JSON.stringify(errorData)));
    }
  } catch (error) {
    console.error("❌ Network/Parsing Error:", error);
    alert("❌ Network error: " + error.message);
  }
});


async function loadExpenses() {
  try {
    const res = await fetch(`${apiUrl}?page=${currentPage}&size=${pageSize}`);
    if (res.ok) {
      const data = await res.json();
      displayExpenses(data.content);
      updatePagination(data);
    } else {
      throw new Error("Failed to load expenses");
    }
  } catch (err) {
    console.error("❌ Error fetching expenses:", err);
  }
}

function displayExpenses(expenses) {
  expenseList.innerHTML = "";

  if (expenses.length === 0) {
    expenseList.innerHTML = "<p>No expenses to display.</p>";
    return;
  }

  expenses.forEach((exp) => {
    const div = document.createElement("div");
    div.classList.add("expense-item");
    div.innerHTML = `
      <strong>${exp.category}</strong> - ₹${exp.amount} on ${exp.date}
      <p>${exp.description || ""}</p>
    `;
    expenseList.appendChild(div);
  });
}

function updatePagination(data) {
  pageInfo.innerText = `Page ${data.number + 1} of ${data.totalPages}`;
  prevBtn.disabled = data.first;
  nextBtn.disabled = data.last;
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    loadExpenses();
  }
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  loadExpenses();
});

window.onload = loadExpenses;
