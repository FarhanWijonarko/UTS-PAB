import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './Screen/HomePage';
import DetailPage from './Screen/DetailPage';
import PaymentPage from './Screen/PaymentPage';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{ headerShown:false }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="PaymentPage" component={PaymentPage} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
