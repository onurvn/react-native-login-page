import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { CustomTextInput, CustomButton, Loading } from "../components"
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/userSlice'

const SignUpPage = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const { isLoading } = useSelector(state => state.user);

    const handleRegister = () => {
        dispatch(register({ email, password }));
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.title}>
                <Image
                    style={styles.image}
                    source={require("../../assets/images/signup.png")} />
            </View>

            <View style={styles.textInputContainer}>
                <CustomTextInput
                    title="Name"
                    isSecureText={false}
                    onChangeText={setName}
                    value={name}
                    placeholder="Enter your name"
                />

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
                    placeholder="Create your password"
                />
            </View>

            <View style={styles.signupOptions}>
                <CustomButton
                    title="Sign Up"
                    width="80%"
                    onPress={handleRegister}
                    buttonColor="blue"
                    pressedButtonColor="gray"
                />

                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={{ fontWeight: "bold", marginBottom: "10" }}>Already have an account? Login</Text>
                </Pressable>

            </View>

        </SafeAreaView>
    )
}

export default SignUpPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EEDC",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        flex: 2,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        height: 100,
        width: 100,
    },
    textInputContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        width: "100%",
    },
    signupOptions: {
        flex: 3,
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%"
    }
})