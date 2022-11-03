import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const addIcon = require('../../../assets/more.png');

export default function Cardapio({navigation}) {
    const data = [
        {
            "nome": "Pizza de Muçarela",
            "descricao": "Massa tradicional da casa, molho de tomate, muita muçaarela, tomate fatiado, óregano.",
            "preco": "R$50",
            "imagem": "https://s2.glbimg.com/Y3m2i25amIvN85VhN6iXEzN1Lds=/0x0:960x640/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/3/k/BwB0YgQOynPsY4EiIG0g/pizza-de-mucarela.jpg"
        },
        {
            "nome": "Calabresa",
            "descricao": "Massa tradicional da casa, molho de tomate, muita calabresa e opção de cebola picada ou catupiry.",
            "preco": "R$50",
            "imagem": "http://folhadomate.com/wp-content/uploads/2016/09/48328-receita_pizza.jpg",
        },
        {
            "nome": "Frango com Catupiry",
            "descricao": "Massa tradicional da casa, molho de tomate, frango desfiado bem temperado com queijo ralado, uma generosa camada de catupiry.",
            "preco": "R$50",
            "imagem": "https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2007/12/Pizza_frango_catupiryy.jpg",
        },
        {
            "nome": "Queijo com Brócolis",
            "descricao": "Massa tradicional da casa, molho de tomate, creme de muçarela com brócolis bem temperado",
            "preco": "R$50",
            "imagem": "https://static.wixstatic.com/media/953e7f_10d1b5c015404487815c6001313c8e22~mv2.jpg/v1/fill/w_548,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pizz%2043.jpg",
        },
        {
            "nome": "Peito de Peru",
            "descricao": "Massa tradicional da casa, molho de tomate, muçarela e peito de peru",
            "preco": "R$50",
            "imagem": "https://atm-accounts.s3-sa-east-1.amazonaws.com/50/files/thumbs/ha7itmzvdasrluqbidtd-large.jpg",
        }
    ]

    var carrin = new Array();

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('carrinho', JSON.stringify(value));
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={{alignItems: 'center'}}>
            {
                data.map((pizza, indice) => {
                    return(
                        <View style={style.container} key={indice}>
                            <Image source={{uri:pizza.imagem}} style={{width: '70px', height: '70px', borderRadius: '50%'}}/>
                            <View style={style.textinhos}>
                                <Text style={{ fontWeight: 'bold'}}>{pizza.nome}</Text>
                                <Text>{pizza.descricao}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                carrin.push(pizza);
                                storeData(carrin);
                            }}>
                                <Image source={addIcon} style={{width: '35px', height: '35px', marginLeft: '10px'}}/>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
            <TouchableOpacity style={style.botao} onPress={() => {navigation.navigate("Carrinho")}}>
                <Text style={{ fontWeight: 'bold' }}>Carrinho</Text>
            </TouchableOpacity>
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
    botao:{
        alignItems: 'center',
        width: '250px',
        height: '35px',
        backgroundColor: '#d9d9d9',
        marginTop: '15px',
        padding: '5px',
        borderRadius: '10px'
    }
})