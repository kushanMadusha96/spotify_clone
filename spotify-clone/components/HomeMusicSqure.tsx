import { View, Text, StyleSheet, Image, Pressable } from 'react-native'

export default function HomeMusicSqure(props : {op?: () => void }) {

    return (
        <>
            <Pressable style={styles.container} onPress={props.op}>
                <Image
                    style={styles.artistImg}
                    source={require('../assets/images/singer.jpg')}
                />
                <Text style={styles.mixName}>Mahiru Senarathne Mix</Text>
                <View style={styles.label}></View>
                <Text style={styles.artistNamesTxt}>Mihiran, Dhyan Hewage and SHAN PUTHA</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 'auto',
        backgroundColor: '#000000',
        marginLeft: 15
    },
    artistImg: {
        width: 150,
        height: 150,
        borderBottomWidth: 5,
        borderBottomColor: 'yellow'
    },
    mixName: {
        color: "#ffffff",
        fontWeight: 'bold',
        position: 'absolute',
        width: 110,
        maxHeight: 40,
        marginLeft: 15,
        lineHeight: 15,
        bottom: 60
    },
    label: {
        width:5,
        height:20,
        backgroundColor:'yellow',
        position:'absolute',
        bottom: 58
    },
    artistNamesTxt: {
        color: 'gray',
        marginTop: 10,
        maxHeight: 40,
    },
});