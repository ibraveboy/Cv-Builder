import { createStackNavigator } from 'react-navigation'

import SignIn from "../../screens/SignIn"
import SignUp from "../../screens/SignUp"
import {DrawerNavigator} from "./drawerNavigation"

export const mainNavigation = createStackNavigator({
    Welcome: {
        screen: DrawerNavigator,
        navigationOptions: {
            header:null
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions:{
            header:null
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions:{
            header:null
        },
    }
}, {
    initialRouteName:"Welcome"
})