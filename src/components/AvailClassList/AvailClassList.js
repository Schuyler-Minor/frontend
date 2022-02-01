import React, {useState} from 'react';

import ClassFilter from './ClassFilter'
import Class from '../Class/Class';


import styled from 'styled-components';

const ClassList = () => {

    const [open, setOpen] = useState(false)
    const handleToggle = () => setOpen(!open);

    const currentClasses= [
       
            { id: 1,  type:'yoga', name: 'Beginner Yoga', intensity: 'Low', location: 'Park', duration: '30 minutes',  },
            { id: 2,  type:'yoga', name: 'Intermediate Yoga', intensity: 'Low', location: 'Park', duration: '60 minutes',  },
            { id: 3,  type:'yoga', name: 'Advanced Yoga', intensity: 'Low', location: 'Park', duration: '90 minutes',  },
       
            { id: 4,  type:'insanity', name: 'Beginner Insanity', intensity: 'High', location: 'Unfinished Basement', duration: '30 minutes',  },
            { id: 5,  type:'insanity', name: 'Intermediate Insanity', intensity: 'High', location: 'Unfinished Basement', duration: '60 minutes',  },
            { id: 6,  type:'insanity', name: 'Advanced Insanity', intensity: 'High', location: 'Unfinished Basement', duration: '90 minutes',  },
        
            { id: 7,  type:'zumba', name: 'Beginner Zumba', intensity: 'High', location: 'Garage', duration: '30 minutes',  },
            { id: 8,  type:'zumba', name: 'Intermediate Zumba', intensity: 'High', location: 'Garage', duration: '60 minutes',  },
            { id: 9,  type:'zumba', name: 'Advanced Zumba', intensity: 'High', location: 'Garage', duration: '90 minutes',  },   
    ]


  return (
    <ListContainer>
        <FilterContainer>
            <h2>Available Classes</h2>
            <button onClick={handleToggle} className="filterButton">{open ? "Close" : "Filter"} </button>  
            {
            open
            ? ( <ClassFilter classes={currentClasses} />
              
            )
            : (
              null
            )
        }
        </FilterContainer>

         <ClassContainer>
            {currentClasses.map((fitnessClass) => <Class key={fitnessClass.id} fitnessClass={fitnessClass} handleToggle={handleToggle}/>)}
         </ClassContainer>
               
    </ListContainer>
    );
}

export default ClassList;

const ListContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: auto;
`

const FilterContainer = styled.div`
  display: flex;
  margin: auto;
  flex-flow: column wrap;
`


const ClassContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  background: grey;
  padding: 5%;
  width: 50%;
  margin: auto;
`

