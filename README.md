# expense-tracker-fullstack
A full-stack Expense Tracker web application that allows users to add, view, and manage their daily expenses. Built using Spring Boot (Java) for the backend, MySQL for data storage, and HTML, CSS, JavaScript for the frontend. The goal of this project is to help users track where their money is going and improve their spending habits.

💸 Expense Tracker
A simple full-stack Expense Tracker web application built using Spring Boot (Java) for the backend and HTML/CSS/JavaScript for the frontend.

🚀 Features
➕ Add expenses with category, amount, date, and optional description

📜 View a paginated list of all expenses

🗑️ Delete or update expenses (can be added later)

🔗 Frontend and backend connected via REST API

💾 Stores data in MySQL using Spring Data JPA

🌐 CORS enabled for frontend-backend communication

🧱 Tech Stack
Backend:
Java 21

Spring Boot 3.5

Spring Data JPA

MySQL

Hibernate

Maven

Frontend:
HTML5

CSS3

JavaScript (Fetch API)

🗂️ Project Structure
bash
Copy
Edit
expense-tracker/
│
├── backend/                    # Spring Boot application
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── frontend/                   # Static frontend files
│   ├── index.html
│   ├── style.css
│   └── script.js
⚙️ Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
2. Backend Setup (Spring Boot)
Import backend/ folder into your IDE (VS Code/IntelliJ)

Configure MySQL DB in application.properties

properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/expense_tracker
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
Run the app using:

bash
Copy
Edit
mvn spring-boot:run
3. Frontend Setup
Open frontend/index.html in your browser (you can double-click or use Live Server)

Make sure the backend is running at http://localhost:8080

🌐 API Endpoints
Method	Endpoint	Description
GET	/api/expenses	Get paginated list
POST	/api/expenses	Add new expense
GET	/api/expenses/{id}	Get expense by ID
PUT	/api/expenses/{id}	Update expense
DELETE	/api/expenses/{id}	Delete expense

📸 Screenshots
Add Expense	View Expenses

💡 Add screenshots/ folder if you want to display them on GitHub.

🙌 Author
👤 Douluri Sai Krishna

📧 doulurisaikrish@gmail.com
