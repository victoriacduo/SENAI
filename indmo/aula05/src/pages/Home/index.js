import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation }) {
    const restaurantes = [
        {
            "nome": "Coco Bambu",
            "avaliacao": 4.1,
            "img": "https://mir-s3-cdn-cf.behance.net/projects/404/28e47694264133.Y3JvcCw5NjAsNzUwLDAsMTA0.jpg",
            "end": "Av. Iguatemi, 777, Campinas",
            "tel": "(19) 3252-8844"
        },
        {
            "nome": "China in Box",
            "avaliacao": 4.5,
            "img": "https://1.bp.blogspot.com/-4BDVvpIumRo/X5uFY6QWsDI/AAAAAAAB1P4/SZOCYbyVvv8SDYFmuS5raUP8rrRNceBjgCLcBGAsYHQ/s16000/china%2Blogo.jpg",
            "end": "Rua Gustavo Enge, 39, Campinas",
            "tel": "(19) 3254-5601"
        },
        {
            "nome": "Outback Steakhouse",
            "avaliacao": 4.7,
            "img": "https://cdn.worldvectorlogo.com/logos/outback-steakhouse-2.svg",
            "end": "Av. Iguatemi, 777, Campinas",
            "tel": "(19) 3251-8350"
        }
    ]

    return(
        <View style={style.container}>
            <Text style={style.textão}>Restaurantes</Text>
            {restaurantes.map((rest, indice) => {
                return(
                    <TouchableOpacity style={style.naosei} key={indice} onPress={() => navigation.navigate("Restaurantes", {rest})}>
                        <Image style={style.imagem} source={{uri: rest.img}} />
                        <View>
                            <Text style={style.nome}>{rest.nome}</Text>
                            <View style={style.avali}>
                                <Image style={style.fav} source={{uri: "https://cdn-icons-png.flaticon.com/512/143/143547.png"}} />
                                <Text style={style.avaliacao}>{rest.avaliacao}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex',
        backgroundColor: '#292C6D',
        alignItems: 'center',
        padding: 15,
    },
    textão:{
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#EC255A',
        marginBottom: '10px'
    },
    naosei:{
        display: 'flex',
        flexDirection: 'row',
        width:'90%',
        backgroundColor: '#FAEDF0',
        padding: 15,
        borderRadius: '5px',
        border: '1px solid #EC255A',
        margin: '10px'
    },
    imagem:{
        width: '50px',
        height: '50px',
        marginRight: '15px',
        borderRadius: '5px'
    },
    nome:{
        fontWeight: 'bold'
    },
    avali:{
        display: 'flex',
        flexDirection: 'row',
    },
    fav:{
        width: '18px',
        height: '18px'
    },
    avaliacao:{
        marginLeft: '5px'
    }
})