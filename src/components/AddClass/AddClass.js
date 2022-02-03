import React, { useState, useEffect } from "react";
import AddClassForm from "./AddClassForm";
import * as yup from 'yup';
import schema from "../../validations/AddClassSchema";


const initialFormValues = {
    class_name: '',
    class_type: '',
    start: '',
    duration: '',
    dropdown: '',
    location: '',
    maxSize: '',
    currentClients: '',
}

const initialFormErrors = {
    class_name: '',
    class_type: '',
}


const initialDisabled = true;

const AddClass = () => {

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

 
    

    // const postNewClass = newClass => {

    // }

    const validate = (name, value) => {
        yup.reach(schema, name)
        .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: ''}))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }

    const inputChange = (name, value) => {
        validate(name, value)
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const formSubmit = () => {
        // const newClass = {
        //     class_name: formValues.class_name.trim(),
        //     class_type: formValues.class_type.trim() ,
        //     start: formValues.start,
        //     duration: formValues.duration ,
        //     dropdown: formValues.dropdown.trim(),
        //     location: formValues.location.trim(),
        //     maxSize: formValues.maxSize,
        //     currentClients: formValues.currentClients ,
        // }
    //    postNewClass(newClass) 
}

useEffect(() => {

    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

    

    return(
        <div>
         
            <AddClassForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
            />
        </div>
    )

}

export default AddClass;