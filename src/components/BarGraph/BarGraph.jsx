import { useContext } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import styles from './BarGraph.module.css';
import { TrackerContext } from '../../providers/TrackerContextProvider';

const chartSetting = {
  height: 230,
  width: 400,
};

export const BarGraph = () => {


  const { expenses = [] } = useContext(TrackerContext);

  const data = expenses.reduce((acc, currentValue) => {
    if (currentValue.category === "Entertainment") {
      acc[0].count = acc[0].count + 1;
    }
    if (currentValue.category === "Food") {
      acc[1].count = acc[1].count + 1;
    }
    if (currentValue.category === "Travel") {
      acc[2].count = acc[2].count + 1;
    }

    return acc;
  }, 
  [
    {category : "Entertainment", count: 0},
    {category : "Food", count: 0},
    {category : "Travel", count: 0}
  ])

  return (
    <div className={styles.root}>
      {expenses.length > 0 ? <BarChart
        colors={["#8784D2"]}
        borderRadius={20}
        dataset={data.sort((a, b) => a.category < b.category ? -1 : 1)}
        yAxis={[{ scaleType: 'band', dataKey: 'category', disableLine: true, disableTicks: true, hideTooltip: true, categoryGapRatio: 0.5 }]}
        series={[{ dataKey: 'count', }]}
        layout="horizontal"
        bottomAxis={null}
        {...chartSetting}
      /> : <div className={styles.noTransactions}>No Transactions!</div>}
    </div>
  );
}
