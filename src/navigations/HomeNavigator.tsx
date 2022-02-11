import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import React from 'react';
import MenuNavigator from './MenuNavigator';
import DashboardNavigator from './DashboardNavigator';

const HomeNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeNavigator"
                component={DashboardNavigator}
            />

            <Tab.Screen
                name="MenuNavigator"
                component={MenuNavigator}
            />
        </Tab.Navigator>
    );
}

export default HomeNavigator;
