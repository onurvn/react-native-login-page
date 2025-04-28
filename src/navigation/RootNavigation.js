import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import UserStack from './UserStack'
import app from '../../firebaseConfig'

const RootNavigation = () => {
    const isAuth = false;

    return (
        <NavigationContainer>
            {
                !isAuth
                    ? <AuthStack />
                    : <UserStack />
            }
        </NavigationContainer>
    )
}

export default RootNavigation

