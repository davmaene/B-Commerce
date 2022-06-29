import * as React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigator } from '../BottomNavigator/BottomNavigator';
import { SigninScreen } from '../../screens/Signin/Signin.Screen';
import { SignupScreen } from '../../screens/Signup/Signup.Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="tabs" component={BottomNavigator} />
        <Stack.Screen name="signin" component={SigninScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
      </Stack.Navigator>
    );
}