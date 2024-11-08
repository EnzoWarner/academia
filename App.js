import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/home/HomeScreen';
import ExercicioScreen from './screens/Exercicio/ExercicioScreen';
import PlanejamentoScreen from './screens/planejamento/PlanejamentoScreen';
import ConsultaExerciciosScreen from './screens/consultaexercicios/ConsultaExerciciosScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Exercicio" component={ExercicioScreen} />
        <Drawer.Screen name="Planejamento" component={PlanejamentoScreen} />
        <Drawer.Screen name="Consulta Exercicios" component={ConsultaExerciciosScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
