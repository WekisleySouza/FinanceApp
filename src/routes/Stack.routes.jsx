import { createNativeStackNavigator } from "@react-navigation/native-stack"
import TabRoute from "../routes/Tab.routes";

const Stack = createNativeStackNavigator();

const getScreens = () => {
    const screens = [
        { name: "TabRoute", component: TabRoute }
    ]

    return screens.map((screen, index) => <Stack.Screen key={index} name={screen.name} component={screen.component} />)
}

export default function StackRoute(){

    return (
        <Stack.Navigator initialRouteName="TabRoute" >
            {getScreens()}
        </Stack.Navigator>
    )
}