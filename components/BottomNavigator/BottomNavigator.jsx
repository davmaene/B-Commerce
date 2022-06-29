import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../screens/Home/Home.Screen';
import { NotificationsScreen } from '../../screens/Notifications/Notifications.Screen';
import { PanierScreen } from '../../screens/Panier/Panier.Screen';
import { MoiScreen } from '../../screens/Moi/Moi.Screen';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Acceuil' component={HomeScreen} />
            <Tab.Screen name='Notification' component={NotificationsScreen} />
            <Tab.Screen name='Panier' component={PanierScreen} />
            <Tab.Screen name='Moi' component={MoiScreen} />
        </Tab.Navigator>
    )
}