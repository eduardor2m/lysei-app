import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {SignIn} from '../screens/SignIn';
import { Register } from '../screens/Register';
import { Feed } from '../screens/Feed';
import { RegisterOccorrence } from '../screens/RegisterOccurrence';
import { Success } from '../screens/Success';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator headerMode="float">
            <Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
                
            />
            <Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
            />
            {/* <Screen
                name="Feed"
                component={Feed}
                options={{headerShown: false}}
            /> */}
            {/* <Screen
                name="RegisterOccorrence"
                component={RegisterOccorrence}
                options={{title: 'Cadastrar Ocorrência'}}
            /> */}
            <Screen
                name="Success"
                component={Success}
                options={{headerShown: false}}
            />
        </Navigator>
    )
}