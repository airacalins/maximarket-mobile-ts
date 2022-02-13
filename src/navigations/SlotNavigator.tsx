import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';

import ContactScreen from '../screens/contact/ContactsScreen';
import SlotsScreen from '../screens/slot/SlotsScreen';
import SlotDetailsScreen from '../screens/slot/SlotDetailsScreen';

const Stack = createNativeStackNavigator();

const SlotNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name={routes.SLOTS}
                component={SlotsScreen}
            />

            <Stack.Screen
                name={routes.SLOT_DETAILS}
                component={SlotDetailsScreen}
            />

            <Stack.Screen
                name={routes.CONTACTS}
                component={ContactScreen}
            />
        </Stack.Navigator>
    );
}

export default SlotNavigator;
