import * as yup from 'yup'

export const githubValidationSchema = yup.object().shape({
  task_id: yup.string().required('Email Address is Required'),
})
