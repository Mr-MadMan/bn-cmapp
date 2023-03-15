import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    fontSize: 24
  },
})
export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}