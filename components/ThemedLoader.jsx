import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from './ThemedView'
import { useColorScheme } from 'react-native'
import { Colors } from '../constants/colors'

const ThemedLoader = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <ThemedView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    <ActivityIndicator style={{color: theme.text}}/>   
     </ThemedView>
  )
}

export default ThemedLoader

