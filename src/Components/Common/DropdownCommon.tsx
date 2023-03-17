import { TSelect, TSelects } from '@model/index'
import React from 'react'
import { Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

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
    setFieldValue(name, item.value)
  }

  return (
    <View>
      <Text>{label}</Text>
      <DropDownPicker
        defaultValue={value || null}
        items={items}
        containerStyle={{ height: 40 }}
        onChangeItem={(item: TSelect) => {
          handleChange(item)
        }}
      />
      {errors && <Text style={{ fontSize: 10, color: 'red' }}>{errors}</Text>}
    </View>
  )
}

export default DropdownCommon
