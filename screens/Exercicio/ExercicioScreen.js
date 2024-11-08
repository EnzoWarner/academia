import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Picker } from 'react-native';
import TextInputBox from '../../components/TextInput/TextInput'; // Componente de input
import CustomButton from '../../components/CustomButton/CustomButton'; // Componente de botão
import { adicionarExercicio } from '../db'; // Importa a função para adicionar no banco

function ExercicioScreen() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [braco, setBraco] = useState('');
  const [perna, setPerna] = useState('');
  const [peito, setPeito] = useState('');
  const [costas, setCostas] = useState('');

  const handleSave = () => {
    // Chama a função de inserção no banco de dados
    adicionarExercicio(nome, telefone, braco, perna, peito, costas, () => {});
    // Limpa os campos após salvar
    setNome('');
    setTelefone('');
    setBraco('');
    setPerna('');
    setPeito('');
    setCostas('');
  };

  const handleClear = () => {
    // Limpa todos os campos de entrada
    setNome('');
    setTelefone('');
    setBraco('');
    setPerna('');
    setPeito('');
    setCostas('');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Adicionar Exercício</Text>

      <TextInputBox value={nome} onChangeText={setNome} placeholder="Digite o nome" />
      <TextInputBox value={telefone} onChangeText={setTelefone} placeholder="Digite o telefone" />
      <TextInputBox value={braco} onChangeText={setBraco} placeholder="Exercício para o Braço" />
      <TextInputBox value={perna} onChangeText={setPerna} placeholder="Exercício para a Perna" />
      <TextInputBox value={peito} onChangeText={setPeito} placeholder="Exercício para o Peito" />
      <TextInputBox value={costas} onChangeText={setCostas} placeholder="Exercício para as Costas" />

      <View style={styles.buttonContainer}>
        <CustomButton title="Salvar" style={styles.button} onPress={handleSave} />
        <CustomButton title="Limpar" style={styles.clearButton} onPress={handleClear} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    marginHorizontal: 10,
  },
  clearButton: {
    backgroundColor: '#f44336',
  },
});

export default ExercicioScreen;
