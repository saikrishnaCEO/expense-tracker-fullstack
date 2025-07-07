package com.expensetracker.api.service;

import com.expensetracker.api.dto.ExpenseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.expensetracker.api.model.Expense;


import java.util.List;


public interface ExpenseService {
    List<Expense> getAllExpenses();
    Expense getExpenseById(Long id);
    Expense createExpense(Expense expense);
    Expense updateExpense(Long id, Expense expense);
    void deleteExpense(Long id);

    // ✅ For validation-based input via DTO
    Expense saveExpense(ExpenseDTO dto);
    Page<Expense> getAllExpenses(Pageable pageable);

}

