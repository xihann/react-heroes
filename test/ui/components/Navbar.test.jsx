import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en el <Navbar/>', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Axel'
        },
        logout: jest.fn(),
    }

    beforeEach(() => jest.clearAllMocks());


    test('debe parecer el nombre del usuario cuando se hace login ', () => {

        const user = 'Axel';
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(user).toEqual(contextValue.user.name);

    });

    test('debe de llamar el logout y navigate cuando se hace clic en el boton', () => {

        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const logoutButton = screen.getByRole('button');
        fireEvent.click( logoutButton);

        expect( contextValue.logout).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith( '/login', { replace: true } );

    })



})
