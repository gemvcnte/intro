import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'

export default function Register() {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
  return (
    <View>
        <View>
            <Text>Register</Text>
        </View>
        <View>
            <View>
                 <TextInput
                 value={emailAddress}
                 placeholder={"Enter Email"}
                 onChangeText={(text) => setEmailAddress(text)}

                 />
                 <TextInput
                 value={password}
                 placeholder={"Enter Password"}
                 onChangeText={(text) => setPassword(text)}

                 />

                <Button title={"Sign Up"} onPress={() => {}} />

                         
            </View>             

            
        </View> 
        
     </View>
  )
}