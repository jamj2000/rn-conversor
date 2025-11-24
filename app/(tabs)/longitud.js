import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

/*
Pulgada (inch): Equivalente a 0,0254 m.
Pie (foot): Es igual a 12 pulgadas, o 0,3048 m. 
Yarda (yard): Equivale a 3 pies, o 0,914 m. 
Milla (mile): Es igual a 1760 yardas = 1608,64m      
*/


const MILLA_A_METROS = 1608.64;
const YARDA_A_METROS = 0.914;
const PIE_A_METROS = 0.3048;
const PULGADA_A_METROS = 0.0254;
const KILOMETRO_A_METROS = 1000;
const METRO_A_METROS = 1;
const CENTIMETRO_A_METROS = 0.01;


const Longitud = () => {
    const [num, setNum] = useState(0)
    const [conv, setConv] = useState(KILOMETRO_A_METROS);
    const [metros, setMetros] = useState(0)


    const recalculate = (valor) => {
        setMetros(valor)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Longitud</Text>

            <View style={styles.inputContainer} >
                <TextInput
                    onChangeText={(text) => { setNum(Number(text)); recalculate(Number(text) * conv) }}
                    keyboardType="numeric"
                    placeholder="0"
                    style={styles.input}
                />
                <Picker
                    selectedValue={conv}
                    onValueChange={(conversion) => { setConv(conversion); recalculate(num * conversion) }}
                    style={styles.picker}
                >
                    <Picker.Item label="kilometros" value={KILOMETRO_A_METROS} style={styles.pickerItem} />
                    <Picker.Item label="metros" value={METRO_A_METROS} style={styles.pickerItem} />
                    <Picker.Item label="centimetros" value={CENTIMETRO_A_METROS} style={styles.pickerItem} />

                    <Picker.Item label="millas" value={MILLA_A_METROS} style={styles.pickerItem} />
                    <Picker.Item label="yardas" value={YARDA_A_METROS} style={styles.pickerItem} />
                    <Picker.Item label="pies" value={PIE_A_METROS} style={styles.pickerItem} />
                    <Picker.Item label="pulgadas" value={PULGADA_A_METROS} style={styles.pickerItem} />
                </Picker>
            </View>
            <View>
                <Text style={styles.result}>{(metros / KILOMETRO_A_METROS).toFixed(6)} km</Text>
                <Text style={styles.result}>{(metros.toFixed(6))} m</Text>
                <Text style={styles.result}>{(metros / CENTIMETRO_A_METROS).toFixed(6)} cm</Text>
            </View>

            <View>
                <Text style={styles.result}>{(metros / MILLA_A_METROS).toFixed(6)} millas</Text>
                <Text style={styles.result}>{(metros / YARDA_A_METROS).toFixed(6)} yardas</Text>
                <Text style={styles.result}>{(metros / PIE_A_METROS).toFixed(6)} pies</Text>
                <Text style={styles.result}>{(metros / PULGADA_A_METROS).toFixed(6)} pulgadas</Text>
            </View>

        </View>
    )
}

export default Longitud

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

