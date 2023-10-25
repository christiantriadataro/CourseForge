import React from "react";
import { Text, StyleSheet} from "react-native";
import { PaperProvider } from 'react-native-paper';
import Home from "./src/screens/customer/Home";
import Register from "./src/screens/auth/Register";
import SampleFetch from "./src/screens/sampleFetch";
const App = () => {
    return (
        <PaperProvider>
            <Register/>
        </PaperProvider>
    );
};

const style = StyleSheet.create({

})


export default App;


// const Stack = createStackNavigator();
// const App = () => {
//     return (
//         <NavigationContainer>
//             {/*<SplashScreen />*/}
//             <Authen />
//             {/*<Stack.Navigator>*/}
//             {/*<Stack.Screen name="Authen" component={Authen} />*/}
//             {/*<Stack.Screen name="ColorPalette" component={ColorPalette} />*/}
//             {/*</Stack.Navigator>*/}
//
//         </NavigationContainer>
//     );
// };