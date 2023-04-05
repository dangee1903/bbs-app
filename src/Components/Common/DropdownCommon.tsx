import { TSelect, TSelects } from '@model/index'
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { HelperText } from 'react-native-paper'
import DropDown from 'react-native-paper-dropdown'

type TProps = {
  items: TSelects | []
  label?: string
  value: string | number | null
  errors?: string
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => void
  name: string
}

const DropdownCommon = ({
  items,
  label,
  value,
  errors,
  setFieldValue,
  name,
}: TProps) => {
  const [showDropDown, setShowDropDown] = useState(false)
  const [gender, setGender] = useState<string>('')

  const handleChange = (item: TSelect) => {
    setFieldValue(name, item.value)
  }

  const genderList = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Others',
      value: 'others',
    },
  ]

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
      style={styles.selectWarp}
    >
      <View>
        {items.length > 0 && (
          <>
            <View style={styles.selectWarp}>
              <DropDown
                label="Gender"
                mode="outlined"
                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={gender}
                setValue={setGender}
                list={genderList}
                dropDownStyle={{
                  backgroundColor: '#fffff',
                }}
                dropDownItemStyle={{
                  backgroundColor: '#fffff',
                }}
              />
            </View>
            <HelperText type="error" visible={!!errors}>
              {errors}
            </HelperText>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default DropdownCommon

const styles = StyleSheet.create({
  selectWarp: {
    position: 'relative',
    zIndex: 1,
  },
  label: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 10,
    zIndex: 1,
    transform: [{ translateY: -10 }],
    fontSize: 12,
  },
})
