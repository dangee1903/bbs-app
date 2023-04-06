import { ENUM_COLOR } from '@constants/enum'
import React, { ChangeEvent, useState } from 'react'
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Text,
  TextInputFocusEventData,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native'
import { TextInput } from 'react-native-paper'

type TProps = {
  handleChange: (e: string | ChangeEvent<any>) => void
  handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  value: string
  secureTextEntry?: boolean
  errors?: string
  keyboardType?: KeyboardTypeOptions | undefined
  label: string
}

const InputPasswordCommon = ({
  handleChange,
  handleBlur,
  value,
  secureTextEntry = false,
  errors,
  keyboardType,
  label,
}: TProps) => {
  const [hidePass, setHidePass] = useState(secureTextEntry)

  const showIconEye = () => {
    return hidePass ? (
      <TextInput.Icon
        style={{ zIndex: 1 }}
        icon="eye"
        onPress={(e: GestureResponderEvent) => {
          e.stopPropagation()
          setHidePass(!hidePass)
        }}
      />
    ) : (
      <TextInput.Icon
        style={{ zIndex: 1 }}
        icon="eye-off"
        onPress={(e: GestureResponderEvent) => {
          e.stopPropagation()
          setHidePass(!hidePass)
        }}
      />
    )
  }

  return (
    <>
      <TextInput
        label={label}
        value={value}
        onChangeText={handleChange}
        onBlur={handleBlur}
        keyboardType={keyboardType}
        secureTextEntry={hidePass}
        error={!!errors}
        right={secureTextEntry && showIconEye()}
        mode="flat"
        activeUnderlineColor={ENUM_COLOR.mainColor}
        theme={{
          colors: {
            background: 'white',
          },
        }}
        style={{
          backgroundColor: ENUM_COLOR.backgroundGray,
        }}
      />
      {errors && <Text style={styles.error}>{errors}</Text>}
    </>
  )
}

export default InputPasswordCommon

const styles = StyleSheet.create({
  error: {
    fontSize: 10,
    color: 'red',
    paddingLeft: 15,
    paddingTop: 3,
  },
})
