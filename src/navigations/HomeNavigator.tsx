import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';

import AnnouncementNavigator from './AnnouncementNavigator';
import HomeScreen from '../screens/account/HomeScreen';
import InvoiceNavigator from './InvoiceNavigator';
import PaymentNavigator from './PaymentNavigator';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name={routes.HOME}
            component={HomeScreen}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="AnnouncementNavigator"
            component={AnnouncementNavigator}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="InvoicesNavigator"
            component={InvoiceNavigator}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="PaymentsNavigator"
            component={PaymentNavigator}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

export default HomeNavigator;
