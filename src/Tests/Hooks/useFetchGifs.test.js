import { useFetchGifs } from "../../Hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Prubeas en el custom hooks useFetchGifs', () => {
   
    test('Debe retornar el estado inicial', async() => {
       
        // const {data:images, loading} = useFetchGifs('One Punch');
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch') );
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    });


    test('Debe de retornar un arreglo de imagenes y el loading en false', async() => {
       
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch') );
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });
    

});
