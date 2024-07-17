import HomeHeader from "@/components/HomeHeader";
import HomeScreen from "@/screens/HomeScreen";
import { Stack } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';

export default function RootLayout() {

  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      {/* <Stack.Screen name="index" options={{headerShown:false}}/> */}
    </Stack>
  );
}

