import * as React from "react";
import {
    Dialog,
    DialogSurface,
    DialogBody,
    DialogContent,
} from "@fluentui/react-components";
import styles from "./AddBalanceModal.module.css"
import { useState } from "react";
import { enqueueSnackbar } from "notistack";


export const AddBalanceModal = ({ onCancelButtonClicked, handleAddBalanceClick }) => {

    const [price, setPrice] = useState();

    const onClick = () => {
        if (price == null || isNaN(parseInt(price))) {
            enqueueSnackbar("You must provide a valid income amount");
            return;
        }

        handleAddBalanceClick(+price);
    }

    return (
        <Dialog open>
            <DialogSurface >
                <DialogBody className={styles.dialogBody}>
                    <DialogContent>
                        <div className={styles.root}>
                            <div className={`${styles.title}`}>Add Balance</div>
                            <div className={styles.row}>
                                <div><input className={styles.input} placeholder="Income Amount" type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input></div>
                                <div><button onClick={onClick} className={styles.expenseButton}>Add Balance</button></div>
                                <div><button onClick={onCancelButtonClicked} className={styles.cancelButton}>Cancel</button></div>
                            </div>
                        </div>
                    </DialogContent>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    )
}