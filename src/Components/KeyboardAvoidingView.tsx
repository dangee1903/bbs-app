import React, { ReactElement } from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

type TProps = {
  children: ReactElement
}

const KeyboardAvoidingComponent = ({ children }: TProps) => {
  return (
    <KeyboardAwareScrollView style={styles.scrollView}>
      {children}
    </KeyboardAwareScrollView>
  )
}

export default KeyboardAvoidingComponent

const styles = StyleSheet.create({
  scrollView: {},
})
