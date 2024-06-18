import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';
import {HomePage} from '../../src/09-useContext';

describe('Test on <MainApp/>', () => {

  it('should show HomePage component ', () => {

	render(
	  <MemoryRouter>
		<MainApp />
	  </MemoryRouter>
	)

	expect(screen.getAllByText('HomePage')).toBeTruthy();
	// screen.debug();

  });

  it('should show LoginPage component', () => {

	render(
	  <MemoryRouter initialEntries={ ['/login'] }>
		<MainApp/>
	  </MemoryRouter>
	);

	expect( screen.getAllByText('LoginPage') ).toBeTruthy();
	// screen.debug();
  	
  });
});

