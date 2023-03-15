import * as yup from 'yup'

export const requestValidationSchema = yup.object().shape({
  note: yup.string().required('Note is Required'),
  work_day: yup.string().required('Work day is required'),
  option_time: yup.array().min(1, 'Option time is required'),
})
