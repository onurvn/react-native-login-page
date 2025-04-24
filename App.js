import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image
} from 'react-native';
import Loading from './src/components/Loading';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.image}
        source={require("./assets/images/login.png")} />
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
        onPress={() => setResult(`${name} ${email} `)}
        style={({ pressed }) => [{
          backgroundColor: pressed ? "blue" : "gray"
        }, styles.button]}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

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
    height: 100,
    width: 100,
    resizeMode: 'contain'
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 25
  }
});
