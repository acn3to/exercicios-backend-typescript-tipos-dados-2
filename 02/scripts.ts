import { escreverArquivo, lerArquivo } from '../01/scripts';
import { Usuario } from '../types';

const cadastrarUsuario = (dados: Usuario): Usuario => {
	const bd = lerArquivo() as Usuario[];
	bd.push(dados);
	escreverArquivo(bd);

	console.log(dados);

	return dados;
};

export const listarUsuarios = (filtro?: string): Usuario[] => {
	const bd = lerArquivo() as Usuario[];

	const usuarios = bd.filter((usuario) => {
		if (filtro) {
			return usuario.profissao === filtro;
		}
	});

	console.log(usuarios);

	return usuarios;
};

const novoUsuario: Usuario = {
	nome: 'Paula',
	email: 'neto@example.com',
	cpf: '123.456.789-00',
	profissao: 'Professor',
	endereco: {
		cep: '40275020',
		bairro: 'Brotas',
		cidade: 'Salvador',
		rua: 'Tabajara',
	},
};

// cadastrarUsuario(novoUsuario);

// console.log(listarUsuarios());
