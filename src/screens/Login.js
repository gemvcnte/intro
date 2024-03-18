import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import * as WebBrowser from "expo-web-browser";
import { Zocial } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleEmailFocus = () => setEmailFocused(true);
  const handleEmailBlur = () => setEmailFocused(false);

  const handlePasswordFocus = () => setPasswordFocused(true);
  const handlePasswordBlur = () => setPasswordFocused(false);

  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <SafeAreaView>
      <View className="p-5">
        <View name="logo">
          {/* <Image source={{}} /> */}
          <Text>LOGO</Text>
        </View>
        <View
          name="header-container"
          className="justify-start items-start pt-5 px-auto pb-auto"
        >
          <Text className="text-xl font-bold tracking-widest">
            Welcome User!
          </Text>
          <Text className="text-lg pt-4">Sign In To Continue</Text>
        </View>
        <View className="mt-16">
          <View
            className="flex-row border-b "
            style={{ borderBottomColor: emailFocused ? "black" : "#e0e0e0" }}
          >
            <Zocial name="email" size={24} style={{ color: "#e0e0e0" }} />
            <TextInput
              name="emailAddress"
              placeholder="Email"
              className="w-full px-2 py-2 "
              keyboardType="email-address"
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
            />
          </View>
          <View
            className="flex-row border-b mt-5"
            style={{ borderBottomColor: passwordFocused ? "black" : "#e0e0e0" }}
          >
            <AntDesign name="lock" size={24} style={{ color: "#e0e0e0" }} />
            <TextInput
              name="password"
              placeholder="Password"
              autoCorrect={false}
              secureTextEntry
              className="w-full px-2 py-2 "
              keyboardType="visible-password"
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
          </View>
          <Pressable className="justify-end items-end">
            <Text className="text-sm text-gray-400 pt-2">Forgot Password?</Text>
          </Pressable>

          <TouchableOpacity className=" justify-center items-center bg-black mt-16 py-3 px-2 rounded">
            <Text className="text-white text-center text-[16px]">Login</Text>
          </TouchableOpacity>
        </View>

        <View name="divider" className="flex-row items-center pt-10 mt-10">
          <View className="flex-1 h-[1px] border-t border-gray-400"></View>
          <View>
            <Text className="w-[50] text-center text-gray-400">or</Text>
          </View>
          <View className="flex-1 h-[1px] border-t border-gray-400"></View>
        </View>
        <View className="mt-16">
          <View name="google-auth">
            <TouchableOpacity onPress={onPress} className="p-4">
              <Text className="text-center tracking-wide">
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
          <View name="facebook-auth">
            <TouchableOpacity className="p-4">
              <Text className="text-center tracking wide">
                Continue with Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <View name="continue-without">
            <Text className="text-center text-gray-500 underline tracking-widest">
              Continue without an account
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
