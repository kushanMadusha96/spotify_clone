import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SelectButton from '@/components/SelectButton'
import MinimizePlayer from '@/components/MinimizePlayer';
import { FlashList } from '@shopify/flash-list';
import Profile from '@/components/Profile';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LibraryScreen() {

  const PLAY_LISTS = [
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #1' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #1' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #1' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #1' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #1' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #1' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #1' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #1' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #1' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #1' txt_un='kushanm' ml={15} mt={15} />
    }
  ]

  const ALBUMS = [
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #2' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #2' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #2' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #2' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #3' txt_un='kushanm' ml={15} mt={15} />
    },
  ]

  const ARTISTS = [
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #3' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #3' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #3' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #3' txt_un='kushanm' ml={15} mt={15} />
    },
    {
      id: <Profile w={100} h={100} txt_pl='My playlist #3' txt_un='kushanm' ml={15} mt={15} />
    },
  ]

  ARTISTS.push({
    id:
      <View style={styles.addArtistContainer}>
        <Pressable style={styles.pressable}>
          <Ionicons name='add' size={100} color={'#ffffff'} />
        </Pressable>
        <Text style={styles.txtAddArtist}>Add Artist</Text>
      </View>
  })
  const [playList, setPlayList] = useState("#1FE870");
  const [album, setAlbum] = useState("#3B3E3C");
  const [artist, setArtist] = useState("#3B3E3C");
  const [selectedData, setSelectedData] = useState(PLAY_LISTS);

  function changeColorOfSelectButton(btnNo: number) {
    const colors = ["#3B3E3C", "#3B3E3C", "#3B3E3C"];
    colors[btnNo - 1] = "#1FE870";
    setPlayList(colors[0]);
    setAlbum(colors[1]);
    setArtist(colors[2]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.selectBtnContainer}>
        <SelectButton text="Playlists" bc={playList} onPress={() => { changeColorOfSelectButton(1); setSelectedData(PLAY_LISTS) }} />
        <SelectButton text="Albums" bc={album} onPress={() => { changeColorOfSelectButton(2); setSelectedData(ALBUMS) }} />
        <SelectButton text="Artists" bc={artist} onPress={() => { changeColorOfSelectButton(3); setSelectedData(ARTISTS) }} />
      </View>
      <FlashList
        data={selectedData}
        renderItem={({ item }) => item.id}
        estimatedItemSize={200}
        ListFooterComponentStyle={{ paddingBottom: 100 }}
      />

      <MinimizePlayer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',

  },
  selectBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5
  },

  addArtistContainer: {
    flexDirection: 'row', alignItems: 'center', marginTop: 10
  },
  pressable: {
    backgroundColor: 'gray', width: 100, marginLeft: 15, marginTop: 10, borderRadius: 100
  },
  txtAddArtist: {
    color: '#ffffff', marginLeft: 40
  }
})