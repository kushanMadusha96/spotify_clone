import HomeArtistCircle from "@/components/HomeArtistCircle";
import HomeMusicSqure from "@/components/HomeMusicSqure";
import LibraryHeader from "@/components/LibraryHeader";
import MinimizePlayer from "@/components/MinimizePlayer";
import HomeScreen from "@/screens/HomeScreen";
import LibraryScreen from "@/screens/LibraryScreen";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <LibraryScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
});