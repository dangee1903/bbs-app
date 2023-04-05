/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import { ENUM_COLOR } from '@constants/enum'
import React from 'react'
import { View, Text } from 'react-native'
import Toast, {
  BaseToast,
  ErrorToast,
  ToastConfig,
  ToastPosition,
} from 'react-native-toast-message'

type TProps = {
  config?: ToastConfig
  position?: ToastPosition
}
const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: ENUM_COLOR.white,
        borderLeftColor: ENUM_COLOR.mainColor,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: ENUM_COLOR.success,
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
  tomatoToast: ({ text1 = '' }) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
      <Text>{text1}</Text>
    </View>
  ),
}
const ToastCommon = ({ config, position = 'top' }: TProps) => {
  return <Toast config={config ?? toastConfig} position={position} />
}

export default ToastCommon
