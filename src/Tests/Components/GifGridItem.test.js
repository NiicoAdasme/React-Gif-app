import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {GifGridItem} from '../../Components/GifGridItem';

describe('Pruebas al componente GifGridItem', () => {

    const titulo = 'Un titulo';

    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow(<GifGridItem title={titulo} url={url} />);


    test('Debe retornar el componente', () => {

        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe de tener una etiqueta <p></p> con el title', () => {
       
        const p = wrapper.find('p').text().trim();

        expect(p).toBe(titulo);


    });
    
    test('Debe de tener la imagen  igual al url y alt de los pros', () => {
       
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(titulo);

    });
    
    test('Debe de tener la clase animate__bounce', () => {
       
        const div = wrapper.find('div');

        const clasName =  div.prop('className').includes('animate__bounce');

        expect(clasName).toBe(true);


    });
    

});
