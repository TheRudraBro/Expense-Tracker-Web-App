import { Link } from "expo-router";
import { Text, View, Image, container } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{color: "white"}}>Edit app/index.tsx to edit this screen.yguygiugig</Text>
      <Link href={"/about"}>About</Link>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 flex: 1,
 justifyContent: "center",
 alignItems: "center",
 backgroundColor: "#90a525",
  },
})
