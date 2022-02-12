import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';

import AnnouncementsScreen from '../screens/announcement/AnouncementsScreen';
import AnnouncementDetailsScreen from '../screens/announcement/AnnouncementDetailsScreen';

const Stack = createNativeStackNavigator();

const AnnouncementNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name={routes.ANNOUNCEMENTS}
                component={AnnouncementsScreen}
                options={{ title: "Announcements" }}
            />

            <Stack.Screen
                name={routes.ANNOUNCEMENT_DETAILS}
                component={AnnouncementDetailsScreen}
                options={{ title: "Announcement" }}
            />
        </Stack.Navigator>
    );
}

export default AnnouncementNavigator;
