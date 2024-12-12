import { AddBalanceModal } from "../components/AddBalanceModal/AddBalanceModal";
import { fn } from "@storybook/test";
import { TrackerContextProvider } from "../providers/TrackerContextProvider";
import { SnackbarProvider } from "notistack";
export default {
    title: "Components/AddBalanceModal",
    component: AddBalanceModal,
    args: {
        handleAddBalanceClick: fn(),
        onCancelButtonClicked: fn(),
    },
    render: (args) =>  <TrackerContextProvider><SnackbarProvider><AddBalanceModal {...args}  /></SnackbarProvider></TrackerContextProvider>
}



export const Default = {};
