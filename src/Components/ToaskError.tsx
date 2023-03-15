import { View } from 'native-base'
import React, { ReactElement } from 'react'
import Toast from 'react-native-toast-message'

type TProps = {
  children: ReactElement<any, any>
}

const ToaskError = ({ children }: TProps) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {children}
      <Toast position="top" />
    </View>
  )
}

export default ToaskError
