import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import * as Google from 'expo-google-app-auth';
import * as AppleAuthentication from 'expo-apple-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    password: string;
    name: string;
    email: string;
    avatar_url?: string;
    cpf?: string;
    city?: string;
    state?: string;
    token?: string;
    refresh_token?: string;
}

interface IAuthContextData {
    user: User;
    SignInWithGoogle(): Promise<void>;
    SignInWithApple(): Promise<void>;
    SignOut(): Promise<void>;
    userCompleteRegister: (cpf: string, city: string, state: string) => Promise<void>;
    userStorageLoading: boolean;
}

export const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

    const [ user, setUser ] = useState<User>({} as User);
    const [ userStorageLoading, setUserStorageLoading ] = useState(true);

    const userStorageKey = '@lysei:user';

    async function authentication(email: string){
        try {
            const response = await api.post('sessions', {
                email: email,
                password: ''
            });

            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

            return response.data;
            
        } catch (error) {
            if(error === 'Request failed with status code 400'){
                return false;
            }else{
                throw new Error(error);
            }
        }
    }

    async function createUser(email: string, name: string, photoUrl: string, token: string, urefresh_token: string){
        try {
            const user = {
                    password: '',
                    name: name,
                    email: email,
                    avatar_url: photoUrl,
                    cpf: '',
                    city: '',
                    state: '',
                    token: token,
                    refresh_token: urefresh_token,
            }

            const response = await api.post('users', user);

            setUser(user);
            await AsyncStorage.setItem(userStorageKey, JSON.stringify(user));

            return response;
            
        } catch (error) {
            if(error === 'Request failed with status code 400'){
                return false;
            }else{
                throw new Error(error);
            }
        }
    }

    async function loadUser(token: string, refresh_token: string){
        try {
            const response = await api.get('users/profile');

            console.log(response.data)

            const userLogged = {
                password: '',
                email: response.data.email,
                name: response.data.name,
                photo: response.data.avatar_url,
                cpf: response.data.cpf,
                city: response.data.city,
                state: response.data.state,
                token: token,
                refresh_token: refresh_token
            };

            setUser(userLogged);
            await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
            
        } catch (error) {
            throw new Error(error);
        }
    }

    async function userCompleteRegister(cpf: string, city: string, state: string){

        try {

            const userUpdate = {
                name: user.name,
                cpf: cpf,
                email: user.email,
                city: city,
                state: state
            };

            const response = await api.patch('users', userUpdate);

            const userLogged = {
                password: '',
                email: user.email,
                name: user.name,
                avatar_url: user.avatar_url,
                cpf: cpf,
                city: city,
                state: state,
                token: user.token,
                refresh_token: user.refresh_token
            };

            setUser(userLogged);
            await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
            
        } catch (error) {
            throw new Error(error);
        }
    }

    async function SignInWithGoogle() {
        try {
            const result = await Google.logInAsync({
                iosClientId: '336611315171-bpcgtacgkdb1vaghnpfjkvsv2mbmrfc1.apps.googleusercontent.com',
                androidClientId: '336611315171-7l7mjltepje159b8hjbcv04piond6ade.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            })

            if (result.type === 'success') {
                const userRegister = await authentication(result.user.email!);
                
                if(userRegister === false){
                    await createUser(result.user.email!, result.user.name!, result.user.photoUrl!, userRegister.token, userRegister.refresh_token);
                }else{
                    await loadUser(userRegister.token, userRegister.refresh_token);
                }
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    async function SignInWithApple() {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ]
            })

            if (credential) {
                const userRegister = await authentication(credential.email!);
                
                if(userRegister === false){
                    await createUser(credential.email!, credential.fullName!.givenName!, '', userRegister.token, userRegister.refresh_token);
                }else{
                    await loadUser(userRegister.token, userRegister.refresh_token);
                }
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

            if (userStorage) {
                const userLogged = JSON.parse(userStorage) as User;
                setUser(userLogged);
            }

            setUserStorageLoading(false);
        }

        loadUserStorageDate();
    }, []);

    return (
        <AuthContext.Provider value={
            { user, SignInWithGoogle, SignInWithApple, SignOut, userStorageLoading, userCompleteRegister }
        }>
            {children}
        </AuthContext.Provider>

    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }
