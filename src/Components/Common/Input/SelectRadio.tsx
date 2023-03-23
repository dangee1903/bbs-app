/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { RadioButton, Text } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
import { TSelectString } from '@model/index'

type TProps = {
  data: TSelectString[]
  value?: string
  changeValue?: (value: string) => void
  errors?: string | string[]
}

const CheckBoxList = ({
  data = [],
  value = '0',
  changeValue = () => {},
  errors,
}: TProps) => {
  return (
    <>
      <View style={styles.checkboxTime}>
        {data.map(item => {
          return (
            <View key={item.value} style={styles.checkboxItem}>
              <RadioButton.Android
                value={item.value}
                status={value === item.value ? 'checked' : 'unchecked'}
                onPress={() => changeValue(item.value)}
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
