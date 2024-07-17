import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import UserProfile from '@/components/Profile';
import { FlashList } from '@shopify/flash-list';
import MinimizePlayer from '@/components/MinimizePlayer';

export default function GetYouStartedSecondScreen() {
    const ARTIST_LISTS = `Gus Anderson Hay Square Serenade .Gus Anderson Hay Square Serenade .Gus Anderson Hay Square Serenade .Gus Anderson Hay Square Serenade .Gus Anderson Hay Square Serenade .Gus Anderson Hay Square Serenade .Gus Anderson Hay Square Serenade .Gus Anderson Hay Square Serenade .Gus Anderson Hay Square Serenade .Gus Anderson Hay Square Serenade .Gus Anderson Hay Square Serenade .Gus Anderson Hay Square Serenade .`

    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: "100%", height: '40%', backgroundColor: '#000000', justifyContent: 'center' }}>
                <Image
                    style={{ width: "75%", height: '80%', alignSelf: 'center' }}
                    source={require('../../../assets/images/user.jpg')}
                />
                <Text style={{ color: '#ffffff', position: 'absolute', bottom: 35, fontSize: 24, fontWeight: 'bold', alignSelf: 'center' }}>Zany Inzane mix</Text>
            </View>
            <Text style={{ color: 'gray', fontWeight: 'condensedBold', marginLeft: 20 }}>Soft instrumental Jazz for all your activities.</Text>
            <View style={{ flexDirection: 'row', marginLeft: 20, alignItems: 'center', marginTop: 10 }}>
                <Image
                    style={{ width: 30, height: 30, alignSelf: 'center', backgroundColor: '#000000', borderRadius: 100 }}
                    source={require('../../../assets/images/spotifilogo.png')}
                />
                <Text style={{ color: '#ffffff', marginLeft: 10, fontWeight: 'bold' }}>Made for Kushanm</Text>
            </View>
            <Text style={{ color: 'gray', marginLeft: 20, fontSize: 10, marginTop: 8 }}>3h 24min</Text>
            <View style={{ flexDirection: 'row', marginLeft: 30, alignItems: 'center', marginTop: 10 }}>
                <Ionicons name='add-circle-outline' color={'#ffffff'} size={24} />
                <MaterialCommunityIcons name="dots-vertical" color="#ffffff" size={24} style={{ marginLeft: 7 }} />
                <Pressable style={styles.pressable}>
                    <Ionicons name='play' size={25} color={'#000000'} />
                </Pressable>
            </View>
            <View style={{ flex: 1, width: '95%', maxWidth: '95%', marginTop: 25, alignSelf: 'flex-start',marginLeft: 15 }}>
                <ScrollView>
                    <Text style={{ color: '#ffffff', fontWeight: '600' }}>
                        {ARTIST_LISTS}
                    </Text>
                </ScrollView>
            </View>
            <MinimizePlayer/>
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
        right: 10
    }
});
