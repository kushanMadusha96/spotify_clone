import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

export default function UserProfile(props: { w?: number, h?: number, bd?: number, ml?: number, mt?: number, txt_pl?: string, txt_un?: string, icon?: string }) {

    return (
        <View style={[styles.container, { marginLeft: props.ml, marginTop: props.mt }]}>
            <Image
                style={{ width: props.w, height: props.h, borderRadius: props.bd }}
                source={require('../assets/images/user.jpg')}
            />
            <View style={styles.textContainer}>
                <Text style={styles.txtPlaylist}>{props.txt_pl}</Text>
                <Text style={styles.txtUsername}>{props.txt_un}</Text>
            </View>
            <MaterialCommunityIcons name={props.icon} color="#ffffff" size={24} style={styles.dotIcon} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center'
    },
    textContainer: {
        alignSelf: 'center',
        marginLeft: 20
    },
    txtPlaylist: {
        color: 'white',
    },
    txtUsername: {
        color: 'gray',
        marginTop: 1
    },
    dotIcon: {
        position: 'absolute',
        right: 20
    }
});

