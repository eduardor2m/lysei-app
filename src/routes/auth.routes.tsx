import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Register } from '../screens/Register';
import { AppRoutes } from './app.routes';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator headerMode="float" screenOptions={{headerShown: false}}>
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Register"
                component={Register}
            />
            <Screen
                name="AppRoutes"
                component={AppRoutes}
            />
        </Navigator>
    )
}