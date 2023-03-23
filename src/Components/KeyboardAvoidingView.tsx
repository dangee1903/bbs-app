import { useHeaderHeight } from '@react-navigation/elements'
import React, { ReactElement } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import { ScrollView } from 'native-base'

type TProps = {
  children: ReactElement
}

const KeyboardAvoidingComponent = ({ children }: TProps) => {
  const headerHeight = useHeaderHeight()

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
      keyboardVerticalOffset={headerHeight}
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        style={{ backgroundColor: 'white' }}
        bounces={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingComponent

const styles = StyleSheet.create({})
