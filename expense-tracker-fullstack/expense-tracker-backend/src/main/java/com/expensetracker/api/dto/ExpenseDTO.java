package com.expensetracker.api.dto;

import jakarta.validation.constraints.*;
import java.time.LocalDate;

public class ExpenseDTO {

    @NotBlank(message = "Category is required")
    private String category;

    @Min(value = 1, message = "Amount must be greater than 0")
    private double amount;

    @NotNull(message = "Date is required")
    private LocalDate date;

    @Size(max = 255, message = "Description too long")
    private String description;

    // ✅ Getters and Setters
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

