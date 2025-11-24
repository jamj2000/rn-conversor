import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

/*
Libra (pound): Equivale aproximadamente a 453,59 gramos. 
Onza (ounce): 1 onza de peso es aproximadamente 28,35 gramos. 
*/


const LIBRA_A_GRAMOS = 453.59;
const ONZA_A_GRAMOS = 28.35;

const KILOGRAMO_A_GRAMOS = 1000;
const GRAMO_A_GRAMOS = 1;
const MILIGRAMO_A_GRAMOS = 0.001;


const Peso = () => {
    const [num, setNum] = useState(0)
    const [conv, setConv] = useState(KILOGRAMO_A_GRAMOS);
    const [gramos, setGramos] = useState(0)

    const recalculate = (valor) => {
        setGramos(valor)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Peso</Text>

            <View style={styles.inputContainer} >
                <TextInput
                    onChangeText={(text) => { setNum(Number(text)); recalculate(Number(text) * conv) }}
                    keyboardType="numeric"
                    placeholder="0"
                    style={styles.input}
                />
                <Picker
                    selectedValue={conv}
                    onValueChange={(conversion) => { setConv(conversion); recalculate(conversion * num); }}
                    style={styles.picker}
                >
                    <Picker.Item label="kilogramos" value={KILOGRAMO_A_GRAMOS} style={styles.pickerItem} />
                    <Picker.Item label="gramos" value={GRAMO_A_GRAMOS} style={styles.pickerItem} />
                    <Picker.Item label="miligramos" value={MILIGRAMO_A_GRAMOS} style={styles.pickerItem} />

                    <Picker.Item label="libras" value={LIBRA_A_GRAMOS} style={styles.pickerItem} />
                    <Picker.Item label="onzas" value={ONZA_A_GRAMOS} style={styles.pickerItem} />
                </Picker>
            </View>
            <View>
                <Text style={styles.result}>{(gramos / KILOGRAMO_A_GRAMOS).toFixed(6)} kg</Text>
                <Text style={styles.result}>{(gramos.toFixed(6))} g</Text>
                <Text style={styles.result}>{(gramos / MILIGRAMO_A_GRAMOS).toFixed(6)} mg</Text>
            </View>

            <View>
                <Text style={styles.result}>{(gramos / LIBRA_A_GRAMOS).toFixed(6)} libras</Text>
                <Text style={styles.result}>{(gramos / ONZA_A_GRAMOS).toFixed(6)} onzas</Text>

            </View>

        </View>
    )
}

export default Peso


const styles = StyleSheet.create({
    container: {
    },
    title: {
        color: 'darkgray',
        fontSize: 36,
        fontWeight: 900,
        textAlign: 'center',
    },
    picker: {
        fontSize: 24,
        height: 80,
        flex: 0.5,
    },
    pickerItem: {
        fontSize: 24,
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 4,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexGrow: 1
    },
    input: {
        fontSize: 24,
        textAlign: 'right',
        backgroundColor: 'snow',
        flex: 0.5,
        outlineStyle: 'solid',
        outlineWidth: 1,
        outlineColor: 'gray',
    },
    result: {
        fontSize: 24,
        textAlign: 'right',
    }
})