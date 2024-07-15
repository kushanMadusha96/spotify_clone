import React, { useState } from 'react'
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';
import Profile from './Profile';

export default function HomeHeader({ tintColor }: { tintColor?: string }) {
    const [isPressedBtnAll, setIsPressedBtnAll] = useState(true);
    return (
        <View style={styles.headerContainer}>
            <Profile w={40} h={40} bd={100} />
            <Pressable style={[styles.headerBtns, isPressedBtnAll ? styles.pressedHeaderBtns : styles.headerBtns]} onPress={() => setIsPressedBtnAll(!isPressedBtnAll)}><Text style={!isPressedBtnAll ? styles.pressesBtnText : null}>All</Text></Pressable>
            <Pressable style={[styles.headerBtns, isPressedBtnAll ? styles.headerBtns : styles.pressedHeaderBtns]} onPress={() => setIsPressedBtnAll(!isPressedBtnAll)}><Text style={isPressedBtnAll ? styles.pressesBtnText : null}>Music</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        flexDirection: 'row',
    },
    headerBtns: {
        width: 'auto',
        height: 'auto',
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#3B3E3C',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pressedHeaderBtns: {
        backgroundColor: '#1FE870',
    },
    pressesBtnText: {
        color: '#ffffff',
    }
})