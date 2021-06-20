import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import { Feed } from '../screens/Feed';
import { ViewOccurrence } from '../screens/ViewOccurrence';
import { ViewOccurrenceMap } from '../screens/ViewOccurrenceMap';

const {Navigator, Screen} = createStackNavigator();

export function FeedRoutes() {
    return(
        <Navigator headerMode="float" screenOptions={{headerShown: false}} initialRouteName="Feed">
            <Screen
                name="Feed"
                component={Feed}
            />
            <Screen
                name="ViewOccurrence"
                component={ViewOccurrence}
            />
            <Screen
                name="ViewOccurrenceMap"
                component={ViewOccurrenceMap}
            />
        </Navigator>
    )
}