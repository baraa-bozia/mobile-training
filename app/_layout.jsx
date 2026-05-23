import { Stack } from "expo-router"
export default function RootLayout() {
  return (
    <Stack screenOptions=
    {{headerStyle:{backgroundColor: 'rgba(85, 102, 151, 1)'},headerTintColor: 'white',headerTitleStyle:{fontWeight: 'bold'}}
}
    >
    <Stack.Screen name="index" options={{title: "Home" ,headerShown: false}}/>
            <Stack.Screen name="about" options={{ title: "About"}}/>
            <Stack.Screen name="contact" options={{ title: "Contact" }}/>
                </Stack>

  );
}