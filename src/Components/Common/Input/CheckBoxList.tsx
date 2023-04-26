/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react'
import { Checkbox, HelperText, Text } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
import { TSelectString } from '@model/index'
import { ENUM_COLOR } from '@constants/enum'

type TProps = {
  data: TSelectString[]
  optionTime?: string[]
  setOptionTime?: (value: string[]) => void
  errors?: string | string[]
}

const CheckBoxList = ({
  data = [],
  optionTime = [],
  setOptionTime = () => {},
  errors,
}: TProps) => {
  const [selected, setSelected] = useState<string[]>(optionTime)

  const onSelect = (value: string, isSelected: boolean) => {
    if (!isSelected) {
      const selectedIndex = selected.indexOf(value)
      const newSelectedItems = [...selected]
      newSelectedItems.splice(selectedIndex, 1)
      setSelected(newSelectedItems)
      setOptionTime(newSelectedItems)
    } else {
      setSelected([...selected, value])
      setOptionTime([...selected, value])
    }
  }
  return (
    <>
      <View style={styles.checkboxTime}>
        {data?.map(item => {
          return (
            <View key={item.value} style={styles.checkboxItem}>
              <Checkbox.Android
                status={selected.includes(item.value) ? 'checked' : 'unchecked'}
                onPress={() => {
                  onSelect(item.value, !selected.includes(item.value))
                }}
              />
              <Text style={styles.label}>{item.label}</Text>
            </View>
          )
        })}
      </View>
      <HelperText
        style={{ paddingVertical: 0 }}
        type="error"
        visible={!!errors}
      >
        {errors}
      </HelperText>
    </>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    padding: 0,
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxTime: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: ENUM_COLOR.backgroundGray,
  },
  label: {
    marginRight: 10,
  },
})

export default CheckBoxList
