import { WalletExpense } from "./../components/WalletExpense/WalletExpense";
import { fn } from "@storybook/test";
import { TrackerContextProvider } from "../providers/TrackerContextProvider";

export default {
    title: "Components/WalletExpense",
    component: WalletExpense,
    render: (args) => <TrackerContextProvider><WalletExpense {...args}  /></TrackerContextProvider>
}

export const WalletBalance = {
    args : {
        type : "wallet",
        onClick : fn()
    }
};

export const Expenses = {
    args : {
        type : "expense",
        onClick : fn()
    }
};

