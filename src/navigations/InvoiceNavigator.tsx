import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';

import InvoicesScreen from '../screens/invoice/InvoicesScreen';
import CreatePaymentNavigator from './CreatePaymentNavigator';
import InvoiceDetailsScreen from '../screens/invoice/InvoiceDetailsScreen';
import PaymentFormScreen from '../screens/payment/PaymentFormScreen';
import PaymentFormNavigator from './PaymentFormNavigator';


const Stack = createNativeStackNavigator();

const InvoiceNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={routes.INVOICES}
                component={InvoicesScreen}
            />

            <Stack.Screen
                name={routes.INVOICE_DETAILS}
                component={InvoiceDetailsScreen}
                options={{
                    title: "Invoice"
                }}
            />

            <Stack.Screen
                name={"PaymentFormNavigator"}
                component={PaymentFormNavigator}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    );
}

export default InvoiceNavigator;
