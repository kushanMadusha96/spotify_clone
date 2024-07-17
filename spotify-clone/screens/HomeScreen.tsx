import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import HomeMusicSqure from '@/components/HomeMusicSqure'
import { FlashList } from '@shopify/flash-list'
import HomeArtistCircle from '@/components/HomeArtistCircle'
import { router } from 'expo-router'

export default function HomeScreen() {
  const STARTED = [
    {
      id: <HomeMusicSqure op={() => router.push('/started_music')} />
    },
    {
      id: <HomeMusicSqure op={() => router.push('/started_music')} />
    },
    {
      id: <HomeMusicSqure op={() => router.push('/started_music')} />
    },
    {
      id: <HomeMusicSqure op={() => router.push('/started_music')} />
    },
  ]

  const FRESH_MUSIC = [
    {
      id: <HomeMusicSqure op={() => router.push('/fresh_music')} />
    },
    {
      id: <HomeMusicSqure op={() => router.push('/fresh_music')} />
    },
    {
      id: <HomeMusicSqure op={() => router.push('/fresh_music')} />
    },
    {
      id: <HomeMusicSqure op={() => router.push('/fresh_music')} />
    }
  ]

  const ARTIST_DATA = [
    {
      id: <HomeArtistCircle op={() => router.push('/started_music_second')}/>
    },
    {
      id: <HomeArtistCircle op={() => router.push('/started_music_second')}/>
    },
    {
      id: <HomeArtistCircle op={() => router.push('/started_music_second')}/>
    },
    {
      id: <HomeArtistCircle op={() => router.push('/started_music_second')}/>
    }
  ]

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>To get you started</Text>
        <FlashList
          data={STARTED}
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
          data={STARTED}
          renderItem={({ item }) => item.id}
          estimatedItemSize={200}
          horizontal={true}
        />
        <Text style={styles.title}>Featured Charts</Text>
        <FlashList
          data={STARTED}
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