import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '@/components/SearchBar'

export default function SearchScreen(props: {onPress?:boolean}) {
  return (
    <View>
      <SearchBar mt={5} icon='search' bc='#ffffff' txtColor='#000000' onpress={props.onPress}/>
    </View>
  )
}