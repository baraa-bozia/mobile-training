import { Pressable, StyleSheet} from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from "expo-router";
import { Colors } from '../../constants/colors'
import { Text } from 'react-native'
import ThemedButton from '../../components/ThemedButton'

const login = () => {
  const handleSubmit = async () => {
    console.log("Login form submitted")
  }
  return (
    <ThemedView style = {styles.container}>
        <Spacer/>
        <ThemedText tiltle = {true} style = {styles.title}>
            Login To Your Account
        </ThemedText>
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

        <Link href="/register">
          <ThemedText style = {{textAlign: 'center'}}>Don't have an account? Register</ThemedText>
        </Link>

    </ThemedView>
  )
}

export default login


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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