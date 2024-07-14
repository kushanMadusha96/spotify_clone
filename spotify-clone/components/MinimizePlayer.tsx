import { View, Text, Pressable, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign, EvilIcons } from '@expo/vector-icons'

export default function MinimizePlayer() {
    return (
        <>
            <Pressable onPress={() => console.log("press")} style={styles.container}>
                <Image
                    style={styles.playingSongImg}
                    source={require('../assets/images/singer.jpg')}
                />
                <View style={styles.titleAndArtistContainer}>
                    <Text style={styles.title}>Mai Mal</Text>
                    <Text style={styles.artist}>Yasas Medagedara</Text>
                </View>
                <View style={styles.plusAndPlayContainer}>
                    <Pressable style={styles.plus}>
                        <AntDesign name="pluscircleo" size={26} color="#ffffff" />
                    </Pressable>
                    <Pressable>
                        <AntDesign name="caretleft" size={26} color="#ffffff"/>
                    </Pressable>
                </View>
            </Pressable>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "94%",
        height: 70,
        backgroundColor: '#5D2424',
        borderRadius: 10,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
        alignItems: 'center',
        display: "flex",
        flexDirection: 'row'
    },
    playingSongImg: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginLeft: 10
    },
    titleAndArtistContainer: {
        marginLeft: 10,
    },
    title: {
        color: '#ffffff'
    },
    artist: {
        color: '#ffffff'
    },
    plusAndPlayContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        right: 10
    },
    plus: {
        marginRight: 15
    }

})