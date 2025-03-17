import { Link } from "expo-router";
import { Text, View,StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.textStyle}>Home Page</Text>
      <Link href={"/about"} style={styles.aboutButton}>About</Link>
    </View>
  );
}


const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
},
textStyle:{
  color: "white",
},
aboutButton:{
  color: "white",
  padding: 10,
  marginTop: 10,
  textDecorationLine: "underline",
  fontSize: 12,
}

})