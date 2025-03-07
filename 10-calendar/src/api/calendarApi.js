import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL  } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: VITE_API_URL 
})

// TODO: configurar interceptores
calendarApi.interceptors.request.use( config => {

  config.headers = {
	//operador spread para traer mas headers si los hay
	...config.headers,
	'x-token': localStorage.getItem('token')
  }

  return config;
})


export default calendarApi;
