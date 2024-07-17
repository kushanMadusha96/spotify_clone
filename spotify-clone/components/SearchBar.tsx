import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router';

export default function SearchBar(props: { mt?: number, icon?: string, bc?: string, txtColor?: string, onpress?: boolean }) {
    return (
        <View style={[styles.container, { marginTop: props.mt, backgroundColor: props.bc }]}>

            {props.onpress ? (
                <>
                    <Ionicons name='search' color={'black'} size={30} style={styles.icon} />
                    <TextInput
                        editable
                        multiline
                        numberOfLines={4}
                        maxLength={40}
                        placeholderTextColor={props.txtColor}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                        style={[styles.txtInput, { color: props.txtColor, backgroundColor: props.bc }]}
                        placeholder=' What  do you want to listern to?'
                        onPress={() => router.push('/search')}
                        enablesReturnKeyAutomatically
                    />
                </>
            )
                :
                (
                    <TextInput
                        editable
                        multiline
                        numberOfLines={4}
                        maxLength={40}
                        placeholderTextColor={props.txtColor}
                        // onChangeText={text => onChangeText(text)}
                        // value={value}
                        style={[styles.txtInput, { color: props.txtColor, backgroundColor: props.bc }]}
                        placeholder=' What  do you want to listern to?'
                        onPress={() => console.log("pr")}
                        enablesReturnKeyAutomatically
                    />
                )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'center'
    },
    icon: {
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        marginLeft: 5,
        marginRight: 3
    },
    txtInput: {
        padding: 0,
        width: '90%',
        height: 50,
        alignSelf: 'center',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
    }
});