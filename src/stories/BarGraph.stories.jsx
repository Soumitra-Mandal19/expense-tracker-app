import { BarGraph } from "../components/BarGraph/BarGraph";
import { TrackerContextProvider } from "../providers/TrackerContextProvider";
export default {
    title: "Components/BarGraph",
    component: BarGraph,
    
    render: (args) =>  <TrackerContextProvider><BarGraph {...args}  /></TrackerContextProvider>
}



export const Default = {};