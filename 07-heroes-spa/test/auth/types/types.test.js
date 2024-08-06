import {types} from "../../../src/auth"


describe('Pruebas en Types.js', () => {

  it('Debe regresar estos types', () => {

	expect( types ).toEqual({
	  login: '[Auth] Login',
	  logout: '[Auth] Logout',
	})

  })
})
