import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';

import PaymentFormScreen from '../screens/payment/PaymentFormScreen';
import PaymentReceiptScreen from '../screens/payment/PaymentReceiptScreen';

const Stack = createNativeStackNavigator();

const PaymentFormNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={routes.PAYMENT_FORM}
                component={PaymentFormScreen}
                options={{
                    title: "Payment Form"
                }}
            />

            <Stack.Screen
                name={routes.PAYMENT_RECEIPT}
                component={PaymentReceiptScreen}
                options={{
                    headerShown: false,
                    title: "Payment Receipt"
                }}
            />

        </Stack.Navigator>
    );
}

export default PaymentFormNavigator;
