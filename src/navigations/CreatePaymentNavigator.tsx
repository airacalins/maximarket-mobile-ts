import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';

import InvoiceDetailsScreen from '../screens/invoice/InvoiceDetailsScreen';
import PaymentFormScreen from '../screens/payment/PaymentFormScreen';

const Stack = createNativeStackNavigator();

const CreatePaymentNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={routes.INVOICE_DETAILS}
                component={InvoiceDetailsScreen}
            />

            <Stack.Screen
                name={routes.PAYMENT_FORM}
                component={PaymentFormScreen}
            />
        </Stack.Navigator>
    );
}

export default CreatePaymentNavigator;
