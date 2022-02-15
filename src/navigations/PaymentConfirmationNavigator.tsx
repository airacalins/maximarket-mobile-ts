import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';

import InvoicesScreen from '../screens/invoice/InvoicesScreen';
import PaymentReceiptScreen from '../screens/payment/PaymentReceiptScreen';

const Stack = createNativeStackNavigator();

const PaymentConfirmationNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={routes.PAYMENT_RECEIPT}
                component={PaymentReceiptScreen}
                options={{
                    headerShown: false,
                    title: "Payment Receipt"
                }}
            />

            <Stack.Screen
                name={routes.INVOICES}
                component={InvoicesScreen}
                options={{
                    title: "Invoices"
                }}
            />
        </Stack.Navigator>
    );
}

export default PaymentConfirmationNavigator;
