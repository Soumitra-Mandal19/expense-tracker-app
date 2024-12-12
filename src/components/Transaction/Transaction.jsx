import { PiPizzaLight } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { GoGift } from "react-icons/go";
import { CiRollingSuitcase } from "react-icons/ci";
import styles from "./Transaction.module.css"


export const Transaction = ({title,date,amount,category,id,onDelete,onEdit}) => {

    const Icon = ()=>{
        switch (category) {
            case "Food": 
                return <PiPizzaLight className={styles.categoryIcon} />
            case "Entertainment":
                return <GoGift className={styles.categoryIcon} />
            case "Travel":
                    return <CiRollingSuitcase className={styles.categoryIcon} />    
        
            default: 
                return <CiRollingSuitcase className={styles.categoryIcon} /> 
        }
    }

    const formattedDate = date ? new Date(date) : new Date();

    return(
        <div className={styles.root}>
            <div className={styles.detail}>
                <div className={styles.categoryIconBackground} >{Icon()}</div>
                <div className={styles.detailContainer}>
                    <div className={styles.itemName}>{title}</div>
                    <div className={styles.date}>{formattedDate.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}</div>
                </div>
            </div>

            <div className={styles.amountContainer}>
                <div className={styles.amount}>₹{amount}</div>
                <div className={styles.iconContainer}>
                    <button onClick={()=>onDelete(id)} className={styles.deleteIconBackground} ><MdOutlineCancel className={styles.deleteIcon}/></button>
                    <button onClick={()=>onEdit(id)} className={styles.editIconBackground}><MdOutlineModeEditOutline className={styles.editIcon} /></button>
                </div>
            </div>
        </div>
    )
}