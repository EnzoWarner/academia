import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { getAgenda } from '../../repository/ExercicioRepository';

function ConsultaExerciciosScreen() {
  const [agenda, setAgenda] = useState([]);

  useEffect(() => {
    getAgenda(setAgenda); // Chama a função para buscar os dados assim que a tela carregar
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Consulta de Exercícios</Text>
      <ScrollView style={styles.scrollView}>
        {agenda.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.day}>{item.nome}</Text>
            <Text style={styles.exercise}>
              Telefone: {item.telefone}
            </Text>
            <Text style={styles.exercise}>
              Braço: {item.braco}, Perna: {item.perna}, Peito: {item.peito}, Costas: {item.costas}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
  },
  scrollView: {
    width: '100%',
    paddingHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exercise: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default ConsultaExerciciosScreen;
