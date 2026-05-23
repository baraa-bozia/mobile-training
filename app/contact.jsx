import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const contact = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>contact</Text>
        <Link style={styles.link} href="/">Home</Link>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',    
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    link: {
        fontSize: 18,
        color: 'blue',
        marginTop: 20,
        borderBottomWidth: 1,
    },
})