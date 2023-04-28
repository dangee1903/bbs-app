/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENUM_COLOR } from '@constants/enum'
import React, { ChangeEvent } from 'react'
import {
  Keyboard,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextStyle,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { HelperText, TextInput } from 'react-native-paper'

type TProps = {
  placeholder?: string
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
  onPress?: () => void
  disable?: boolean
  selectionColor?: string
  colorPlaceholder?: string
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
  onPress = () => {},
  disable = false,
  selectionColor = ENUM_COLOR.white,
  colorPlaceholder,
}: TProps) => {
  const handleChangeText = (v: string) => {
    return setChangeValue ? setChangeValue(v) : handleChange(v)
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
          style={[style, { backgroundColor: ENUM_COLOR.white }]}
          onFocus={onPress}
          selectionColor={selectionColor}
          showSoftInputOnFocus
          disabled={disable}
          contentStyle={{
            paddingHorizontal: 10,
            paddingTop: 10,
            paddingBottom: 10,
          }}
          placeholderTextColor={colorPlaceholder}
        />
        <HelperText
          style={{ paddingVertical: 0 }}
          type="error"
          visible={!!errors}
        >
          {errors}
        </HelperText>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default InputText
