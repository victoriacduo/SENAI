import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Restaurantes({ route }) {
    var { rest } = route.params;
    return (
        <View style={style.container}>
            <View style={style.main}>
                <Image style={style.img} source={{ uri: rest.img }} />
                <View>
                    <Text style={style.nome}>{rest.nome}</Text>
                    <View style={style.info}>
                        <Text>{rest.tel}</Text>
                        <Text style={style.end}>{rest.end}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex',
        backgroundColor: '#292C6D',
        alignItems: 'center',
        padding: 15,
    },
    main:{
        display: 'flex',
        flexDirection: 'row',
        width:'90%',
        backgroundColor: '#FAEDF0',
        padding: 15,
        borderRadius: '5px',
        border: '1px solid #EC255A',
        margin: '10px'
    },
    img:{
        width: '70px',
        height: '70px',
        marginRight: '10px',
        borderRadius: '5px'
    },
    nome:{
        fontWeight: 'bold'
    },
    info:{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '10px'
    }
})