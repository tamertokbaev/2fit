import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import RootStackNavigator from "./navigation/RootStackNavigator";

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator/>
    </NavigationContainer>
  );
}

export default App
