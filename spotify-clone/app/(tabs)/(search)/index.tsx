import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SearchScreen from '@/screens/SearchScreen'

export default function search() {
  return (
    <View style={styles.container}>
      <SearchScreen onPress={true} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
})
