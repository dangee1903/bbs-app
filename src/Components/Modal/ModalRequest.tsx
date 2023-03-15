import React from 'react'
import { View, StyleSheet } from 'react-native'
import InputDate from '@components/Common/Input/InputDate'
import CheckBoxList from '@components/Common/Input/CheckBoxList'
import { listTime, listSession, listTitle } from '@constants/request'
import InputTime from '@components/Common/Input/InputTime'
import { TDataShow } from '@model/Request'
import { useRequestMutation } from '@services/modules/request'
import InputText from '@components/Common/Input/InputText'
import { Formik } from 'formik'
import { requestValidationSchema } from '@screens/Request/requestState'
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
  const [postRequest] = useRequestMutation()

  return (
    <Formik
      validationSchema={requestValidationSchema}
      initialValues={{
        note: '',
        work_day: '',
        option_time: [],
      }}
      onSubmit={async values => {
        try {
          await postRequest({
            permission_early: null,
            permission_type: dataShow.permission_type,
            work_day: values.work_day,
            permission_status: '0',
            option_time: values.option_time,
            note: values.note,
          })
          // eslint-disable-next-line no-empty
        } catch (error) {}
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        setFieldValue,
        handleReset,
      }) => (
        <ModalTask
          isShowModal={isShowModal}
          setShowModal={setShowModal}
          title={
            title ||
            listTitle[dataShow.permission_type as keyof typeof listTitle]
          }
          handleConfirm={() => handleSubmit()}
          handleReset={handleReset}
          disable={!isValid}
        >
          <View
            style={{
              flexDirection:
                dataShow.permission_type === '4' ? 'column-reverse' : 'column',
            }}
          >
            {dataShow.reason && (
              <InputText
                multiline
                numberOfLines={4}
                label="Lý do"
                placeholder="Nhập lý do"
                handleChange={handleChange('note')}
                handleBlur={handleBlur('note')}
                value={values.note}
                errors={errors.note}
              />
            )}
            {dataShow.time && (
              <View style={styles.timeRequest}>
                <InputTime width="45%" label="Bắt đầu" />
                <InputTime width="45%" label="Kết thúc" />
              </View>
            )}
            {dataShow.date && (
              <InputDate
                valueDate={values.work_day}
                setValueDate={newValue => setFieldValue('work_day', newValue)}
                handleBlur={handleBlur('work_day')}
                errors={errors.work_day}
              />
            )}
            {dataShow.checkboxTime && (
              <CheckBoxList
                optionTime={values.option_time}
                setOptionTime={newValue =>
                  setFieldValue('option_time', newValue)
                }
                data={listTime}
                errors={errors.option_time}
              />
            )}
            {dataShow.checkBoxSession && <CheckBoxList data={listSession} />}
          </View>
        </ModalTask>
      )}
    </Formik>
  )
}

export default ModalRequest

const styles = StyleSheet.create({
  modalContainer: {
    flexDirection: 'column-reverse',
  },
  timeRequest: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    width: '100%',
  },
})
