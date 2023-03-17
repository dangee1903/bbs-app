import { message } from '@constants/message'
import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email(message.required).required(message.required),
  password: yup.string().required(message.required),
})
