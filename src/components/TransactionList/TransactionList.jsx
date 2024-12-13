import { useContext, useState } from "react";
import { Transaction } from "../Transaction/Transaction";
import { EditExpenseModal } from "../EditExpenseModal/EditExpenseModal";
import styles from './TransactionList.module.css';
import { TrackerContext } from "../../providers/TrackerContextProvider";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const PAGE_SIZE = 3;

export const TransactionList = () => {

    const [expense, setExpense] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    const { expenses: transactions, deleteExpense, editExpense, setNewBalance } = useContext(TrackerContext);

    const onDelete = (id) => {
        const toDelete = transactions.find(transaction => transaction.id === id);
        if (toDelete) {
            setNewBalance(toDelete.amount);
        }
        deleteExpense(id);


    }

    const onEdit = (id) => {
        // get the expense item using the id from expenses coming from the useTracker hook
        if (transactions && transactions.length > 0) {
            const item = transactions.find((transaction) => transaction.id === id);
            setExpense(item);
        }

        // set the expense item to the expense state
    }
    const onCancelButtonClicked = () => {
        setExpense();
    }

    const handleAddExpenseClick = (expense) => {
        editExpense(expense);
        onCancelButtonClicked();
    }


    return (
        <div className={styles.root}>
            {transactions.length > 0 ? <>
                <div className={styles.transactions}>
                    {transactions.slice((pageNumber * PAGE_SIZE - PAGE_SIZE), (pageNumber * 3)).map((transaction, index) => {
                        return (<Transaction key={index} {...transaction} onDelete={onDelete} onEdit={onEdit} />)
                    })}
                </div>
                <div className={styles.pager}>
                    <div className={styles.paginationWrapper}>
                        <button disabled={pageNumber === 1}
                            onClick={() => setPageNumber(
                                (prev) => prev - 1 < 1 ? prev : prev - 1
                            )}>
                            <IoIosArrowRoundBack />
                        </button>
                        <p>{pageNumber}</p>
                        <button disabled={transactions.length < (pageNumber * PAGE_SIZE)}
                            onClick={() => setPageNumber(
                                (prev) => transactions.length < (prev * PAGE_SIZE) ? prev : prev + 1
                            )}>
                            <IoIosArrowRoundForward />
                        </button>
                    </div>

                </div>
                {/* EditExpenseModal will have isOpen set to true when expense state variable is not null (!= null || ! === undefined) */}
                {(expense != null) ? <EditExpenseModal expense={expense} onCancelButtonClicked={onCancelButtonClicked} handleAddExpenseClick={handleAddExpenseClick} /> : null}
            </> : <div className={styles.noTransactions}>No Transactions!</div>}
        </div>

    )
}