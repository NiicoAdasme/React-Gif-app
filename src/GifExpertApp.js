import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

// const categories = ['One Punch','Samurai X','Dragon Ball'];
const GifExpertApp = () => {

    const [Categories, setCategories] = useState(['']);

    // const handleAdd = () => {
    //     const categ = 'Hunter X Hunter';
    //     // setCategories([...Categories, categ]);
    //     setCategories( cat => [...cat, categ])
    // };

    return(
        <>
            <h2>GifExpertApp</h2>
            <h3> Seleccione una categoria </h3>
            <AddCategory setCategories={setCategories}/>
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
