import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import AccountFormScreen from '../screens/account/AccountFormScreen';
import AnnouncementDetailsScreen from '../screens/announcement/AnnouncementDetailsScreen';
import SlotDetailsScreen from '../screens/slot/SlotDetailsScreen';
import SlotsScreen from '../screens/slot/SLotsScreen';
import ModeOfPaymentsScreen from '../screens/modeOfPayment/ModeOfPayments';
import ContactScreen from '../screens/contact/ContactsScreen';
import MenusScreen from '../screens/menu/MenusScreen';

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
            />

            <Stack.Screen
                name={routes.SLOT_DETAILS}
                component={SlotDetailsScreen}
            />

            <Stack.Screen
                name={routes.SLOT_LOCATOR}
                component={SlotsScreen}
            />

            <Stack.Screen
                name={routes.MODE_OF_PAYMENTS}
                component={ModeOfPaymentsScreen}
            />

            <Stack.Screen
                name={routes.CONTACTS}
                component={ContactScreen}
            />
        </Stack.Navigator>
    );
}

export default MenuNavigator;
