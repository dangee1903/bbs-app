import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'

const Home = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: 'white' }}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Text>Test</Text>
      </View>
    </ScrollView>
  )
}
export default Home

const styles = StyleSheet.create({})