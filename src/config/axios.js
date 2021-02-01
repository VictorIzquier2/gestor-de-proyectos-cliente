  
import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://gestor-de-proyectos-servidor.herokuapp.com/' 
});

export default clienteAxios;
