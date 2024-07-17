import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HomeHeader from '@/components/HomeHeader'
import UserProfile from '@/components/Profile'

export default function _layout() {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: '#000000' } }}>
      <Stack.Screen name="index" options={{ headerTitle: props => <HomeHeader />, headerStyle: { backgroundColor: '#000000' } }} />
      <Stack.Screen name="fresh_music" options={{ headerTitle:'', headerTransparent: true, headerTintColor:'#ffffff' }}/>
      <Stack.Screen name="started_music" options={{ headerTitle:'', headerTransparent: true, headerTintColor:'#ffffff' }}/>
      <Stack.Screen name="started_music_second" options={{ headerTitle:'', headerTransparent: true, headerTintColor:'#ffffff' }}/>
    </Stack>
  )
}
