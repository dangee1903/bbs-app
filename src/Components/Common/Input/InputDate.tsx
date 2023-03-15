/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import {
  TouchableOpacity,
  View,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Text,
} from 'react-native'
import { TextInput } from 'react-native-paper'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import moment from 'moment'
import InputText from './InputText'

type TProps = {
  valueDate?: string
  setValueDate?: (newDate: string) => void
  handleBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  errors?: string
}

const InputDate = ({
  valueDate = '',
  setValueDate = () => {},
  handleBlur = () => {},
  errors,
}: TProps) => {
  const [value, setValue] = React.useState<string>(valueDate)
  const [show, setShow] = React.useState(false)

  const onChangeDate = (
    event: DateTimePickerEvent,
    date?: Date | undefined,
  ) => {
    if (date) {
      const newDate = moment(date).format('YYYY-MM-DD')
      setShow(false)
      setValue(newDate)
      setValueDate(newDate)
    }
  }
  return (
    <View>
      <TouchableOpacity style={styles.datePicker} onPress={() => setShow(true)}>
        <InputText
          mode="outlined"
          label="Chọn ngày"
          placeholder="Nhập ngày"
          value={value}
          setChangeValue={v => setValue(v)}
          right={
            <TextInput.Icon icon="calendar" onPress={() => setShow(true)} />
          }
          handleBlur={handleBlur}
          style={styles.dateInput}
          errors={errors}
        />
      </TouchableOpacity>
      {errors && <Text style={{ fontSize: 10, color: 'red' }}>{errors}</Text>}
      {show && (
        <DateTimePicker
          value={new Date()}
          testID="dateTimePicker"
          is24Hour
          onChange={onChangeDate}
          style={{ width: 320, backgroundColor: 'white' }}
        />
      )}
    </View>
  )
}

export default InputDate

const styles = StyleSheet.create({
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    width: '100%',
    marginTop: 10,
  },
})
