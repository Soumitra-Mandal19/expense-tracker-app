import { PieChart } from "../components/PieChart/PieChart";
import { TrackerContextProvider } from "../providers/TrackerContextProvider";
export default {
    title: "Components/PieChart",
    component: PieChart,
    
    render: (args) =>  <TrackerContextProvider><PieChart {...args}  /></TrackerContextProvider>
}



export const Default = {};