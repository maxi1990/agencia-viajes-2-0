import  express  from "express";
import { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalleViaje } from "../controllers/paginasController.js";
// AQUI AGREGAMOS EL GUARDAR TESTIMONIALES (1)
import {guardarTestimoniales} from '../controllers/testimonialController.js'

const router = express.Router();


router.get('/',paginaInicio) // req lo que enviamos  res lo que express nos responde
    

router.get('/nosotros',paginaNosotros) // req lo que enviamos  res lo que express nos responde
 

router.get('/viajes',paginaViajes)

router.get('/viajes/:slug',paginaDetalleViaje)


router.get('/testimoniales',paginaTestimoniales)
// Y AQUI ESTA LA RUTA EN POST (2)
router.post('/testimoniales', guardarTestimoniales)


export default router