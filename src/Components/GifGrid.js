import React from 'react';
import { useFetchGifs } from '../Hooks/useFetchGifs';
// import { getGifs } from '../Helpers/getGifs';
import { GifGridItem } from './GifGridItem';
// import GifExpertApp from '../GifExpertApp';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);

    // getGifs();

    if(category === ""){
        return "Busque una categoria y presione la tecla Enter para buscar el Gif";
    }else{
        return (
            <>
                <h3 className="animate__fadeInDown">Categoria: {category} </h3>
    
                {loading && <p className="animate__flash">Loading...</p>}
    
                <div className="cardGrid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            // img={img}
                            {...img} 
                        />
                    ))
                }
            </div>
            </>
            
        );
    }
    
    
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};