import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui/components/Navbar";

// Mock implementation of useNavigate to track navigation calls
const mockedUseNavigate = jest.fn();

// Mocking react-router-dom's useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Tests for <Navbar />', () => {

  // Context value to be provided for the tests
  const contextValue = {
    logged: true, // Indicates that the user is logged in
    user: {
      name: 'Ramón' // Mock user name
    },
    logout: jest.fn() // Mock function for logout action
  };

  // Clear all mocks before each test to ensure no interference
  beforeEach(() => jest.clearAllMocks());

  it("Should display the user's name", () => {
    // Render the Navbar component with the provided AuthContext and MemoryRouter
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // Check if the user name is displayed in the Navbar
    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });

  it('Should call logout and navigate when the button is clicked', () => {
    // Render the Navbar component with the provided AuthContext and MemoryRouter
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    // Find the button element in the Navbar
    const logoutBtn = screen.getByRole('button');
    
    // Simulate a click event on the button
    fireEvent.click(logoutBtn);
    
    // Verify that the logout function is called
    expect(contextValue.logout).toHaveBeenCalled();
    
    // Verify that the navigation function is called with the correct parameters
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { "replace": true });
  });

});
