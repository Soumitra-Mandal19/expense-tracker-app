import * as React from "react";
import {
    Dialog,
    DialogSurface,
    DialogBody,
    DialogContent,
} from "@fluentui/react-components";
import styles from "./EditExpenseModal.module.css"
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useContext } from "react";
import { TrackerContext } from "../../providers/TrackerContextProvider";

export const EditExpenseModal = ({ expense, onCancelButtonClicked, handleAddExpenseClick }) => {

    const [title, setTitle] = useState(expense.title);
    const [price, setPrice] = useState(expense.amount);
    const [selectedCategory, setselectedCategory] = useState(expense.category);
    const [date, setDate] = useState(expense.date);

    const { calculatedExpenses, balance, setNewBalance } = useContext(TrackerContext);

    const onClick = () => {

        let isError = false;
        const priceNum = +price;

        if (!title || title.trim().length === 0) {
            enqueueSnackbar("You must provide a valid Title.")
            isError = true;
        }

        if (!price || price.toString().trim().length === 0) {
            enqueueSnackbar("You must provide a valid Price.")
            isError = true;
        }

        if (!selectedCategory || selectedCategory.trim().length === 0) {
            enqueueSnackbar("You must provide a valid Category.")
            isError = true;
        } else if (!(selectedCategory === "Food" || selectedCategory === "Entertainment" || selectedCategory === "Travel")) {
            enqueueSnackbar("Category must be any one of these: Entertainment, Food or Travel");
            isError = true;
        }

        if (!date) {
            enqueueSnackbar("You must provide a valid date.");
            isError = true;
        }
        const difference = expense.amount - priceNum;
        if (!isError && price) {


            if (balance < ((difference) + calculatedExpenses)) {
                enqueueSnackbar(`You cannot spend more than your balance. You are short of ₹${Math.abs(balance - ((+price) + calculatedExpenses))}.`);
                isError = true;
            }
        }
        if (isError === false) {
            handleAddExpenseClick(
                {
                    title,
                    date,
                    amount: priceNum,
                    category: selectedCategory,
                    id: expense.id,
                }
            );
            setNewBalance(difference);
        }
    }

    return (
        <Dialog open>
            <DialogSurface >
                <DialogBody className={styles.dialogBody}>
                    <DialogContent >
                        <div className={styles.root}>
                            <div className={`${styles.row} ${styles.title}`}>Edit Expenses</div>
                            <div className={styles.row}>
                                <div><input className={styles.input} placeholder="Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input></div>
                                <div><input className={styles.input} placeholder="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input></div>
                            </div>
                            <div className={styles.row}>
                                <div><select className={styles.select} placeholder="Select Category" value={selectedCategory} onChange={(e) => setselectedCategory(e.target.value)}>
                                    <option >Select Category</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Food">Food</option>
                                    <option value="Travel">Travel</option>
                                </select></div>
                                <div><input className={styles.input} placeholder="dd/mm/yyyy" type="date" value={date} onChange={(e) => setDate(e.target.value)}></input></div>
                            </div>
                            <div className={styles.row}>
                                <div><button onClick={onClick} className={styles.expenseButton}>Add Expense</button></div>
                                <div><button onClick={onCancelButtonClicked} className={styles.cancelButton}>Cancel</button></div>
                            </div>
                        </div>
                    </DialogContent>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    )
}