import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Profile from './Profile'
import { Ionicons } from '@expo/vector-icons'

export default function LibraryHeader({ tintColor }: { tintColor?: String }) {
  return (
    <View style={styles.container}>
      <Profile w={40} h={40} bd={100} />
      <Text style={styles.headerTxt}>Your Library</Text>
      <Ionicons style={styles.searchIcon} name="search-outline" size={25} color="#ffffff" />
      <Ionicons style={styles.circleIcon} name="add-circle-outline" size={25} color="#ffffff" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 30,
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#ffffff",
    marginLeft: -5
  },
  searchIcon: {
    position: 'absolute',
    right: 45

  },
  circleIcon: {
    position: 'absolute',
    right: 0
  }

});
