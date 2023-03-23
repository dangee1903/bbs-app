import { message } from '@constants/message'
import { PERMISSION_TYPE } from '@constants/request'
import * as yup from 'yup'

export const requestValidationSchema = (permissionType: string) => {
  if (permissionType === PERMISSION_TYPE.NORMAL) {
    return yup.object().shape({
      note: yup.string().required(message.required),
      work_day: yup.string().required(message.required),
    })
  }

  if (permissionType === PERMISSION_TYPE.OVERTIME) {
    return yup.object().shape({
      note: yup.string().required(message.required),
      work_day: yup.string().required(message.required),
      project: yup.string().required(message.required),
    })
  }

  return yup.object().shape({
    note: yup.string().required(message.required),
    work_day: yup.string().required(message.required),
    option_time: yup.array().min(1, message.required),
  })
}
