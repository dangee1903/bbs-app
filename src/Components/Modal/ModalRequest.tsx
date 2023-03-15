import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import InputDate from '@components/Input/InputDate'
import CheckBoxList from '@components/Input/CheckBoxList'
import { listTime, listSession, listTitle } from '@constants/request'
import InputTime from '@components/Input/InputTime'
import { TDataRequest, TDataShow } from '@model/Request'
import { useRequestMutation } from '@services/modules/request'
import ModalTask from './ModalTask'

type TProps = {
  title?: string
  isShowModal?: boolean
  setShowModal?: (active: boolean) => void
  dataShow: TDataShow
}

const ModalRequest = ({
  title = '',
  isShowModal,
  setShowModal,
  dataShow,
}: TProps) => {
  const [dataRequest, setDataRequest] = useState<TDataRequest>({
    note: '',
    work_day: '',
    option_time: [],
  })

  const [postRequest] = useRequestMutation()

  const updateNote = (value: string) => {
    setDataRequest(prev => {
      return { ...prev, note: value }
    })
  }

  const updateDate = (value: string) => {
    setDataRequest(prev => {
      return { ...prev, work_day: value }
    })
  }

  const updateOptionTime = (value: string[]) => {
    setDataRequest(prev => {
      return { ...prev, option_time: value }
    })
  }

  const handleSubmit = () => {
    postRequest({
      permission_early: null,
      permission_type: dataShow.permission_type,
      work_day: dataRequest.work_day,
      permission_status: '0',
      option_time: dataRequest.option_time,
      note: dataRequest.note,
    })
  }

  return (
    <ModalTask
      isShowModal={isShowModal}
      setShowModal={setShowModal}
      title={
        title || listTitle[dataShow.permission_type as keyof typeof listTitle]
      }
      handleConfirm={handleSubmit}
    >
      <View style={styles.modalContainer}>
        {dataShow.reason && (
          <TextInput
            multiline
            numberOfLines={4}
            mode="outlined"
            label="Lý do"
            placeholder="Nhập lý do"
            value={dataRequest.note}
            onChangeText={value => updateNote(value)}
          />
        )}
        {dataShow.date && (
          <InputDate
            valueDate={dataRequest.work_day}
            setValueDate={updateDate}
          />
        )}
        {dataShow.time && (
          <View style={styles.timeRequest}>
            <InputTime width="45%" label="Bắt đầu" />
            <InputTime width="45%" label="Kết thúc" />
          </View>
        )}
        {dataShow.checkboxTime && (
          <CheckBoxList
            optionTime={dataRequest.option_time}
            setOptionTime={updateOptionTime}
            data={listTime}
          />
        )}
        {dataShow.checkBoxSession && <CheckBoxList data={listSession} />}
      </View>
    </ModalTask>
  )
}

export default ModalRequest

const styles = StyleSheet.create({
  modalContainer: {},
  timeRequest: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    width: '100%',
  },
})
