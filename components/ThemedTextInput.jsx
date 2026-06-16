import React from 'react'
import { useColorScheme, TextInput } from 'react-native'
import { Colors } from '../constants/colors'

const ThemedTextInput = ({ style, ...props }) => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    
  return (
    <TextInput {...props} 
    style={[{ 
        backgroundColor: theme.uiBackground, 
        color: theme.text,
        padding: 20,
        borderRadius: 6,
    }, style]} />
  )
}

export default ThemedTextInput