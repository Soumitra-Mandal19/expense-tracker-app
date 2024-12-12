import { useContext, useMemo, useState } from "react";
import { AddBalanceModal } from "../AddBalanceModal/AddBalanceModal";
import styles from "./WalletExpense.module.css"
import { AddExpenseModal } from "../AddExpenseModal/AddExpenseModal";
import { TrackerContext } from "../../providers/TrackerContextProvider";

const WALLET_BALANCE_LABEL = "Wallet Balance: ";
const EXPENSE_LABEL = "Expenses: "; 
const WALLET_BALANCE_BUTTON_LABEL = "+ Add Income";
const EXPENSE_BUTTON_LABEL = "+ Add Expense";

export const WalletExpense = ({ type }) => {

    const {calculatedExpenses, balance, setNewBalance, setNewExpense} = useContext(TrackerContext);

    const amount = useMemo(()=> {
      return  type === "wallet" ? balance : calculatedExpenses;
    },[type, balance, calculatedExpenses]) 
    
    const [isAddBalanceOpen, setIsAddBalanceOpen] = useState(false);
    const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);
    
    const onClick = () => {
        if (type === "wallet") setIsAddBalanceOpen(true);
        else {
            setIsAddExpenseOpen(true);
        }

    }

    const handleAddBalanceClick = (newAmount) => {
        setNewBalance(newAmount);
        onCancelButtonClicked();
    }

    const onCancelButtonClicked = () => {
        if (type === "wallet") setIsAddBalanceOpen(false);
        else {
            setIsAddExpenseOpen(false);
        }
    }

    const handleAddExpenseClick = (expense) => {
        setNewExpense(expense);
    }
    
    return (<>
        <div className={styles.root}>
            <div className={styles.container}>

                <div className={styles.title}>{type === "wallet" ? WALLET_BALANCE_LABEL : EXPENSE_LABEL}</div>
                <div className={type === "wallet" ? styles.wallet : styles.expense}>
                    ₹{amount}
                </div>

            </div>

            <div><button onClick={onClick} className={type === "wallet" ? styles.walletButton :
                styles.expenseButton}>{type === "wallet" ? WALLET_BALANCE_BUTTON_LABEL : EXPENSE_BUTTON_LABEL}</button></div>
        </div>
        {isAddBalanceOpen ? <AddBalanceModal onCancelButtonClicked={onCancelButtonClicked} handleAddBalanceClick={handleAddBalanceClick}/> : null}
        {isAddExpenseOpen ? <AddExpenseModal onCancelButtonClicked={onCancelButtonClicked} handleAddExpenseClick={handleAddExpenseClick}/> : null}
        </>
    )
}

