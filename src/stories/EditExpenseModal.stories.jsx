import { EditExpenseModal } from "../components/EditExpenseModal/EditExpenseModal";
import { fn } from "@storybook/test";
import { TrackerContextProvider } from "../providers/TrackerContextProvider";
export default {
    title: "Components/EditExpenseModal",
    component: EditExpenseModal,
    args: {
        expense: {
            title: "Samosa",
        date: "2024-12-08",
        amount: 150,
        category: "Food",
        id: 1,
        },
        onCancelButtonClicked: fn(),
    },
    render: (args) =>  <TrackerContextProvider>≈<EditExpenseModal {...args}  /></TrackerContextProvider>
}



export const Default = {};
