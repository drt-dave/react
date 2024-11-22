/*
 Rutas de Usuarios / Auth 
 host + /api/auth
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');



const router = Router();

const {crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth');

router.post( 
'/new',
  [ //Middlewares
	check('name', 'El nombre es obligatorio').not().isEmpty(),
	check('email', 'El email es obligatorio').isEmail(),
	check('password', 'El password debe ser de 6 caracteres').isLength(6),
	validarCampos
  ],
  crearUsuario );


router.post( 
'/',
  [//Middlewares
	check('email', 'El email es obligatorio').isEmail(),
	check('password', 'El password debe ser de 6 caracteres').isLength(6),
	validarCampos
  ],
  loginUsuario );

//Como solo es 1 middleware (validarJWT) no es necesario pasarlo como un arreglo
router.get( '/renew',validarJWT, revalidarToken);

module.exports = router;


