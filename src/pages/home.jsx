import { PieChart } from '../components/PieChart/PieChart';
import { BarGraph } from '../components/BarGraph/BarGraph';
import { WalletExpense } from '../components/WalletExpense/WalletExpense';
import { TransactionList } from '../components/TransactionList/TransactionList';
import styles from './home.module.css';

export const Home = () => {

    return (
        <div className={styles.root}>
            <div className={styles.expenseTitle}>Expense Tracker</div>
            <div className={styles.topRow}>
                <div><WalletExpense type="wallet" /></div>
                <div><WalletExpense type="expense" /></div>
                <div><PieChart /></div>
            </div>
            <div className={styles.bottomRow}>
                <div className={styles.transactionsContainer}>
                    <div className={styles.transactionTitle}>Recent Transactions</div>
                    <div className={styles.transactions}><TransactionList /></div>
                </div>
                <div className={styles.barGraphContainer}>
                    <div className={styles.transactionTitle}>Top Expenses</div>
                    <div className={styles.barGraph}><BarGraph /></div>
                </div>
            </div>
        </div>
    )
}