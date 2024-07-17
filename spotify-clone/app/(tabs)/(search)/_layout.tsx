import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import UserProfile from '@/components/Profile'
import HomeHeader from '@/components/HomeHeader'
import SearchBar from '@/components/SearchBar'

export default function () {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ title: 'Search', headerTitleStyle: { color: '#ffffff' }, headerLeft: props => <UserProfile w={40} h={40} bd={100} ml={15} {...props} />, headerStyle: { backgroundColor: '#000000' } }} />
      <Stack.Screen name="search"  options={{  headerTitle: props => <SearchBar bc='#343936' txtColor='#ffffff'/>, headerStyle: { backgroundColor: '#343936'},  headerTintColor: '#ffffff'}}/>
    </Stack>
  )
}