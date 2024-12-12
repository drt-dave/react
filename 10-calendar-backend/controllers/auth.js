const { response  } = require('express');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT  } = require('../helpers/jwt');


// Crear usuario /////////////////////////////////////////////
const crearUsuario =  async( req, res = response ) => {
  const {  email, password } = req.body;
  try {
	let usuario = await Usuario.findOne({ email });
	if ( usuario ){
	  return res.status(400).json({
		ok: false,
		msg: 'Un usuario existe con ese correo'
	  });
	}
	usuario = new Usuario(req.body);

	// ENcriptar contraseña
	const salt = bcrypt.genSaltSync();
	usuario.password = bcrypt.hashSync(password, salt)

	await usuario.save();

	//GenerarJWT
	const token = await generarJWT(usuario.id, usuario.name);
	res.status(201).json({
	  ok: true,
	  uid: usuario.id,
	  name: usuario.name,
	  token
	});

  } catch (error) {
	console.log(error)
	res.status(500).json({
	  ok: false,
	  msg: 'Comuniquese con el administrador'
	});
  }
}

// Login usuario /////////////////////////////////////////////
const loginUsuario = async( req, res = response ) => {
  const { email, password } = req.body; 
  try {
	const usuario = await Usuario.findOne({ email });
	if ( !usuario ) {
	  return res.status(400).json({
		ok: false,
		msg: 'El usuario no existe con ese email'
	  });
	}
	// Confirmar los passwords
	const validPassword = bcrypt.compareSync(password, usuario.password);
	if ( !validPassword ) {
	  return res.status(400).json({
		ok: false,
		msg: 'Password incorrecto'
	  });
	}
	// generar JWT
	const token = await generarJWT(usuario.id, usuario.name);

	res.status(201).json({
	  ok: true,
	  uid: usuario.id,
	  name: usuario.name,
	  token
	})


  } catch (error) {
	console.log(error)
	res.status(500).json({
	  ok: false,
	  msg: 'Comuniquese con el administrador'
	});
  }

  //Manejo de errores
  const errors = validationResult( req );
  if (!errors.isEmpty()) {
	return res.status(400).json({
	  ok: false,
	  errors: errors.mapped()
	});
  }
  res.json({
	ok: true,
	msg: 'login',
	email,
	password
  })
}
const revalidarToken = async( req, res = response ) => {


  const { uid, name  } = req

  // genrerar un nuevo JWT y retornarlo en esta petición
  const token = await generarJWT(uid, name);
  res.json({
	ok: true,
	token
  })
}
module.exports = {
  crearUsuario, 
  loginUsuario, 
  revalidarToken,
}
