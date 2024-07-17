import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import UserProfile from '@/components/Profile';
import { FlashList } from '@shopify/flash-list';

export default function FreshMusicScreen() {
    const PLAY_LISTS = [
        {
            id: < UserProfile w={75} h={75} ml={15} mt={15} bd={5} txt_pl='Periyamulla' txt_un='2021, Single' />
        },
        {
            id: < UserProfile w={75} h={75} ml={15} mt={15} bd={5} txt_pl='Periyamulla' txt_un='2021, Single' />
        },
        {
            id: < UserProfile w={75} h={75} ml={15} mt={15} bd={5} txt_pl='Periyamulla' txt_un='2021, Single' />
        },
        {
            id: < UserProfile w={75} h={75} ml={15} mt={15} bd={5} txt_pl='Periyamulla' txt_un='2021, Single' />
        },
        {
            id: < UserProfile w={75} h={75} ml={15} mt={15} bd={5} txt_pl='Periyamulla' txt_un='2021, Single' />
        },
        {
            id: < UserProfile w={75} h={75} ml={15} mt={15} bd={5} txt_pl='Periyamulla' txt_un='2021, Single' />
        },
        {
            id: < UserProfile w={75} h={75} ml={15} mt={15} bd={5} txt_pl='Periyamulla' txt_un='2021, Single' />
        },
        {
            id: < UserProfile w={75} h={75} ml={15} mt={15} bd={5} txt_pl='Periyamulla' txt_un='2021, Single' />
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: "100%", height: '35%', backgroundColor: '#000000', justifyContent: 'center' }}>
                <Image
                    style={{ width: "100%", height: '100%', alignSelf: 'center' }}
                    source={require('../../../assets/images/user.jpg')}
                />
                <Text style={{ color: '#ffffff', position: 'absolute', bottom: 0, fontSize: 40, fontWeight: 'bold', marginLeft: 15 }}>Zany Inzane</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 15, alignItems: 'center', marginTop: 30 }}>
                <Pressable style={{ borderWidth: 1, borderColor: '#ffffff', borderRadius: 5, paddingHorizontal: 12, paddingVertical: 5 }}><Text style={{ color: '#ffffff' }}>Follow</Text></Pressable>
                <MaterialCommunityIcons name="dots-vertical" color="#ffffff" size={24} style={{ marginLeft: 7 }} />
                <Pressable style={styles.pressable}>
                    <Ionicons name='play' size={25} color={'#000000'} />
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 15, justifyContent: 'space-between', marginTop: 25 }}>
                <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Popular releases</Text>
                <Text style={{ color: 'gray', marginRight: 15 }}>Show all</Text>
            </View>
            <View style={{ flex: 1, marginTop: 4 }}>
                <FlashList
                    data={PLAY_LISTS}
                    renderItem={({ item }) => item.id}
                    estimatedItemSize={65}
                    ListFooterComponentStyle={{ marginBottom: 10 }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    pressable: {
        backgroundColor: '#1FE870',
        width: 50,
        height: 50,
        // marginLeft: 15,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 15
    }
});
