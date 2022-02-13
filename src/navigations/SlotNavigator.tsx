import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';

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
        </Stack.Navigator>
    );
}

export default SlotNavigator;
