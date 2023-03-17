import { PERMISSION_TYPE } from '@constants/request'
import * as yup from 'yup'

export const requestValidationSchema = (permissionType: string) => {
  if (permissionType === PERMISSION_TYPE.NORMAL) {
    return yup.object().shape({
      note: yup.string().required('Note is Required'),
      work_day: yup.string().required('Work day is required'),
    })
  }

  if (permissionType === PERMISSION_TYPE.OVERTIME) {
    return yup.object().shape({
      note: yup.string().required('Note is Required'),
      work_day: yup.string().required('Work day is required'),
      start_at: yup.string().required('Start time is required'),
      end_at: yup.string().required('End time is required'),
    })
  }

  return yup.object().shape({
    note: yup.string().required('Note is Required'),
    work_day: yup.string().required('Work day is required'),
    option_time: yup.array().min(1, 'Option time is required'),
  })
}
