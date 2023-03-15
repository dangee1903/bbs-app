import { Input } from 'native-base'
import React, { ChangeEvent } from 'react'
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputFocusEventData,
} from 'react-native'

type TProps = {
  placeholder: string
  handleChange: (e: string | ChangeEvent<any>) => void
  handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  value: string
  secureTextEntry?: boolean
  errors?: string
  keyboardType?: KeyboardTypeOptions | undefined
  label: string
}

const InputCommon = ({
  placeholder,
  handleChange,
  handleBlur,
  value,
  secureTextEntry = false,
  errors,
  keyboardType,
  label,
}: TProps) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange}
        onBlur={handleBlur}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {errors && <Text style={{ fontSize: 10, color: 'red' }}>{errors}</Text>}
    </>
  )
}

export default InputCommon

const styles = StyleSheet.create({
  label: {
    marginTop: 10,
  },
})
