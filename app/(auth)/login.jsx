import { Pressable, StyleSheet} from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from "expo-router";
import { Colors } from '../../constants/colors'
import { Text } from 'react-native'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useUser } from '../../hooks/useUser'

const login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null);
  const { login } = useUser();
  const handleSubmit = async () => {
    try {
      await login(email, password);
    } catch (error) {
        setError(error.message);

      // console.error("Login error:", error);
    }
    // console.log("Login form submitted")
  }

  return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>

    <ThemedView style = {styles.container}>
        <Spacer/>
        <ThemedText tiltle = {true} style = {styles.title}>
            Login To Your Account
        </ThemedText>
        <ThemedTextInput placeholder="Email" keyboardType="email-address" style={{width:'80%',marginBottom: 20}}
         value={email} onChangeText={setEmail} />
        <ThemedTextInput placeholder="Password" style={{width:'80%',marginBottom: 20}} secureTextEntry
         value={password} onChangeText={setPassword} />
{/* <Pressable onPress={handleSubmit}
 style={({pressed}) => [
    styles.btn,
    pressed && {opacity: 0.5} 
]}>
<Text style={{ color: '#f2f2f2' }}>Login</Text>
</Pressable> */}

<ThemedButton onPress={handleSubmit}>
  <Text style={{ color: '#f2f2f2' }}>Login</Text>
</ThemedButton>

<Spacer height={100}/>
{error && <ThemedText style={{color: Colors.warning, marginBottom: 20}}>{error}</ThemedText>}

        <Spacer height={100}/>

        <Link href="/register">
          <ThemedText style = {{textAlign: 'center'}}>Don't have an account? Register</ThemedText>
        </Link>

    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default login


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        justifyContent: 'center',
        fontSize: 18,
        marginBottom: 30,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 10,
    }
})