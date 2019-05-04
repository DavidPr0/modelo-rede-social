import { createSwitchNavigator, createAppContainer } from "react-navigation";
import {FlingGestureHandler, Directions, State} from 'react-native-gesture-handler';

import Login from "./pages/Login";

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
    })

);

export default Routes;