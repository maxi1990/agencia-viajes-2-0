import { Viaje } from "../models/Viaje.js"
import {Testimonial} from "../models/Testimoniales.js"

const paginaInicio = async(req, res) =>{ 
    // consultar 3 viajes del modelo viaje
// AQUI ESTA EL PROMISE (1)
    const  promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(Testimonial.findAll({limit: 3}))

    try {
    // Y EL RESULTADO (2)
        const resultado = await Promise.all(promiseDB)



        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'Home',
            // Y LOS AGREGAMOS AQUI PARA VER LOS RESULTADOS EN LA PAGINA DE INICIO (3)
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
    } catch (error) {
        console.log(error);
    }

    
}

const paginaNosotros = (req, res) =>{ 
    res.render('nosotros',{
        pagina: 'Nosotros'
    })
}


const paginaViajes = async(req, res) =>{ 
    // consultar bd
    const viajes = await Viaje.findAll();
    console.log(viajes);

    res.render('viajes',{
        pagina: 'Proximos Viajes',
        viajes,
    })
}

const paginaTestimoniales = async(req, res) =>{ 

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
       console.log(error); 
    }
    
}

// muestra un viaje por su slug
const paginaDetalleViaje = async(req, res) =>{
    const {slug} = req.params

    try {
        const viaje = await Viaje.findOne({where : {slug}})

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}