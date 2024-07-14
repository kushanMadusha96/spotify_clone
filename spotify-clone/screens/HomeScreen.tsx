import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import HomeMusicSqure from '@/components/HomeMusicSqure'
import { FlashList } from '@shopify/flash-list'
import HomeArtistCircle from '@/components/HomeArtistCircle'

export default function HomeScreen() {
  const DATA = [
    {
      id: <HomeMusicSqure />
    },
    {
      id: <HomeMusicSqure />
    },
    {
      id: <HomeMusicSqure />
    },
    {
      id: <HomeMusicSqure />
    }
  ]

  const FRESH_MUSIC = [
    {
      id: <HomeMusicSqure />
    },
    {
      id: <HomeMusicSqure />
    },
    {
      id: <HomeMusicSqure />
    },
    {
      id: <HomeMusicSqure />
    }
  ]

  const ARTIST_DATA = [
    {
      id: <HomeArtistCircle />
    },
    {
      id: <HomeArtistCircle />
    },
    {
      id: <HomeArtistCircle />
    },
    {
      id: <HomeArtistCircle />
    }
  ]

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>To get you started</Text>
        <FlashList
          data={DATA}
          renderItem={({ item }) => item.id}
          estimatedItemSize={200}
          horizontal={true}
        />
        <Text style={styles.title}>Suggested artists</Text>
        <FlashList
          data={ARTIST_DATA}
          renderItem={({ item }) => item.id}
          estimatedItemSize={200}
          horizontal={true}
        />
        <Text style={styles.title}>Fresh New Music</Text>
        <FlashList
          data={FRESH_MUSIC}
          renderItem={({ item }) => item.id}
          estimatedItemSize={200}
          horizontal={true}
        />
        <Text style={styles.title}>Mood</Text>
        <FlashList
          data={FRESH_MUSIC}
          renderItem={({ item }) => item.id}
          estimatedItemSize={200}
          horizontal={true}
        />
        <Text style={styles.title}>Featured Charts</Text>
        <FlashList
          data={FRESH_MUSIC}
          renderItem={({ item }) => item.id}
          estimatedItemSize={200}
          horizontal={true}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 23,
    marginLeft: 15,
    marginVertical: 25
  }
});