import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ title, width, onPress, buttonColor, pressedButtonColor }) => {
    return (
        <Pressable
            onPress={() => onPress()}
            style={({ pressed }) => [{
                backgroundColor: pressed ? pressedButtonColor : buttonColor,
                width: width,
            }, styles.button]}>

            <Text style={styles.buttonText}>{title}</Text>

        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        height: 40,
        marginTop: 20
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
    },
})