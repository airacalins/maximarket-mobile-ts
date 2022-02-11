import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';

import InvoicesScreen from '../screens/invoice/InvoicesScreen';
import CreatePaymentNavigator from './CreatePaymentNavigator';


const Stack = createNativeStackNavigator();

const InvoiceNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={routes.INVOICES}
                component={InvoicesScreen}
            />

            <Stack.Screen
                name="CreatePaymentNavigator"
                component={CreatePaymentNavigator}
            />
        </Stack.Navigator>
    );
}

export default InvoiceNavigator;
