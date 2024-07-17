import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from '@/screens/HomeScreen';
import MinimizePlayer from '@/components/MinimizePlayer';
import LibraryScreen from '@/screens/LibraryScreen';

export default function library() {
  return (
    <View
      style={styles.container}>
      <LibraryScreen />
      <MinimizePlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
