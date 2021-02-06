import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../Components/AddCategory";

describe('Pruebas en el componente AddCategory', () => {

    const setCategory = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={setCategory} />);

    beforeEach( ()=> {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategory} />);
    });

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de cambiar el input de texto', () => {
        
        const input = wrapper.find('input');

        const value = 'Hola Mundo';

        input.simulate('change', {
            target: {
                value: value
            }
        });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la informacion onSubmit', () => {
       
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategory).not.toHaveBeenCalled();

    });

    test('Debe de llamar el setCategory y debe limpiar la caja de texto', () => {
       
        // Simular inputChange
        wrapper.find('input').simulate('change', {target: {value: 'Hola Mundo'}});

        // Simular Submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        // se debe haber llamado el  setCategory
        expect(setCategory).toHaveBeenCalled();
        expect(setCategory).toHaveBeenCalledTimes(1);
        expect(setCategory).toHaveBeenCalledWith(expect.any(Function));

        // el valor del input debe ser ''
        expect(wrapper.find('input').prop('value')).toBe('');

    });
    
});
