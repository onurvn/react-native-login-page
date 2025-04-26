import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import { Loading, CustomTextInput, CustomButton } from '../components';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.welcome}>Welcome {result} </Text>

            <Image
                style={styles.image}
                source={require("../../assets/images/login.png")} />


            <CustomTextInput
                title="Email"
                isSecureText={false}
                onChangeText={setEmail}
                value={email}
                placeholder="Enter your email"
            />

            <CustomTextInput
                title="Password"
                isSecureText={true}
                onChangeText={setPassword}
                value={password}
                placeholder="Enter your password"
            />

            <CustomButton
                title="Login"
                width="80%"
                onPress={() => setIsLoading(true)}
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

            {isLoading ? <Loading isLoading={() => setIsLoading(false)} /> : null}
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
