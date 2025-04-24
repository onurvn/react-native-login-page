import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import Loading from '../components/Loading';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image
                style={styles.image}
                source={require("../../assets/images/login.png")} />
            <Text
                style={styles.welcome}
            >Welcome {result} </Text>

            <Text>Email</Text>
            <TextInput
                inputMode='email'
                style={styles.textInput}
                onChangeText={setEmail}
                value={email}
                placeholder='Enter your email'
            />

            <Text>Password</Text>
            <TextInput
                secureTextEntry={true}
                style={styles.textInput}
                onChangeText={setPassword}
                value={password}
                placeholder='Enter your password'
            />

            <Pressable
                onPress={() => setIsLoading(true)}
                style={({ pressed }) => [{
                    backgroundColor: pressed ? "gray" : "blue"
                }, styles.button]}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('SignUp')}
                style={({ pressed }) => [{
                    backgroundColor: pressed ? "gray" : "blue", marginTop: "10"
                }, styles.signupButton]}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

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
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        height: 40,
        width: "80%",
        textAlign: "center"
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        height: 40,
        width: "80%",
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
    welcome: {
        fontWeight: "bold",
        fontSize: 20
    },
    signupButton: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        height: 40,
        width: "20%",
    }
});
