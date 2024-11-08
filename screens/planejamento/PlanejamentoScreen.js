import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Picker } from '@react-native-picker/picker';

function PlanejamentoScreen() {
    const [selectedDay, setSelectedDay] = useState('segunda');
    const [selectedExercise, setSelectedExercise] = useState('supino');
    const [selectedSequence, setSelectedSequence] = useState('3x10');

    const handleSave = () => {
        console.log('Planejamento salvo:', {
            day: selectedDay,
            exercise: selectedExercise,
            sequence: selectedSequence,
        });
        alert('Planejamento salvo com sucesso!');
    };

    const handleClear = () => {
        setSelectedDay('segunda');
        setSelectedExercise('supino');
        setSelectedSequence('3x10');
        alert('Campos limpos!');
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Planejar Semana</Text>

            <Text style={styles.label}>Dia da Semana:</Text>
            <Picker
                selectedValue={selectedDay}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedDay(itemValue)}
            >
                <Picker.Item label="Segunda" value="segunda" />
                <Picker.Item label="Terça" value="terça" />
                <Picker.Item label="Quarta" value="quarta" />
                <Picker.Item label="Quinta" value="quinta" />
                <Picker.Item label="Sexta" value="sexta" />
            </Picker>

            <Text style={styles.label}>Exercício:</Text>
            <Picker
                selectedValue={selectedExercise}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedExercise(itemValue)}
            >
                <Picker.Item label="Supino" value="supino" />
                <Picker.Item label="Remada" value="remada" />
                <Picker.Item label="Agachamento" value="agachamento" />
                <Picker.Item label="Rosca" value="rosca" />
            </Picker>

            <Text style={styles.label}>Sequência:</Text>
            <Picker
                selectedValue={selectedSequence}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedSequence(itemValue)}
            >
                <Picker.Item label="3 séries de 10" value="3x10" />
                <Picker.Item label="4 séries de 8" value="4x8" />
                <Picker.Item label="5 séries de 5" value="5x5" />
            </Picker>

            <View style={styles.buttons}>
                <CustomButton title="Salvar" onPress={handleSave} />
                <CustomButton title="Limpar" onPress={handleClear} style={styles.clearButton} />
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
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 5,
    },
    picker: {
        height: 50,
        width: 250,
        marginBottom: 15,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    clearButton: {
        backgroundColor: '#f44336',
    },
});

export default PlanejamentoScreen;