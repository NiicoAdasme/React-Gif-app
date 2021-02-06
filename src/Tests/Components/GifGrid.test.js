import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifGrid } from "../../Components/GifGrid";
import { useFetchGifs } from "../../Hooks/useFetchGifs";
jest.mock('../../Hooks/useFetchGifs');

describe('Pruebas en el componente GifGrid', () => {

    const category = "Hunter X";
   
    test('Debe de hacer match con el snapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
       
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/hunterx.jpg',
            title: 'Hunter X gif'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/hunterx2.jpg',
            title: 'Hunter X gif2'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });
    

});
