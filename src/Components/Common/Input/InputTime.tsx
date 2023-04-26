/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import {
  TouchableOpacity,
  View,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Keyboard,
} from 'react-native'
import { TextInput } from 'react-native-paper'
import { ENUM_COLOR } from '@constants/enum'
import { FormatDate, nowHour, nowMinute } from '@constants/date'
import { TimePickerModal } from 'react-native-paper-dates'
import moment from 'moment'
import { converStringToDate } from '@helpers/string'
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

type TTime = {
  hours: number
  minutes: number
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

  const openTimePicker = () => {
    setShow(true)
  }

  const onDismiss = React.useCallback(() => {
    setShow(false)
  }, [setShow])

  const onConfirm = React.useCallback(
    ({ hours, minutes }: TTime) => {
      const date = `${hours}:${minutes}`
      const newDate = moment(converStringToDate(date, FormatDate.TIME)).format(
        FormatDate.TIME_12_HOUR,
      )
      setShow(false)
      setValue(newDate)
      setValueDate(newDate)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return (
    <View style={{ width }}>
      <TouchableOpacity
        onPress={() => {
          setShow(true)
          Keyboard.dismiss()
        }}
      >
        <View pointerEvents="none">
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
            errors={errors}
            onPress={openTimePicker}
          />
        </View>
      </TouchableOpacity>
      <TimePickerModal
        locale="vi"
        visible={show}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={nowHour}
        minutes={nowMinute}
        use24HourClock={false}
        label="Chọn giờ"
        cancelLabel="Hủy"
        confirmLabel="Lưu"
      />
    </View>
  )
}

export default InputTime
