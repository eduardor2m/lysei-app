import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import { MyPublicationsAndSaves } from '../screens/MyPublicationsAndSaves';
import { ViewOccurrence } from '../screens/ViewOccurrence';
import { ViewOccurrenceMap } from '../screens/ViewOccurrenceMap';

const {Navigator, Screen} = createStackNavigator();

export function PublicationsRoutes() {
    return(
        <Navigator headerMode="float" screenOptions={{headerShown: false}} initialRouteName="MyPublicationsAndSaves">
            <Screen
                name="MyPublicationsAndSaves"
                component={MyPublicationsAndSaves}
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