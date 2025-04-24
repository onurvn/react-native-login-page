import React from 'react'
import LoginPage from './src/screens/LoginPage'
import SignUpPage from './src/screens/SignUpPage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen component={LoginPage} name='Login' />
        <Stack.Screen component={SignUpPage} name='SignUp' />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

