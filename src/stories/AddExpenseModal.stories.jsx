import { AddExpenseModal } from "../components/AddExpenseModal/AddExpenseModal";
import { fn } from "@storybook/test";
import { TrackerContextProvider } from "../providers/TrackerContextProvider";
import { SnackbarProvider } from "notistack";
export default {
    title: "Components/AddExpenseModal",
    component: AddExpenseModal,
    args: {
        onCancelButtonClicked: fn(),
        handleAddExpenseClick: fn(),
    },
    render: (args) =>  <TrackerContextProvider><SnackbarProvider><AddExpenseModal {...args}  /></SnackbarProvider></TrackerContextProvider>
}

export const Default = {};
