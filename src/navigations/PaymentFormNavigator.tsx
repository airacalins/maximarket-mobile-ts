import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';

import PaymentFormScreen from '../screens/payment/PaymentFormScreen';
import PaymentDetailsScreen from '../screens/payment/PaymentDetailsScreen';

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
                name={routes.PAYMENT_DETAILS}
                component={PaymentDetailsScreen}
            />

        </Stack.Navigator>
    );
}

export default PaymentFormNavigator;
