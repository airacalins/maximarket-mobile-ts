import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store, useAppSelecter } from './src/store/configureStore';


import AuthNavigator from './src/navigations/AuthNavigator';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';
import { useEffect } from 'react';

function App() {
  const { tenant } = useAppSelecter((state) => state.tenant)

  return (
    <NavigationContainer>
      {!!tenant ? <BottomTabNavigator /> : <AuthNavigator />}
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