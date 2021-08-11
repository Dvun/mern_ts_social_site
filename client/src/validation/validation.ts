import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('Name is Required!'),
  lastName: yup.string().required('Surname is Required!'),
  userName: yup.string().required('Username is Required!'),
  email: yup.string().required('Email is Required!').email(),
  password: yup.string().required('Password is Required!'),
  repeatPassword: yup.string().required('Password must match!').oneOf([yup.ref('password'), null], 'Password must match!')
})

export const loginSchema = yup.object().shape({
  email: yup.string().required('Email is Required!').email('Email is incorrect!'),
  password: yup.string().required('Password is Required!').min(6),
})
