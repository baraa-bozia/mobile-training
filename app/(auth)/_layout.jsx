//Auth Layout


import { Stack } from "expo-router"
import { StatusBar } from "react-native"
import { GuestOnly } from "../../components/auth/GuestOnly" 
export default function AuthLayout() {
  return (
    <>
          <StatusBar style="auto" />

    <GuestOnly>
      <Stack
        screenOptions={{  headerShown: false, animation: "none" }}
      />
    </GuestOnly>
    </>
  )
}