import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

import ImageViewer from "@/components/ImageViewer";
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer />
      </View>
      <Link href={"/about"} style={styles.aboutButton}>
        About
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
    gap: 10,
  },
  textStyle: {
    color: "white",
  },
  aboutButton: {
    color: "white",
    padding: 10,
    marginTop: 10,
    textDecorationLine: "underline",
    fontSize: 12,
  },
  image: {
    width: 320,
    height: 320,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
  },
});
