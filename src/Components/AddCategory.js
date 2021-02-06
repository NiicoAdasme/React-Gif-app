import React, { useState } from 'react'
// import GifExpertApp from '../GifExpertApp'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = e => {
        setInputValue(e.target.value);

        // console.log('HandleInputChange llamado')
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log('HandleSubmit llamado, con valor: ', inputValue);
    
        if(inputValue.trim().length > 2){
            
            setCategories(categ => [inputValue, ...categ]);

            setInputValue('');
        }
    
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>  
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};


