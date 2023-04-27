/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import InputDate from '@components/Common/Input/InputDate'
import CheckBoxList from '@components/Common/Input/CheckBoxList'
import {
  listTime,
  listSession,
  listTitle,
  PERMISSION_STATUS,
  PERMISSION_TYPE,
  listDayOff,
  OT_TYPE,
} from '@constants/request'
import InputTime from '@components/Common/Input/InputTime'
import { TDataShow, TRequestState } from '@model/Request'
import {
  useRequestMutation,
  useDayOffMutation,
} from '@services/modules/request'
import InputText from '@components/Common/Input/InputText'
import DropdownCommon from '@components/Common/DropdownCommon'
import { useJoinedQuery } from '@services/modules/project'
import { TSelects } from '@model/index'
import SelectRadio from '@components/Common/Input/SelectRadio'
import { useReduxSelector } from '@store/index'
import Toast from 'react-native-toast-message'
import moment from 'moment'
import { Formik } from 'formik'
import { converStringToDate } from '@helpers/string'
import { FormatDate } from '@constants/date'
import { HelperText } from 'react-native-paper'
import { message } from '@constants/message'
import { ENUM_COLOR } from '@constants/enum'
import ModalCommon from '../../../Components/Modal/Modal'
import { requestValidationSchema } from './ModalState'

type TProps = {
  title?: string
  isShowModal?: boolean
  setShowModal?: (active: boolean) => void
  dataShow: TDataShow
}

const ModalRequest = ({
  title = '',
  isShowModal,
  setShowModal = () => {},
  dataShow,
}: TProps) => {
  const [postRequest] = useRequestMutation()
  const [postDayOff] = useDayOffMutation()
  const { data: joinedPjs, isLoading: loadingJoined } = useJoinedQuery()
  const { data } = useReduxSelector(state => state.login.user)
  const [errApi, setErrApi] = useState('')

  const selectAssigneeLists = (): TSelects | [] => {
    if (!loadingJoined && joinedPjs?.data?.projects?.length) {
      return joinedPjs?.data?.projects?.map((member: any) => ({
        label: member.name,
        value: member.id,
      }))
    }
    return []
  }

  useEffect(() => {
    setErrApi('')
  }, [dataShow, isShowModal])

  return (
    <Formik
      validationSchema={requestValidationSchema(dataShow.permission_type)}
      initialValues={
        {
          note: '',
          work_day: '',
          option_time: [],
          project: '',
          session: '0',
          start_at: '',
          end_at: '',
        } as TRequestState
      }
      onSubmit={async values => {
        try {
          if (dataShow.permission_type === PERMISSION_TYPE.NORMAL) {
            await postDayOff({
              end_at: values.work_day,
              start_at: values.work_day,
              reason: values.note,
              start:
                listDayOff[values.session as keyof typeof listDayOff].start,
              end: listDayOff[values.session as keyof typeof listDayOff].end,
              approver_id: String(data.team.leader_id),
            }).unwrap()
          } else if (dataShow.permission_type === PERMISSION_TYPE.OVERTIME) {
            await postRequest({
              permission_ot: null,
              permission_type: dataShow.permission_type,
              work_day: values.work_day,
              permission_status: PERMISSION_STATUS.NOT_APPROVED_YET,
              option_time: values.option_time,
              note: values.note,
              ot_type: OT_TYPE.PROJECT,
              project_id: Number(values.project),
              // default break_time
              break_time: '0',
              start_at: moment(
                converStringToDate(values.start_at, FormatDate.TIME_12_HOUR),
              ).format(FormatDate.TIME),
              end_at: moment(
                converStringToDate(values.end_at, FormatDate.TIME_12_HOUR),
              ).format(FormatDate.TIME),
            }).unwrap()
          } else {
            await postRequest({
              permission_early:
                dataShow.permission_type === PERMISSION_TYPE.LATE
                  ? undefined
                  : null,
              permission_late:
                dataShow.permission_type === PERMISSION_TYPE.LATE
                  ? null
                  : undefined,
              permission_type: dataShow.permission_type,
              work_day: values.work_day,
              permission_status: PERMISSION_STATUS.NOT_APPROVED_YET,
              option_time: values.option_time,
              note: values.note,
            }).unwrap()
          }
          Toast.show({
            text1: message.create_request_success,
            onShow() {
              setShowModal(false)
              setErrApi('')
            },
          })
          // eslint-disable-next-line no-empty
        } catch (error: any) {
          setErrApi(message.create_request_error)
        }
      }}
      validate={values => {
        const errors = { end_at: '', option_time: '' }
        if (values.start_at && values.end_at) {
          if (
            converStringToDate(
              values.start_at,
              FormatDate.TIME_12_HOUR,
            ).getTime() >
              converStringToDate(
                values.end_at,
                FormatDate.TIME_12_HOUR,
              ).getTime() &&
            dataShow.permission_type === PERMISSION_TYPE.OVERTIME
          ) {
            errors.end_at = message.min_end_time_error
            return errors
          }
        }
        if (values.option_time.length) {
          const res = values.option_time
            .map(time => Number(time))
            .reduce((total, currentValue) => {
              return total + currentValue
            })
          if (res > 2) {
            errors.option_time = message.min_option_time_error
            return errors
          }
        }
        return {}
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
        <ModalCommon
          isShowModal={isShowModal}
          setShowModal={setShowModal}
          title={
            title ||
            listTitle[dataShow.permission_type as keyof typeof listTitle]
          }
          handleConfirm={() => handleSubmit()}
          handleCancle={handleReset}
          disable={!isValid}
          isError={!!errApi}
        >
          <HelperText
            style={{ paddingVertical: 0 }}
            type="error"
            visible={!!errApi}
          >
            {errApi}
          </HelperText>
          <View
            style={{
              flexDirection:
                dataShow.permission_type === PERMISSION_TYPE.OVERTIME
                  ? 'column-reverse'
                  : 'column',
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
                style={styles.reasonRequest}
                selectionColor={ENUM_COLOR.black}
                colorPlaceholder={ENUM_COLOR.colorReason}
              />
            )}
            {dataShow.time && (
              <View style={styles.timeRequest}>
                <InputTime
                  valueDate={values.start_at}
                  setValueDate={newValue => setFieldValue('start_at', newValue)}
                  width="45%"
                  label="Bắt đầu"
                  handleBlur={handleBlur('start_at')}
                  errors={errors.start_at}
                />
                <InputTime
                  valueDate={values.end_at}
                  setValueDate={newValue => setFieldValue('end_at', newValue)}
                  width="45%"
                  label="Kết thúc"
                  errors={errors.end_at}
                  handleBlur={handleBlur('end_at')}
                />
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
            {dataShow.checkBoxSession && (
              <SelectRadio
                value={values.session}
                data={listSession}
                changeValue={newValue => setFieldValue('session', newValue)}
                errors={errors.session}
              />
            )}
            {dataShow.project && (
              <DropdownCommon
                value={values.project}
                label="Dự án"
                items={selectAssigneeLists()}
                setFieldValue={setFieldValue}
                name="project"
                errors={errors.project}
              />
            )}
          </View>
        </ModalCommon>
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
  reasonRequest: {
    height: 85,
    margin: 0,
  },
})
