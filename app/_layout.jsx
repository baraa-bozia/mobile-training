import { Stack } from "expo-router";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../constants/colors";
import { UserProvider } from "../contexts/UserContext";
import { BooksProvider } from "../contexts/BooksContext";

const RootLayout = () => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserProvider>
        <BooksProvider>
    <StatusBar style="auto" />
        <Stack 
            screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title
            }}>  
            <Stack.Screen name="index" options={{title: "Home"}} />
            {/* <Stack.Screen name="about" options={{title: "About"}} />
            <Stack.Screen name="contact" options={{title: "Contact"}} /> */}
            <Stack.Screen name="(auth)" options={{headerShown: false}} />
            <Stack.Screen name="(dashboard)" options={{headerShown: false}} />


        </Stack>  
        </BooksProvider>
    </UserProvider>
) 
} 

export default RootLayout;   
  
const styles = StyleSheet.create({})    