// api.js
const API_URL = 'https://toolie-back-end.onrender.com/api/v1/usuarios';

// Função para buscar usuários da API
export const getUsuarios = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro ao buscar usuários');
    }
    const data = await response.json();
    return data; // Retorna os dados JSON da API
  } catch (error) {
    console.error('Erro:', error);
    throw error; // Lança o erro para ser tratado onde a função for chamada
  }
};
