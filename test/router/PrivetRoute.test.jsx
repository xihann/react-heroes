import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <PrivetRoute/>', () => {

    test('debe mostrar le children si esta autenticado ', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                name: 'Andres',
                id: 'Abc123'
            }
        }
        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>

            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect( localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');
    });


})
