import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaUm({ navigation }) {
    return(
        <View style={style.container}>
            <View style={style.quadrado}>
                <Text style={style.texto}>não aguento mais trabalhar</Text>
                <Text style={style.texto}>mim sinto cansada</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    quadrado:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '30%',
        backgroundColor: '#FFF',
        padding: '20px'
    },
    texto:{
        fontSize: '18px'
    }
})