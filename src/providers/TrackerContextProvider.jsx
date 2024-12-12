import { createContext, useCallback, useEffect, useState  } from "react";

const DEFAULT_BALANCE = 5000;
const BALANCE_KEY = "balance";
const EXPENSES_KEY = "expenses";

const getLocalStorageBalance = () => {

    const balance = localStorage.getItem(BALANCE_KEY);
    // If balance exists, then return balance by converting it to number
    if (balance) return +balance;

    // Set DEFAULT_BALANCE to localStorage and return the value
    localStorage.setItem(BALANCE_KEY, DEFAULT_BALANCE);
    return DEFAULT_BALANCE;
}

const getLocalStorageExpenses = () => {

    // Get expenses from localStorage
    const expenses = localStorage.getItem(EXPENSES_KEY);

    // If expenses exists return 
    if (expenses) {
        // Convert the expenses string to an array
        const expensesArray = JSON.parse(expenses);
        return [...expensesArray];
    }

    // Set an empty array as string in local storage and return an empty array.
    localStorage.setItem(EXPENSES_KEY, JSON.stringify([]));
    return [];

}

const setLocalStorageBalance = (newBalance) => {
    localStorage.setItem(BALANCE_KEY, newBalance);
}

const setLocalStorageExpenses = (newExpensesArray) => {
    // Adding new expenses in localStorage
    localStorage.setItem(EXPENSES_KEY, JSON.stringify(newExpensesArray));
}

export const TrackerContext = createContext({
    expenses: [],
    balance: 0,
    setNewBalance: () => {},
    setNewExpense: () => {},
    editExpense: (expense) => {},
    deleteExpense: (id) => {},
    calculatedExpenses: 0

});

export const TrackerContextProvider = ({children}) => {

    const localStorageBalance = getLocalStorageBalance();
    const localStorageExpenses = getLocalStorageExpenses();

    const [balance, setBalance] = useState(localStorageBalance);
    const [expenses, setExpenses] = useState(localStorageExpenses);

    const calculatedExpenses = expenses.map((expense) => expense.amount).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    );


    const setNewBalance = useCallback((balance) => {
        
        setBalance(prev => {
           const newPrev =  prev + balance;
           setLocalStorageBalance(newPrev);
            return newPrev;
        });
        
    }, []);

    const setNewExpense = useCallback((expense) => {
        setExpenses((prev) => {
            const newPrev = [expense, ...prev];
            setLocalStorageExpenses(newPrev);
            return newPrev;
        });
    }, []);

    const editExpense = useCallback((expense) => {
        setExpenses((prevExpenses) => {
            // Safely update the expenses by creating a new array
            const updatedExpenses = prevExpenses.map((item) =>
                item.id === expense.id ? expense : item
            );
    
            // Persist updated expenses to localStorage
            setLocalStorageExpenses(updatedExpenses);
    
            // Return the new state
            return updatedExpenses;
        });
    }, []);

    const deleteExpense = useCallback((id) => {
        
        setExpenses((prev) => {
            const newPrev = prev.filter((item) => item.id !== id);
            
            setLocalStorageExpenses(newPrev);
            return newPrev;

        })
        
    }, []);

    return (
        <TrackerContext.Provider value={{
            balance, 
            calculatedExpenses,
            deleteExpense,
            editExpense,
            expenses,
            setNewBalance,
            setNewExpense
            }}>
                {children}
            </TrackerContext.Provider>
    )

}