import React from 'react';

const FilterForm = () => {
    
  return (
    <div className="Filter-menu">
        <form id='filter-form'>
        <label>Yoga
                    <input
                        type='checkbox'
                        name='yoga'
                        //onChange={onChange}
                    />
                </label>

                <label>Insanity
                <input
                    type='checkbox'
                    name='insanity'
                    //onChange={onChange}
                />
                </label>

                <label>Zumba
                <input
                    type='checkbox'
                    name='zumba'
                    //onChange={onChange}
                />
                </label>
        </form>
    </div>);
}

export default FilterForm;