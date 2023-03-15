/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
// import { Text } from 'react-native'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import moment from 'moment'

type TProps = {
  valueDate?: string
  setValueDate?: (newDate: string) => void
}

const InputDate = ({ valueDate = '', setValueDate = () => {} }: TProps) => {
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
        <TextInput
          mode="outlined"
          label="Chọn ngày"
          placeholder="Nhập ngày"
          value={value}
          onChangeText={v => setValue(v)}
          right={
            <TextInput.Icon icon="calendar" onPress={() => setShow(true)} />
          }
          style={styles.dateInput}
        />
      </TouchableOpacity>
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
