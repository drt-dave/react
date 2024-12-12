/*
 * Event Routes
 * /api/events
 */

const { Router } = require('express');
const router = Router()
const {check} = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { getEvento, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events');
const { isDate } = require('../helpers/isDate');


// Todas tienen que pasar por la validación del token
router.use( validarJWT ); /*esto valida el token en todas las rutas*/

// Obtener eventos
router.get('/',/*validarJWT,*/ getEvento);

// Crear un nuevo evento
router.post(
'/',
  /*validarJWT,*/
  [
 check('title','El título es obligatorio').not().isEmpty(),
 check('start','Fecha de inicio es obligatoria').custom(isDate),
 check('end','Fecha de fialización es obligatoria').custom(isDate),
	validarCampos
  ],
  crearEvento
);

//Actualizar Evento
router.put('/:id', /*validarJWT,*/  actualizarEvento);


// Borrar Evento
router.delete('/:id',/*validarJWT,*/ eliminarEvento);

module.exports = router;
