import { createDrawerNavigator } from "react-navigation"
import Welcome from "../../screens/Welcome";
import EditProfile from "../../screens/EditProfile"
import Settings from "../../screens/Setings"
import SideBar from "./SideBar"

export const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Welcome,
        
    },
    EditProfile: {
        screen: EditProfile,
    },
    Settings:Settings
},
    {
        initialRouteName: "Home",
        contentComponent: SideBar,
        drawerType: "slide",
    }
)