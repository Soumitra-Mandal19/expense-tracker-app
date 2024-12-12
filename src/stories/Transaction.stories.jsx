import { TrackerContextProvider } from "../providers/TrackerContextProvider";
import { Transaction } from "./../components/Transaction/Transaction";
import { fn } from "@storybook/test";
export default {
    title: "Components/Transaction",
    component: Transaction,
    render: (args) =>  <TrackerContextProvider><Transaction {...args}  /></TrackerContextProvider>
}

 export const Food = {
    args: {
        title: "Samosa",
        date: "March 20, 2024",
        amount: 150,
        category: "Food",
        id: 1,
        onEdit: fn(),
        onDelete: fn(),
        
     }
 };

export const Entertainment = {
    args: {
        title: "Movie",
        date: "March 21, 2024",
        amount: 300,
        category: "Entertainment",
        id: 2,
        onEdit: fn(),
        onDelete: fn(),
        
     }
};

export const Travel = {
    args: {
        title: "Auto",
        date: "March 22, 2024",
        amount: 50,
        category: "Travel",
        id: 3,
        onEdit: fn(),
        onDelete: fn(),
        
     }
};

