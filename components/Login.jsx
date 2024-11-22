import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { getUsuarios } from '../api'; // Assumindo que a função de busca de usuários está em api.js
import dataUser from '../localData/dataUser.json'; // Assumindo que a lista de usuários está em dataUser.json

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Função para fazer login
  const handleLogin = async () => {
    try {
      setErrorMessage(''); // Limpa mensagens de erro anteriores

      // Obter a lista de usuários da API
    //   const usuarios = await getUsuarios();
    const usuarios = dataUser

      // Verificar se o usuário existe e se a senha está correta
      const user = usuarios.find(
        (usuario) => usuario.email === email
      );

      if (!user) {
        setErrorMessage('Email ou senha incorretos');
        return;
      }

      // Verificar qual flag está presente
      if (user.flagLocador) {
        console.log('Usuário é locador');
      } else if (user.flagLocatario) {
        console.log('Usuário é locatário');
      }

    //   // Navegar para a próxima tela
    //   navigation.navigate('Home'); // Altere para a tela de destino após login

    } catch (error) {
      setErrorMessage('Erro ao fazer login. Tente novamente.');
      console.error('Erro de login:', error);
    }
  };

  // Função para login com Google
  const handleGoogleLogin = () => {
    // Aqui você pode implementar o login com Google, se necessário
    console.log('Login com Google');
  };

  return (
    <View style={{ padding: 24, borderRadius: 10, width: '100%', maxWidth: 400, alignSelf: 'center' }}>
      <TextInput
        style={{
          borderColor: '#ccc',
          backgroundColor: 'white',
          borderRadius: 20,
          paddingHorizontal: 16,
          paddingVertical: 12,
          marginBottom: 16,
        }}
        placeholder="Insira seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={{
          borderColor: '#ccc',
          backgroundColor: 'white',
          borderRadius: 20,
          paddingHorizontal: 16,
          paddingVertical: 12,
          marginBottom: 16,
        }}
        placeholder="Insira sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {errorMessage ? (
        <Text style={{ color: 'red', marginBottom: 16, textAlign: 'center' }}>
          {errorMessage}
        </Text>
      ) : null}

      <TouchableOpacity
        style={{
          backgroundColor: '#4CAF50', 
          paddingVertical: 16, 
          borderRadius: 20, 
          marginBottom: 16, 
          borderWidth: 1, 
          borderColor: '#ccc',
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderColor: '#ccc',
          borderWidth: 1,
          paddingVertical: 16,
          borderRadius: 20,
          marginBottom: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={handleGoogleLogin}
      >
        <Text style={{ fontWeight: 'bold', color: '#DB4437', marginRight: 8 }}>
          Continuar com Google
        </Text>
      </TouchableOpacity>

      <Text style={{ textAlign: 'center', padding: 16 }}>
        Não tem conta?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{ color: '#1E90FF', textDecorationLine: 'underline' }}>
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Login;
