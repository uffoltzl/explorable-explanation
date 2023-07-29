import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/Home/Home";
import { DepthZoom } from "./src/DepthZoom/DepthZoom";
import { DetectLetters } from "./src/DetectLetters/DetectLetters";

export type RootStackParamList = {
  Home: undefined;
  DepthZoom: undefined;
  DetectLetters: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DepthZoom" component={DepthZoom} />
        <Stack.Screen name="DetectLetters" component={DetectLetters} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
