import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Loading, CustomTextInput, CustomButton } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword, setIsLoading } from '../redux/userSlice';
import { login, autoLogin } from '../redux/userSlice';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { isLoading } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(autoLogin())
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.welcome}>Welcome</Text>

            <Image
                style={styles.image}
                source={require("../../assets/images/login.png")}
            />


            <CustomTextInput
                title="Email"
                isSecureText={false}
                onChangeText={(text) => setEmail(text.toLowerCase())}
                value={email}
                placeholder="Enter your email"
            />

            <CustomTextInput
                title="Password"
                isSecureText={true}
                onChangeText={(password) => setPassword(password)}
                value={password}
                placeholder="Enter your password"
            />

            <CustomButton
                title="Login"
                width="80%"
                onPress={() => dispatch(login({ email, password }))}
                buttonColor="blue"
                pressedButtonColor="gray"
            />

            <CustomButton
                title="Sign Up"
                width="30%"
                onPress={() => navigation.navigate('Signup')}
                buttonColor="blue"
                pressedButtonColor="gray"
            />

            {isLoading ? <Loading isLoading={() => dispatch(setIsLoading(false))} /> : null}
        </View >
    );
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 50,
        width: 50,
        marginBottom: 10
    },
    welcome: {
        fontWeight: "bold",
        fontSize: 35,
        marginBottom: 10
    },
    signupButton: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        height: 40,
        width: "20%",
    },
});
