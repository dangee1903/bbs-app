/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import {
  TouchableOpacity,
  View,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native'
import { TextInput } from 'react-native-paper'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import moment from 'moment'
import { ENUM_COLOR } from '@constants/enum'
import InputText from './InputText'

type TProps = {
  valueDate?: string
  setValueDate?: (newDate: string) => void
  handleBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  errors?: string
  minDate?: Date
}

const InputDate = ({
  valueDate = '',
  setValueDate = () => {},
  handleBlur = () => {},
  errors,
  minDate = new Date(),
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

  const openDatePicker = () => {
    setShow(true)
  }
  return (
    <View>
      <TouchableOpacity style={styles.datePicker}>
        <InputText
          mode="outlined"
          label="Chọn ngày"
          placeholder="Nhập ngày"
          value={value}
          right={
            <TextInput.Icon icon="calendar-range" onPress={openDatePicker} />
          }
          handleBlur={handleBlur}
          style={styles.dateInput}
          errors={errors}
          onPress={openDatePicker}
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={new Date()}
          testID="dateTimePicker"
          is24Hour
          minimumDate={minDate}
          onChange={onChangeDate}
          style={{ width: 320, backgroundColor: ENUM_COLOR.white }}
        />
      )}
    </View>
  )
}

export default InputDate

const styles = StyleSheet.create({
  datePicker: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  dateInput: {
    width: '100%',
    marginTop: 10,
  },
})
