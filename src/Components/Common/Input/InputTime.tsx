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
import { FormatDate } from '@constants/date'
import InputText from './InputText'

type TProps = {
  valueDate?: string
  setValueDate?: (newDate: string) => void
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
  const [value, setValue] = React.useState<string>(valueDate ?? '')
  const [show, setShow] = React.useState(false)

  const onChangeDate = (
    event: DateTimePickerEvent,
    date?: Date | undefined,
  ) => {
    if (date) {
      const newDate = moment(date).format(FormatDate.TIME_12_HOUR)
      setShow(false)
      setValue(newDate)
      setValueDate(newDate)
    }
  }

  const openTimePicker = () => {
    setShow(true)
  }

  return (
    <View style={{ width }}>
      <TouchableOpacity onPress={() => setShow(true)}>
        <InputText
          mode="outlined"
          label={label}
          placeholder={placeholder}
          value={value}
          right={
            <TextInput.Icon
              color={ENUM_COLOR.white}
              icon="alarm"
              onPress={() => setShow(true)}
              style={{ paddingLeft: 10 }}
            />
          }
          handleBlur={handleBlur}
          style={styles.dateInput}
          errors={errors}
          onPress={openTimePicker}
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          mode="time"
          value={new Date()}
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
