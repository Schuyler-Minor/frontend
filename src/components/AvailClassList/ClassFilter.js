import React, { useState }from 'react';
import Class from '../Class/Class';
import { Filter, SearchBar, Checkboxes } from '../../styled-comps/index';
//import axiosWithAuth from '../../utils/axiosWithAuth';

const ClassFilter = (props) => {

  const [searchTerm, setSearchTerm] = useState("");
  //const [reservedClass, setReservedClass] = useState([]);


    // const handleReserve(myClass) => {
    //   axiosWithAuth()
    //   .post(`/reservations/${myClass_id}`, myClass_id, client_id)
    //       .then(res=>{
    //           setReservedClass(res.data);
    //           push(`/my-classes`);
    // })
    // .catch(err=>{
    //   console.log(err);
    // })
    // }

  const { classes } = props;

  return (    
    <Filter> 
      <SearchBar>
      <div>
      <input
            type='text'
            placeholder='Search Classes'
            onChange={event => {setSearchTerm(event.target.value)}}
        />
      </div>
      </SearchBar>
      <Checkboxes>
{/* 
      function filterbyName (value) {
    if (handleCheck !== undefined) {
        let filterKeys = ['breakfast', 'luks', 'freeotopark', 'pool', 'wifi', 'gym', 'bar', 'beach', 'minigolf'];

        return filterKeys.every(function(key) {
            return !handleCheck[key] || value[key];
        });
    } else {
        return value;
    }
} */}

      </Checkboxes>
      
      { 
        classes.filter((value) => {
          if(searchTerm === "") {
            return value;
          } else if (value.class_name.toLowerCase().includes(searchTerm.toLowerCase())){
            return value;
          } else if (value.location.toLowerCase().includes(searchTerm.toLowerCase())){
            return value;
          } else if (value.class_type.toLowerCase().includes(searchTerm.toLowerCase())){
            return value;
          } else if (value.start_time.toLowerCase().includes(searchTerm.toLowerCase())){
            return value;
          }else if (value.duration.toLowerCase().includes(searchTerm.toLowerCase())){
            return value;
          }else if (`${value.intensity_level}`.toLowerCase().includes(searchTerm.toLowerCase())){
            return value;
          }
          }).map((value) => {
            return(<Class key={value.class_id} fitnessClass={value}/>)
          })
        }

    </Filter>
    );
}

export default ClassFilter;

