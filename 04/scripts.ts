import { escreverArquivo } from '../01/scripts';
import { listarUsuarios } from '../02/scripts';
import { Usuario } from '../types';

const excluirUsuario = (cpf: string): Usuario => {
	const bd = listarUsuarios();

	const usuarioEncontrado = bd.find((usuario) => usuario.cpf === cpf);

	if (!usuarioEncontrado) {
		throw new Error('Usuario não encontrado');
	}

	const bdAtualizado = bd.filter((usuario) => {
		return usuario.cpf !== cpf;
	});

	escreverArquivo(bdAtualizado);

	console.log(bdAtualizado);

	return usuarioEncontrado;
};

excluirUsuario('123.456.789-99');
