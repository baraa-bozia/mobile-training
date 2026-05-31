import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useTheme } from '../context/ThemeContext'

const About = () => {
  const { darkMode } = useTheme()

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? '#121212' : '#fff',
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: darkMode ? '#fff' : '#333',
          },
        ]}
      >
        About
      </Text>

      <Link
        style={[
          styles.link,
          {
            color: darkMode ? '#87CEFA' : 'blue',
          },
        ]}
        href="/"
      >
        Home
      </Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  link: {
    fontSize: 18,
    marginTop: 20,
    borderBottomWidth: 1,
  },
})