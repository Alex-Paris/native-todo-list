import {
  useFonts,
  Inter_400Regular as Inter400Regular,
  Inter_700Bold as Inter700Bold,
} from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react'
import { View } from 'react-native'

import Header from './src/components/Header'
import Home from './src/screens/Home'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter400Regular,
    Inter700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <View className="flex-1 bg-gray-600" onLayout={onLayoutRootView}>
      <StatusBar style="light" />

      <Header />
      <Home />
    </View>
  )
}
