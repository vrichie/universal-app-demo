import { Text, View,StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.textStyle}>About Screen</Text>
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
}

})