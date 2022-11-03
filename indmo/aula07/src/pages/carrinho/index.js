import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const removeIcon = require('../../../assets/remove.png');

export default function Carrinho({navigation}) {
    const [carrinho, setCarrinho] = useState([]);

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('carrinho')
          
          setCarrinho(JSON.parse(value));
        } catch(e) {
            console.log(e);
        }
    }

    if(carrinho.length == 0) getData();

    return(
        <View style={{alignItems: 'center'}}>
            {
                carrinho.map((pizza, indice) => {
                    return (
                        <View style={style.container} key={indice}>
                            <Image source={{uri:pizza.imagem}} style={{width: '70px', height: '70px', borderRadius: '50%'}}/>
                            <View style={style.textinhos}>
                                <Text style={{ fontWeight: 'bold'}}>{pizza.nome}</Text>
                                <Text>{pizza.descricao}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                let tempArr = new Array(...carrinho);
                                tempArr.splice(indice, 1);
                                if(tempArr.length == 0) navigation.navigate("Cardapio");
                                setCarrinho(tempArr);
                            }}>
                                <Image source={removeIcon} style={{width: '35px', height: '35px', marginLeft: '10px'}}/>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin: '15px',
        alignItems: 'center'
    },
    textinhos:{
        width: '65%',
        marginLeft: '10px',
    },
})