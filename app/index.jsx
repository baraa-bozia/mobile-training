import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { useTheme } from '../context/ThemeContext'

const Index = () => {
  const { darkMode, setDarkMode } = useTheme()

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? '#121212' : '#fff',
        },
      ]}
    >
      <Pressable
        style={styles.button}
        onPress={() => setDarkMode(!darkMode)}
      >
        <Text style={styles.buttonText}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </Text>
      </Pressable>

      <Image
        source={require('../assets/img/logo.png')}
        style={styles.logo}
      />

      <Text
        style={[
          styles.text,
          {
            color: darkMode ? '#fff' : '#333',
          },
        ]}
      >
        Welcome to UOE Application
      </Text>

      <Link
        style={[
          styles.link,
          {
            color: darkMode ? '#87CEFA' : 'blue',
          },
        ]}
        href="/about"
      >
        About
      </Link>

      <Link
        style={[
          styles.link,
          {
            color: darkMode ? '#87CEFA' : 'blue',
          },
        ]}
        href="/contact"
      >
        Contact
      </Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: '#4a90e2',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
    resizeMode: 'contain',
    opacity: 0.5,
  },

  link: {
    fontSize: 18,
    marginBottom: 20,
    borderBottomWidth: 1,
  },
})