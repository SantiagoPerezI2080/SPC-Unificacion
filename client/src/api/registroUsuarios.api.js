import axios from 'axios';

const registroUsuariosApi = axios.create({
    baseURL: "http://localhost:8000/registro_usuarios/api/v1/registro/",
});

export const getAllUsuarios = () => registroUsuariosApi.get("/");

export const getUsuarios = (id) => registroUsuariosApi.get(`/${id}/`);

export const createUsuarios = (registro) => registroUsuariosApi.post("/", registro);

export const deleteUsuarios = (id) => registroUsuariosApi.delete(`/${id}/`);

export const updateUsuarios = (id, registro) => registroUsuariosApi.patch(`/${id}/`, registro);