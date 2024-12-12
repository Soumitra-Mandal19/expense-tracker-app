import { TrackerContextProvider } from "../providers/TrackerContextProvider";
import { TransactionList } from "./../components/TransactionList/TransactionList";
export default {
    title: "Components/TransactionList",
    component: TransactionList,
    render: (args) => <TrackerContextProvider><TransactionList {...args} /></TrackerContextProvider>
}

export const Default = {};


 
