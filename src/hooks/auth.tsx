import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';

import * as Google from 'expo-google-app-auth';
import * as AppleAuthentication from 'expo-apple-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface AuthProviderProps {
    children: ReactNode;

}

interface User{
    id: string;
    name: string;
    email: string;
    photo?: string;
}

interface IAuthContextData {
    user: User;
    SignInWithGoogle(): Promise<void>;
    SignInWithApple(): Promise<void>;
    SignOut(): Promise<void>;
    userStorageLoading: boolean;
}

export const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({children}: AuthProviderProps){

    const [user, setUser] = useState<User>({} as User);
    const [userStorageLoading, setUserStorageLoading] = useState(true)

    const userStorageKey = '@lysei:user'

    async function SignInWithGoogle(){
        try {
            const result = await Google.logInAsync({
                iosClientId: '336611315171-bpcgtacgkdb1vaghnpfjkvsv2mbmrfc1.apps.googleusercontent.com',
                androidClientId: '336611315171-7l7mjltepje159b8hjbcv04piond6ade.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            })

            if(result.type === 'success'){
                const userLogged= {
                    id: String(result.user.id),
                    email: result.user.email!,
                    name: result.user.name!,
                    photo: result.user.photoUrl!

                };

                setUser(userLogged);
                await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
                console.log(userLogged)
            }


        } catch (error) {
            throw new Error(error);
            
            
        }
    }

    async function SignInWithApple(){
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ]
            })

            if(credential){
                const name = credential.fullName!.givenName!;
                const photo = `https://ui-avatars.com/api/?name=${name}&length=1`;
                const userLogged= {
                    id: String(credential.user),
                    email: credential.email!,
                    name,
                    photo,

                };
                setUser(userLogged);
                await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
                console.log(userLogged)
            }
            
        } catch (error) {
            throw new Error(error);
            
            
        }
    }


    async function SignOut() {
        setUser({} as User);
        await AsyncStorage.removeItem(userStorageKey);
    }

    useEffect(() => {
        async function loadUserStorageDate() {
            const userStorage = await AsyncStorage.getItem(userStorageKey);

            if(userStorage){
                const userLogged = JSON.parse(userStorage) as User;
                setUser(userLogged);
            }

            setUserStorageLoading(false)

        }

        loadUserStorageDate();
    }, [])
    return (
        <AuthContext.Provider value={
            {user, SignInWithGoogle, SignInWithApple, SignOut, userStorageLoading}
            }>
            {children}
        </AuthContext.Provider>

    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context

}

export {AuthProvider, useAuth}
