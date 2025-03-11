import { types } from "../../../src/auth";


describe('Pruebas en el types.js', () => {
    test('Deberia retornar los types correctos"', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
    });



});
