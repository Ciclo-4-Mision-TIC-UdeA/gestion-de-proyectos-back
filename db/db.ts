import { connect } from 'mongoose';
// const { connect } = require('mongoose');

const conectarBD = async () => {
  return await connect(
    'mongodb+srv://admin:AdminProyectos@gestionproyectosmisiont.1zmu5.mongodb.net/GestionProyectos?retryWrites=true&w=majority'
  )
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;
