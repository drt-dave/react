import {authReducer,types } from "../../../src/auth"

describe('Tests in authReducer', () => {
  it('Should return the default state', () => {
	const state = authReducer({ logged: false }, {} );
	expect( state ).toEqual({ logged: false });
  })

  it('Should call Login, authenticate, and set the user', () => {

	const action = {
	  type: types.login,
	  payload:{
		name: 'Ramón',
		id: '123'
	  }
	}

	const state = authReducer({ logged: false }, action);
	expect( state ).toEqual({
	  logged: true,
	  user: action.payload
	});
  });

  it('Should call Logout, clear the user name, and set logged in to false ', () => {
	const state = {
	  logged: true,
	  user: { id: '123', name:'Freya'  }
	}

	const action = {
	  type: types.logout,
	}

	const newState = authReducer( state, action );

	expect( newState ).toEqual({"logged": false});
  })
})

types
