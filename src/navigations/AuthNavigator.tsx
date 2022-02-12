import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';

import LoginFormScreen from '../screens/account/LoginFormScreen';
import SlotsScreen from '../screens/slot/SlotsScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
            name={routes.LOGIN}
            component={LoginFormScreen}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name={routes.SLOT_LOCATOR}
            component={SlotsScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

export default AuthNavigator;
