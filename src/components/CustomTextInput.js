import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({ title, isSecureText, onChangeText, value, placeholder }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{title}</Text>
            <TextInput
                secureTextEntry={isSecureText}
                style={styles.textInputBox}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
            />
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({

    inputContainer: {
        width: "80%"
    },
    textInputBox: {
        borderBottomWidth: .5,
        borderRadius: 10,
        marginVertical: 10,
        height: 40,
        width: "100%",
        textAlign: "center"
    },
    inputText: {
        fontWeight: "bold"
    }
})