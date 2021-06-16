import React from 'react';
import {Platform} from 'react-native'
import {MaterialIcons, Feather} from '@expo/vector-icons'
import { useTheme } from 'styled-components';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
// import { Resume } from '../screens/Resume';
import { PublicationDetails } from '../screens/PublicationDetails';
import { Feed } from '../screens/Feed';
import { RegisterOccorrence } from '../screens/RegisterOccurrence';
import { Perfil } from '../screens/Perfil';
import { MyPublicationsAndSaves } from '../screens/MyPublicationsAndSaves';
import { Notifications } from '../screens/Notifications';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {

    const theme = useTheme();

    return (
        <Navigator
            tabBarOptions={{
                activeTintColor: theme.colors.secondary,
                inactiveTintColor: theme.colors.text,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 88,
                }
            }}
        >
            <Screen
                name="Feed"
                component={Feed}
                options={{
                    title: '',
                    tabBarIcon: (({ size, color}) => (
                        <MaterialIcons
                            name="home-filled"
                            size={size}
                            color={color}
                        />

                    ))
                }}
            />
            <Screen
                name="RegisterOccorrence"
                component={RegisterOccorrence}
                options={{
                    title: '',
                    tabBarIcon: (({ size, color}) => (
                        <MaterialIcons
                            name="add"
                            size={size}
                            color={color}
                        />

                    ))
                }}
            />
            <Screen
                name="PublicationDetails"
                component={PublicationDetails}
                options={{
                    title: '',
                    tabBarIcon: (({ size, color}) => (
                        <MaterialIcons
                            name="pie-chart"
                            size={size}
                            color={color}
                        />

                    ))
                }}
            />
            
            <Screen
                name="Publi"
                component={MyPublicationsAndSaves}
                options={{
                    title: '',
                    tabBarIcon: (({ size, color}) => (
                        <MaterialIcons
                            name="layers"
                            size={size}
                            color={color}
                        />

                    ))
                }}
            />
            <Screen
                name="Notifications"
                component={Notifications}
                options={{
                    title: '',
                    tabBarIcon: (({ size, color}) => (
                        <Feather
                            name="bell"
                            size={size}
                            color={color}
                        />

                    ))
                }}
            />
            <Screen
                name="Perfil"
                component={Perfil}
                options={{
                    title: '',
                    tabBarIcon: (({ size, color}) => (
                        <Feather
                            name="user"
                            size={size}
                            color={color}
                        />

                    ))
                }}
            />
        </Navigator>

    )
}