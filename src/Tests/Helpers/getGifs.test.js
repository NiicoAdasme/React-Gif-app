import { getGifs } from "../../Helpers/getGifs";

describe('Pruebas con getGifs Fetch', () => {
   
    test('Debe traer 10 elementos', async() => {
       
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);

    });
    

});
