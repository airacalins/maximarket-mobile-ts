import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import AuthNavigator from './src/navigations/AuthNavigator';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';
import HomeNavigator from './src/navigations/BottomTabNavigator';
import LoginFormScreen from './src/screens/account/LoginFormScreen';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/store/configureStore';


function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};