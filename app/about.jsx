import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const about = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>about</Text>
        <Link style={styles.link} href="/">Home</Link>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',  
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
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