import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';

import AnnouncementsScreen from '../screens/announcement/AnouncementsScreen';

const Stack = createNativeStackNavigator();

const AnnouncementNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name={routes.ANNOUNCEMENTS}
                component={AnnouncementsScreen}
            />


        </Stack.Navigator>
    );
}

export default AnnouncementNavigator;
