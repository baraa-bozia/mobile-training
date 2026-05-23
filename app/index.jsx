import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
            <Image source={require('../assets/img/logo.png')} style={styles.logo} />

      <Text style={styles.text}>Welcome to UOE Application</Text>
      {/* <View style={styles.card}>
        <Text>this is a card</Text>
      </View> */}
      <Link style={styles.link} href="/about">About</Link>
      <Link style={styles.link} href="/contact">contact</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 50,
  },
  card: {
    width: '80%',
    height: 300,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    boxShadow: '10px 10px 5px rgba(84, 55, 55, 0.5)',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
    resizeMode: 'contain',
    marginVertical: 20,
    opacity: 0.5,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 20,
    borderBottomWidth: 1,

  },
})