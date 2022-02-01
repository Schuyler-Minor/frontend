import React, { useState }from 'react';
import FilterForm from './FilterForm'

const ClassFilter = () => {


    const initialFormValues = {
        yoga : false,
        zumba: false,
        insanity: false,
      }

    const [formValues, setFormValues] = useState(initialFormValues);

  return (
       
    <div > 
         <FilterForm
             
         />
    </div>
 
    );
}

export default ClassFilter;



