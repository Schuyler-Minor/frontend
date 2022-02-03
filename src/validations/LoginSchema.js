import * as yup from 'yup';

const loginSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required.'), 
    password: yup
        .string()
        .trim()
        .required('Password is required'),
    role: yup
        .string()
        .required('Please choose a role.'),
})

export default loginSchema;