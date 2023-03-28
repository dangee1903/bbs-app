import { TSelect, TSelects } from '@model/index'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { HelperText } from 'react-native-paper'

type TProps = {
  items: TSelects | []
  label: string
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
  const handleChange = (item: TSelect) => {
    console.log('name', name);
    console.log('item.value', item.value);
    setFieldValue(name, item.value)
  }

  return (
    <View>
      {items.length > 0 && (
        <>
          <DropDownPicker
            defaultValue={value}
            items={items}
            containerStyle={{ height: 40 }}
            onChangeItem={(item: TSelect) => {
              handleChange(item)
            }}
          />
          <HelperText type="error" visible={!!errors}>
            {errors}
          </HelperText>
        </>
      )}
    </View>
  )
}

export default DropdownCommon

const styles = StyleSheet.create({
  selectWarp: {
    position: 'relative',
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
