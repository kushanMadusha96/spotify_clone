import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function search() {
  return (
    <View style={styles.container}>
      <Text style={styles.defaultTxtMain}>Play what you love</Text>
      <Text style={styles.defaultTxtSub}>Search for artists, songs, playlists and more.</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems:'center',
    justifyContent: 'center'
  },
  defaultTxtMain: {
    color: '#ffffff',
    fontWeight: 'bold'
  },
  defaultTxtSub: {
    color: 'gray',
  }
})
