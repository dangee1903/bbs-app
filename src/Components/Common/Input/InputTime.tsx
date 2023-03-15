/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'

type TProps = {
  valueDate?: string
  setValueDate?: (newDate: string) => void
  label?: string
  placeholder?: string
  width?: string | number
}

const InputTime = ({
  valueDate = '',
  setValueDate = () => {},
  label = '',
  placeholder = '',
  width = '100%',
}: TProps) => {
  const [value, setValue] = React.useState<string>(valueDate)
  const [show, setShow] = React.useState(false)

  const onChangeDate = (
    event: DateTimePickerEvent,
    date?: Date | undefined,
  ) => {
    if (date) {
      const newDate = `${date.getHours()}:${date.getMinutes()}`
      setShow(false)
      setValue(newDate)
      setValueDate(newDate)
    }
  }
  return (
    <View style={{ width }}>
      <TouchableOpacity onPress={() => setShow(true)}>
        <TextInput
          mode="outlined"
          label={label}
          placeholder={placeholder}
          value={value}
          onChangeText={v => setValue(v)}
          right={
            <TextInput.Icon
              color="#fff"
              icon="clock"
              onPress={() => setShow(true)}
              style={{ paddingLeft: 10 }}
            />
          }
          style={styles.dateInput}
        />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          mode="time"
          value={new Date()}
          testID="dateTimePicker"
          onChange={onChangeDate}
          style={{ width: 320, backgroundColor: 'white' }}
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
