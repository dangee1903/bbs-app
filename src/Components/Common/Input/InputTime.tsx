/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import {
  TouchableOpacity,
  View,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native'
import { TextInput, Text } from 'react-native-paper'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import moment from 'moment'
import InputText from './InputText'

type TProps = {
  valueDate?: Date
  setValueDate?: (newDate: Date) => void
  handleBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  label?: string
  placeholder?: string
  width?: string | number
  errors?: string
}

const InputTime = ({
  valueDate,
  setValueDate = () => {},
  handleBlur = () => {},
  label = '',
  placeholder = '',
  width = '100%',
  errors,
}: TProps) => {
  const [value, setValue] = React.useState<Date | undefined>(valueDate)
  const [show, setShow] = React.useState(false)

  const onChangeDate = (
    event: DateTimePickerEvent,
    date?: Date | undefined,
  ) => {
    if (date) {
      setShow(false)
      setValue(date)
      setValueDate(date)
    }
  }
  return (
    <View style={{ width }}>
      <TouchableOpacity onPress={() => setShow(true)}>
        <InputText
          mode="outlined"
          label={label}
          placeholder={placeholder}
          value={moment(value).format('hh:mm A')}
          right={
            <TextInput.Icon
              color="#fff"
              icon="clock"
              onPress={() => setShow(true)}
              style={{ paddingLeft: 10 }}
            />
          }
          handleBlur={handleBlur}
          style={styles.dateInput}
        />
      </TouchableOpacity>
      {errors && <Text style={{ fontSize: 10, color: 'red' }}>{errors}</Text>}
      {show && (
        <DateTimePicker
          mode="time"
          value={value ?? new Date()}
          testID="dateTimePicker"
          onChange={onChangeDate}
          display="compact"
        />
      )}
    </View>
  )
}

export default InputTime

const styles = StyleSheet.create({
  dateInput: {
    marginTop: 10,
  },
})
