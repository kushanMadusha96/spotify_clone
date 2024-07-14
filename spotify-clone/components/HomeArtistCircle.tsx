import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function () {
    return (
        <View style={styles.container}>
            <Image
                style={styles.artistImg}
                source={require('../assets/images/singer.jpg')}
            />
            <Text style={styles.artistName}>Dilo</Text>

        </View>
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