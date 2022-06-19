import React, { useState } from 'react'
// import { AddCategory } from './Components/AddCategory';
// import { GifGrid } from './Components/GifGrid';
import {AddCategory, GifGrid} from './Components'

// const categories = ['One Punch','Samurai X','Dragon Ball'];
const GifExpertApp = ({defaultCategories = []}) => {

    const [Categories, setCategories] = useState(defaultCategories);

    const onAddCategory = (newCategory) => {

        if(Categories.includes(newCategory)) return;

        // const categ = 'Hunter X Hunter';
        setCategories([ newCategory, ...Categories ]);
        // setCategories( cat => [...cat, categ])
    };

    return(
        <>
            <h2>GifExpertApp</h2>
            <h3> Seleccione una categoria </h3>
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            <hr/>

            {/* <button onClick={handleAdd} > Agregar </button> */}

            <ol>
                {
                    Categories.map(category => (
                        // return <li key={category} >{category}</li>
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;
