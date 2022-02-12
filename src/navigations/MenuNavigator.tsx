import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from './routes';
import AccountFormScreen from '../screens/account/AccountFormScreen';
import ContactScreen from '../screens/contact/ContactsScreen';
import SlotDetailsScreen from '../screens/slot/SlotDetailsScreen';
import SlotsScreen from '../screens/slot/SLotsScreen';
import MenusScreen from '../screens/menu/MenusScreen';
import ModeOfPaymentsScreen from '../screens/modeOfPayment/ModeOfPayments';

const Stack = createNativeStackNavigator();

const MenuNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name={routes.MENU}
                component={MenusScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name={routes.ACCOUNT_FORM}
                component={AccountFormScreen}
                options={{ title: "My Account" }}
            />

            <Stack.Screen
                name={routes.SLOT_DETAILS}
                component={SlotDetailsScreen}
                options={{ title: "My Store" }}

            />

            <Stack.Screen
                name={routes.SLOT_LOCATOR}
                component={SlotsScreen}
                options={{ title: "Slot Locator" }}
            />

            <Stack.Screen
                name={routes.MODE_OF_PAYMENTS}
                component={ModeOfPaymentsScreen}
                options={{ title: "Mode of Payments" }}
            />

            <Stack.Screen
                name={routes.CONTACTS}
                component={ContactScreen}
                options={{ title: "Contact Us" }}
            />
        </Stack.Navigator>
    );
}

export default MenuNavigator;
