import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

const Loading = ({ isLoading }) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => isLoading()}

                style={[{}, styles.closeButtonContainer]}>
                <Text style={styles.closeButton}>X</Text>
            </Pressable>
            <ActivityIndicator color="#0061FB" />
            <Text style={styles.loginText}>Loading</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        backgroundColor: "#3E3F5B",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    loginText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    closeButtonContainer: {
        borderRadius: 99,
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        width: 30,
        position: "absolute",
        top: 50,
        right: 10
    },
    closeButton: {
        color: "white",
    },
})