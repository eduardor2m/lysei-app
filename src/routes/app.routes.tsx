import React from 'react';
import { Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FeedRoutes } from './feed.routes';
import { RegisterRoutes } from './register.routes';
import { PublicationsRoutes } from './publications.routes';
import { Notifications } from '../screens/Notifications';
import { Perfil } from '../screens/Perfil';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {

    const theme = useTheme();

    return (
        <Navigator
            tabBarOptions={{
                activeTintColor: theme.colors.primary,
                inactiveTintColor: theme.colors.text,
                showLabel: false,
                style: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 80,
                    backgroundColor: theme.colors.background,
                    borderTopWidth: 0,
                    elevation: 0
                }
            }}
        >
            <Screen
                name="FeedRoutes"
                component={FeedRoutes}
                options={{
                    tabBarIcon: (({ color }) => (
                        <Feather
                            name="home"
                            size={20}
                            color={color}
                        />

                    ))
                }}
            />
            <Screen
                name="RegisterRoutes"
                component={RegisterRoutes}
                options={{
                    tabBarIcon: (({ color }) => (
                        <Feather
                            name="plus"
                            size={20}
                            color={color}
                        />

                    ))
                }}
            />
            <Screen
                name="Publi"
                component={PublicationsRoutes}
                options={{
                    tabBarIcon: (({ color }) => (
                        <Feather
                            name="layers"
                            size={20}
                            color={color}
                        />

                    ))
                }}
            />
            <Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarIcon: (({ color }) => (
                        <Feather
                            name="bell"
                            size={20}
                            color={color}
                        />

                    ))
                }}
            />
            <Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: (({ color }) => (
                        <Feather
                            name="user"
                            size={20}
                            color={color}
                        />

                    ))
                }}
            />
        </Navigator>

    )
}