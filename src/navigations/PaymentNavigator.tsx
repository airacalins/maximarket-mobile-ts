import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';

import PaymentsScreen from '../screens/payment/PaymentsScreen';
import PaymentDetailsScreen from '../screens/payment/PaymentDetailsScreen';

const Stack = createNativeStackNavigator();

const PaymentNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name={routes.PAYMENTS}
                component={PaymentsScreen}
            />

            <Stack.Screen
                name={routes.PAYMENT_DETAILS}
                component={PaymentDetailsScreen}
            />


        </Stack.Navigator>
    );
}

export default PaymentNavigator;
