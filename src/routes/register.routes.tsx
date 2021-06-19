import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import { RegisterOccurrenceMap } from '../screens/RegisterOccurrenceMap';
import { RegisterOccurrence } from '../screens/RegisterOccurrence';
import { Success } from '../screens/Success';

const {Navigator, Screen} = createStackNavigator();

export function RegisterRoutes() {
    return(
        <Navigator headerMode="float" screenOptions={{headerShown: false}} initialRouteName="RegisterOccurrenceMap">
            <Screen
                name="RegisterOccurrenceMap"
                component={RegisterOccurrenceMap}
            />
            <Screen
                name="RegisterOccurrence"
                component={RegisterOccurrence}
            />
            <Screen
                name="Success"
                component={Success}
            />
        </Navigator>
    )
}