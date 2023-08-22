import { Usuario } from '../types';
import { listarUsuarios } from '../02/scripts';
import { escreverArquivo } from '../01/scripts';

const detalharUsuario = (cpf: string): Usuario => {
	const bd = listarUsuarios();

	const usuarioEncontrado = bd.find((usuario) => usuario.cpf === cpf);

	if (!usuarioEncontrado) {
		throw new Error('Usuario não encontrado');
	}

	console.log(usuarioEncontrado);

	return usuarioEncontrado;
};

// detalharUsuario('123.456.789-99');

const atualizarUsuario = (cpf: string, dados: Usuario): Usuario => {
	const bd = listarUsuarios();

	const usuarioEncontrado = bd.find((usuario) => usuario.cpf === cpf);

	if (!usuarioEncontrado) {
		throw new Error('Usuario não encontrado');
	}

	Object.assign(usuarioEncontrado, dados);

	console.log(dados);

	escreverArquivo(bd);

	return dados;
};

const usuarioAtualizado: Usuario = {
	nome: 'Arnaldo',
	email: 'outro@example.com',
	cpf: '123.456.789-88',
	endereco: {
		cep: '12345-678',
		rua: 'Nova Rua',
		bairro: 'Novo Bairro',
		cidade: 'Nova Cidade',
	},
};

// atualizarUsuario('123.456.789-88', usuarioAtualizado);
