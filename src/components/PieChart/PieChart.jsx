import { PieChart as Pie, pieArcLabelClasses, pieArcClasses } from '@mui/x-charts/PieChart';
import styles from "./PieChart.module.css";
import { useContext } from 'react';
import { TrackerContext } from '../../providers/TrackerContextProvider';

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  legend: { hidden: true },
};




export const PieChart = () => {

  const { expenses } = useContext(TrackerContext);

  const data = [{
    label: "Entertainment",
    value: expenses.filter((data) => data.category === "Entertainment").map((item) => item.amount).reduce((accumulator, currentValue) => accumulator + currentValue, 0),
    color: "#FF9304"
  }, {
    label: "Travel",
    value: expenses.filter((data) => data.category === "Travel").map((item) => item.amount).reduce((accumulator, currentValue) => accumulator + currentValue, 0),
    color: "#FDE006"
  }, {
    label: "Food",
    value: expenses.filter((data) => data.category === "Food").map((item) => item.amount).reduce((accumulator, currentValue) => accumulator + currentValue, 0),
    color: "#A000FF"
  }];

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  if (expenses.length === 0) return <div className={styles.noTransactions}>No Transactions!</div>

  return (
    <div className={styles.root}>
      <Pie
        series={[
          {
            outerRadius: 100,
            data,
            arcLabel: getArcLabel,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'white',
            fontSize: 14,
            fontFamily: "Ubuntu",
          },
          [`& .${pieArcClasses.root}`]: {
            stroke: "none"
          },
        }}
        {...sizing}
      />
      <div className={styles.labelContainer}>
        <div className={styles.label}>
          <div className={styles.foodLabel}></div>
          <div>Food</div>
        </div>
        <div className={styles.label}>
          <div className={styles.entertainmentLabel}></div>
          <div>Entertainment</div>
        </div>
        <div className={styles.label}>
          <div className={styles.travelLabel}></div>
          <div>Travel</div>
        </div>
      </div>
    </div>

  )
}