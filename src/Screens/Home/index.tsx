import AppHeader from '@components/MyHeader'
import React from 'react'
import { DrawerActions } from '@react-navigation/core'
import { ScrollView, StyleSheet, View, Text } from 'react-native'

type TProps = {
  navigation: any
}

const Home = ({ navigation }: TProps) => {
  return (
    <>
      {/* <AppHeader
        menu
        onPressMenu={() => navigation.dispatch(DrawerActions.openDrawer())}
      /> */}
      <ScrollView
        style={{ flex: 1, backgroundColor: 'white' }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
        </View>
      </ScrollView>
    </>
  )
}
export default Home

const styles = StyleSheet.create({})
