/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent } from 'react'
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  Text,
  TextInputFocusEventData,
  TextStyle,
  View,
} from 'react-native'
import { TextInput } from 'react-native-paper'

type TProps = {
  placeholder: string
  handleChange?: (e: string | ChangeEvent<any>) => void
  setChangeValue?: (e: string) => void
  handleBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  value: string
  secureTextEntry?: boolean
  errors?: string
  keyboardType?: KeyboardTypeOptions | undefined
  multiline?: boolean
  numberOfLines?: number
  mode?: 'flat' | 'outlined'
  label?: string
  right?: JSX.Element
  style?: StyleProp<TextStyle>
}

const InputText = ({
  placeholder,
  handleChange = () => {},
  handleBlur = () => {},
  value,
  secureTextEntry = false,
  errors,
  keyboardType,
  multiline = false,
  numberOfLines,
  mode = 'outlined',
  label,
  right,
  style,
  setChangeValue,
}: TProps) => {
  const handleChangeText = (v: string) => {
    return setChangeValue ? setChangeValue(v) : handleChange(v)
  }
  return (
    <View style={{ flexDirection: 'column', width: '100%' }}>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        mode={mode}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChangeText}
        onBlur={handleBlur}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        label={label}
        right={right}
        style={style}
      />
      {errors && <Text style={{ fontSize: 10, color: 'red' }}>{errors}</Text>}
    </View>
  )
}

export default InputText
