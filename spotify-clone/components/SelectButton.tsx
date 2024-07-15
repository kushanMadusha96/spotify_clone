import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function SelectButton(props: { text: string, bc?: string, onPress?: () => void }) {

    return (
        <Pressable style={[styles.pressable, {backgroundColor:props.bc}]} onPress={props.onPress}>
            <Text>{props.text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    pressable: {
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 20,
        marginHorizontal: 5
    }
})
