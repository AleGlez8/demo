import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderBackButton } from "@react-navigation/elements";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import AleScreen from "./src/screens/AleScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton onPress={() => navigation.goBack()} />
            ),
          })}
        />
        <Stack.Screen 
          name="Ale" 
          component={AleScreen} 
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton onPress={() => navigation.goBack()} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
