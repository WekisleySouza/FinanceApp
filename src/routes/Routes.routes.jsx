import { NavigationContainer } from "@react-navigation/native"
import StackRoute from "../routes/Stack.routes"

export default function Routes(){
    return (
        <NavigationContainer>
            <StackRoute />
        </NavigationContainer>
    )
}