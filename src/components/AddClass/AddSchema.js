import * as yup from 'yup';

const addSchema = yup.object().shape({
    class_name: yup
    .string()
    .required("Class Name is Required!")
    .min(3, 'Name must be at least 3 characters'),
    class_type: yup
    .string()
    .required("Class type is Required!")
    .min(3, 'Type must be at least 3 characters') ,
    start: yup
    .string()
    .required(),
    duration: yup
    .string()
    .required(),
    dropdown: yup
    .string()
    .required(),
    location: yup
    .string()
    .required(),
    maxSize: yup
    .string()
    .required(),
    currentClients: yup
    .string()
    .required(),
})

export default addSchema;