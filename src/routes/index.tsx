import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { UserRegisterRoutes } from './userRegister.routes';
import { AppRoutes } from './app.routes';

import { useAuth } from '../hooks/auth'

export function Routes() {

    const { user } = useAuth();
    return (
        <NavigationContainer>
            {user.token? 
                user.cpf != '' ? <AppRoutes /> : <UserRegisterRoutes /> 
                : <AuthRoutes /> }
        </NavigationContainer>
    )
}