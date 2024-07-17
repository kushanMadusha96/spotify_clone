import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function (props : { op?: () => void }) {
    return (
        <Pressable style={styles.container} onPress={ props.op }>
            <Image
                style={styles.artistImg}
                source={require('../assets/images/singer.jpg')}
            />
            <Text style={styles.artistName}>Dilo</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 'auto',
        marginLeft: 15
    },
    artistImg : {
        width:120,
        height:120,
        borderRadius:100
    },
    artistName: {
        color: '#ffffff',
        textAlign:'center',
        marginTop: 10
    }
})