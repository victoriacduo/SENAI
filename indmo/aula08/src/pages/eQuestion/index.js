import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function Quinta({ navigation, route }) {
    const [checked, setChecked] = useState("fourth");

    const storeData = async (value) => {
        try {
            const data = await AsyncStorage.getItem('resp');

            await AsyncStorage.setItem('resp', data+ ";" + value);
        } catch (e) {
          // saving error
        }
    }
    
        return(
            <View style={style.page}>
                <View style={style.container}>
                    <Text style={style.pergunta}>Como se chama o passarinho amarelo amigo de Snoopy?</Text>
                    <View style={style.a}>
                        <RadioButton value="first" status= { checked === 'first' ? 'checked' : 'unchecked' } onPress={() => setChecked('first')}/>
                        <Text>Woodstock</Text>
                    </View>
                    <View style={style.b}>
                        <RadioButton value="second" status= { checked === 'second' ? 'checked' : 'unchecked' } onPress={() => setChecked('second')}/>
                        <Text>Daffy</Text>
                    </View>
                    <View style={style.c}>
                        <RadioButton value="third" status= { checked === 'third' ? 'checked' : 'unchecked' } onPress={() => setChecked('third')}/>
                        <Text>Wile</Text>
                    </View>
                    <View style={style.d}>
                        <RadioButton value="fourth" status= { checked === 'fourth' ? 'checked' : 'unchecked' } onPress={() => setChecked('fourth')}/>
                        <Text>Magoo</Text>
                    </View>
                    <View style={style.e}>
                        <TouchableOpacity style={style.botao} onPress={() => {
                            let ponto = route.params.score;
                            if(checked === 'first') ponto++;
                            storeData(checked);
                            navigation.navigate("Final", {"score":ponto});
                        }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>PRÓXIMA</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
}

const style = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '40px',
        width: '300px',
        height: '350px',
        backgroundColor: 'white',
        borderRadius: '20px',
    },
    pergunta: {
        fontSize: '16px',
        fontWeight: 'bold'
    },
    a:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100px',
        height: '40px'
    },
    b:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100px',
        height: '40px'
    },
    c:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100px',
        height: '40px'
    },
    d:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100px',
        height: '40px'
    },
    e:{
        alignItems: 'center'
    },
    botao:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '90px',
        height: '35px',
        backgroundColor: 'purple',
        borderRadius: '8px'
    }
})