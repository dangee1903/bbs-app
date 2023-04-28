/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
} from 'react-native'
import { TextInput } from 'react-native-paper'
import moment from 'moment'
import { FormatDate } from '@constants/date'
import { DatePickerModal } from 'react-native-paper-dates'
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

  const openDatePicker = () => {
    setShow(true)
  }

  const onDismissSingle = React.useCallback(() => {
    setShow(false)
  }, [setShow])

  const onConfirmSingle = React.useCallback(
    (params: any) => {
      if (params?.date) {
        const newDate = moment(params.date).format(FormatDate.DATE_VIEW)
        const dateSubmit = moment(params.date).format(FormatDate.DATE_FULL)
        setShow(false)
        setValue(newDate)
        setValueDate(dateSubmit)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
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
      <DatePickerModal
        locale="vi"
        mode="single"
        visible={show}
        onDismiss={onDismissSingle}
        date={new Date()}
        onConfirm={onConfirmSingle}
        saveLabel="Lưu"
        label="Chọn ngày"
        validRange={{ startDate: minDate }}
        inputEnabled={false}
      />
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
  },
})
