import { Link } from 'expo-router'
import { View, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>Go back to home</Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25292e",
    },
    button: {
        color: "white",
        padding: 10,
        marginTop: 10,
        textDecorationLine: "underline",
        fontSize: 12,
    }
})

export default NotFoundScreen