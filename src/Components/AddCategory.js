import React, { useState } from 'react'
// import GifExpertApp from '../GifExpertApp'
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = e => {
        setInputValue(e.target.value);

        // console.log('HandleInputChange llamado')
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log('HandleSubmit llamado, con valor: ', inputValue);

        const inputClean = inputValue.trim()
    
        if(inputClean.length > 2){
            
            // setCategories(categ => [inputValue, ...categ]);
            onNewCategory(inputClean)

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
    onNewCategory: PropTypes.func.isRequired
};


