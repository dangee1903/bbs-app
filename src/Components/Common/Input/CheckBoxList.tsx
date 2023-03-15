/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react'
import { Checkbox, Text } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
import { TSelectString } from '@model/index'

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
        {data.map(item => {
          return (
            <View key={item.value} style={styles.checkboxItem}>
              <Checkbox
                status={selected.includes(item.value) ? 'checked' : 'unchecked'}
                onPress={() => {
                  onSelect(item.value, !selected.includes(item.value))
                }}
              />
              <Text>{item.label}</Text>
            </View>
          )
        })}
      </View>
      {errors && <Text style={{ fontSize: 10, color: 'red' }}>{errors}</Text>}
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
  dateInput: {
    width: '100%',
    marginTop: 10,
  },
  checkboxTime: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 30,
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: 'rgba(33, 33, 33, 0.08)',
  },
})

export default CheckBoxList
