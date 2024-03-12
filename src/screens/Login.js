import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setSubmittedData(data);
  };
  return (
    <View>
      <View>
        <Text>Login</Text>
      </View>
    </View>
  );
}
