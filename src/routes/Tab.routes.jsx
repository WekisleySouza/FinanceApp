import { createBottomTabNavigator } from "@react-navigation/bottom-tabs" 

import Home from "../views/TabScrens/Screen1";
import Home2 from "../views/TabScrens/Screen2"
import Home3 from "../views/TabScrens/Screen2"
import Home4 from "../views/TabScrens/Screen2"
import Home5 from "../views/TabScrens/Screen2"
import Plus from "../views/TabScrens/Screen3/Plus";
import MyTabBar from "../views/TabScrens/MyTabBar";

const Tab = createBottomTabNavigator();

export default function TabRoute(){
    return (
        <Tab.Navigator initialRouteName="Home"
            // screenOptions={({ focused, color, size }) => ({
            //     tabBarStyle: {
            //         backgroundColor: '#121212',
            //         borderTopColor: 'transparent',
            //         paddingBottom: 5,
            //         paddingTop: 5,
            //     },
            //     tabBarActiveTintColor: '#FFF',
            //     tabBarInactiveTintColor: '#474040',
            // })}
            tabBar={(props) => <MyTabBar {...props} />}
        >
            <Tab.Screen
                name='Home2' 
                component={Home2}
                options={{}}
            />
            <Tab.Screen
                name='Home3' 
                component={Home3}
                options={{}}
            />
            <Tab.Screen
                name='Home' 
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, size, color }) => (
                        <Plus color={color} size={size} focused={focused} />
                    )
                }}
            />
            <Tab.Screen
                name='Home4' 
                component={Home4}
                options={{}}
            />
            <Tab.Screen
                name='Home5' 
                component={Home5}
                options={{}}
            />
        </Tab.Navigator>
    )
}