import { Home } from "../pages/home";
import { TrackerContextProvider } from "../providers/TrackerContextProvider";
export default {
    title: "Pages/Home",
    component: Home,
    render: (args) =>  <TrackerContextProvider>≈<Home {...args}  /></TrackerContextProvider>
}

export const Default = {};