import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert } from "react-native";
import axios from "axios";

export default function Login() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("admin/adminLogin", {
        emailAddress,
        password,
      });

      // Assuming your backend returns a token upon successful login
      const { token } = response.data;

      // Do something with the token, like storing it in AsyncStorage or Redux
      // For now, you can just log it
      console.log("Token:", token);

      // Optionally, navigate to another screen upon successful login
      // navigation.navigate("Home");
    } catch (error) {
      console.error("Login Error:", error.response.data.message);
      Alert.alert("Error", error.response.data.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.input}
          value={emailAddress}
          placeholder="Enter Email"
          onChangeText={(text) => setEmailAddress(text)}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true} // Hide password characters
        />
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: "blue",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
