import HomeArtistCircle from "@/components/HomeArtistCircle";
import HomeMusicSqure from "@/components/HomeMusicSqure";
import MinimizePlayer from "@/components/MinimizePlayer";
import HomeScreen from "@/screens/HomeScreen";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}>
      <HomeScreen/>
      <MinimizePlayer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
  }
})
