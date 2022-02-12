import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import AuthNavigator from './src/navigations/AuthNavigator';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';
import HomeNavigator from './src/navigations/BottomTabNavigator';
import LoginFormScreen from './src/screens/account/LoginFormScreen';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
}

