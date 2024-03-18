import { View, Text, TextInput, SafeAreaView } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

export default function Register() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View name="register">
      <Text>Register</Text>
    </View>
  );
}
