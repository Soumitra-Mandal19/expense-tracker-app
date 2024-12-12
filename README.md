# Expense Tracker App

This is an expense tracker web application built with React.js. It allows users to manage their wallet balance, add and view expenses, visualize data through charts, and more. It uses context for state management, local storage for data persistence, and various UI components for an interactive user experience.

## Features

- **Track Wallet Balance**: Users can add income and track their wallet balance.
- **Track Expenses**: Add, edit, and delete expenses categorized by types such as "Food", "Entertainment", and "Travel".
- **Visualize Data**: View expenses in a **Pie Chart** and **Bar Graph**.
- **Recent Transactions**: View and manage recent transactions with detailed information.

## Technologies Used

- **React**: For building the UI.
- **Context API**: For managing global state such as expenses and balance.
- **Local Storage**: For persisting data across sessions.
- **Notistack**: For displaying snackbar notifications.
- **CSS Modules**: For scoped styling of components.

## Installation

### 1. Clone the repository:

   ```
   git clone https://github.com/your-username/expense-tracker-app.git
   ```

### 2. Navigate to the project directory:

    ```
    cd expense-tracker-app
    ```

### 3. Install dependencies:

    ```
    npm install
    ```

### 4. Start the development server:

    ```
    npm start
    ```

### 5. Open http://localhost:3000 in your browser to view the app.

## Folder Structure

    ```
    src/
    ├── components/                # Reusable components
    │   ├── AddBalanceModal/       # Modal to add wallet balance
    │   ├── AddExpenseModal/       # Modal to add an expense
    │   ├── BarGraph/              # Bar Graph component
    │   ├── PieChart/              # Pie Chart component
    │   ├── Transaction/           # Transaction card component
    │   └── TransactionList/       # List of transactions
    ├── pages/                     # Page components
    │   └── home.js                # Home page containing the main UI layout
    ├── providers/
    │   └── TrackerContextProvider # Context providers for global state
    └── App.js                     # Main application component
    └── index.js                   # Entry point for the app
    └── App.css                    # Global styles
    └── README.md                  # Project documentation
    ```



## Key Components

### 1. **TrackerContextProvider**: 

Manages the global state for wallet balance and expenses. Provides functions to:

- Add or update balance
- Add, edit, and delete expenses
- Persist data in localStorage

### 2. **WalletExpense**:

Displays the wallet balance or expenses and provides buttons to add new entries (income or expense).

### 3. **Transaction**:

Displays individual transactions, including details like title, amount, and category, and provides buttons to edit or delete the transaction.

### 4. **TransactionList**:

Lists all the transactions and renders `Transaction` components for each.

### 5. **PieChart**:

Visualizes expenses data in a pie chart format.

### 6. **BarGraph**:

Visualizes top expenses data in a bar graph format.

### 7. **AddBalanceModal**:

A modal for adding income to the wallet balance.

### 8. **AddExpenseModal**:

A modal for adding a new expense.

## Local Storage Persistence

- The wallet balance and expenses are persisted in the browser's local storage. This means that your data will remain intact even after refreshing the page or closing the browser.

## Usage

1. **Add Wallet Balance**: Click on the "+ Add Income" button to open the "Add Balance" modal and add a new income.
   
2. **Add Expense**: Click on the "+ Add Expense" button to open the "Add Expense" modal and add a new expense. You can categorize your expenses into "Food", "Entertainment", or "Travel".

3. **Visualize Expenses**: The app will show a **Pie Chart** for expense distribution and a **Bar Graph** for top expenses.

4. **Edit/Delete Transactions**: You can edit or delete any existing transaction by clicking the respective icon next to the transaction.

## Contributing

This repository is intended for learning purposes only and is not officially supported. Contributions are welcome, but please note that the repository is not maintained for production use.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy Tracking! 🎉


