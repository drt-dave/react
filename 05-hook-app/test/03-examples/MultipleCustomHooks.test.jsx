import { fireEvent, render, screen} from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch"; // It is recommended to point to the specific file and not the barrel file

// Mock the hooks to simulate their values in the tests
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Tests in  <MultipleCustomHooks', () => {

    // Create a mock function for increment
    const mockIncrement = jest.fn();

    // Mock data for the test
    const mockData = {
        id: 123456,
        name: 'AmonRa',
        sprites: {
            front_default: 'front_default_url',
            front_shiny: 'front_shiny_url',
            back_default: 'back_default_url',
            back_shiny: 'back_shiny_url',
        },
    }

    // Set up the mock return value for useCounter before each test
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    // Clear all before each test
    beforeEach( () => {
        jest.clearAllMocks();
    });

    // Test for the default component state
    test('Should display the default component state', () => {

        // Set up useFetch to return a loading state
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
        })

        // Render the component
        render(<MultipleCustomHooks />)

        // Verify the text "Cargando..." and "Información de Pokémon" are displayed
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Información de Pokemón'))

        // Verify that the "Siguiente" button is disabled
        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextButton.disabled).toBeTruthy()

        // screen.debug() //Uncomment to view the DOM structure
    });


    // Test for displaying a Pokémon
    test('Should display a Pokémon', () => {

        // Set up useFetch for return Pokémon data
        useFetch.mockReturnValue({
            data: mockData,
            isLoading: false,
            hasError: false,
        })

        // Render the component
        render(<MultipleCustomHooks />);

        // Verify that the Pokémon name an ID are displayed
        expect(screen.getByText('AmonRa')).toBeTruthy();
        expect(screen.getByText(/123456/)).toBeTruthy();// /Using a regular expression/

        // Verify that the siguiente button is not disabled
        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextButton.disabled).toBeFalsy();
    });


    // Test for calling the increment function
    test('Should call the increment function', () => {

        // Set up useFetch to return Pokémon data
        useFetch.mockReturnValue({
            data: mockData,
            isLoading: false,
            hasError: false,
        });

        // Render the component
        render(<MultipleCustomHooks />);

        // Get the "Siguiente" button
        const nextButton = screen.getByRole('button', { name: 'Siguiente' });

        // Simulate a click on the "Siguiente"
        fireEvent.click(nextButton)

        // Verify that the increment function has been called
        expect(mockIncrement).toHaveBeenCalled();
    });



});
