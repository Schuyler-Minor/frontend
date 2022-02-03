import * as yup from 'yup';

const signUpSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required.'), 
    password: yup
        .string()
        .trim()
        .required('Password is required'),
})

export default signUpSchema;