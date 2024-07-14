import HomeScreen from "@/screens/HomeScreen";
import { Stack } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';


export default function RootLayout() {
  function UserProfile({ tintColor }: { tintColor?: string }) {
    const [isPressedBtnAll, setIsPressedBtnAll] = useState(true);

    return (
      <View style={styles.headerContainer}>
        <Image
          style={styles.userPic}
          source={require('../assets/images/user.jpg')}
        />
        <Pressable style={[styles.headerBtns, isPressedBtnAll ? styles.pressedHeaderBtns : styles.headerBtns]} onPress={() => setIsPressedBtnAll(!isPressedBtnAll)}><Text style={!isPressedBtnAll ? styles.pressesBtnText : null}>All</Text></Pressable>
        <Pressable style={[styles.headerBtns, isPressedBtnAll ? styles.headerBtns : styles.pressedHeaderBtns]} onPress={() => setIsPressedBtnAll(!isPressedBtnAll)}><Text style={isPressedBtnAll ? styles.pressesBtnText : null}>Music</Text></Pressable>
      </View>
    );
  }

  return (
    // <Stack
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: '#000000',
    //     }
    //   }}>
    //   <Stack.Screen
    //     name="index"
    //     options={{
    //       headerTitle: props => <UserProfile {...props} />

    //     }} />
    // </Stack>
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#000000',
      }
    }}>
      <Stack.Screen name="(tabs)" options={{ headerTitle: props => <UserProfile {...props} /> }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: 'row'
  },
  userPic: {
    width: 40,
    height: 40,
    borderRadius: 100,
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
