import { listarUsuarios } from '../02/scripts';
import { Usuario } from '../types';

const filtrarUsuarios = (filtro: string): Usuario[] => {
	return listarUsuarios(filtro);
};

filtrarUsuarios('Aluno');
