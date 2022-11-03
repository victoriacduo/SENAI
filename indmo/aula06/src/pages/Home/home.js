import { useState } from 'react'
import { View, Text, TextInput } from 'react-native';

import style from './style';

export default function Home({ navigation, route }) {
    const [busca, setBusca] = useState("");
    const {id} = route.params;

    const chamados = [
        {
            "user_id": 1,
            "chamados": [
                {
                    "titulo":"Manutenção de Roteador",
                    "descricao":"Cliente reclamou que está sem internet, possível troca"
                },
                {
                    "titulo":"Mudança de Endereço",
                    "descricao":"Fazer a instalação na nova instalação"
                },
                {
                    "titulo":"Recolher equipamento",
                    "descricao":"Assinatura Cancelada, recolher os equipamentos da instalação"
                }
            ]
        },
        {
            "user_id": 2,
            "chamados": [
                {
                    "titulo":"Recolher equipamento",
                    "descricao":"Assinatura Cancelada, recolher os equipamentos da instalação"
                },
                {
                    "titulo":"Mudança de Endereço",
                    "descricao":"Fazer a instalação na nova instalação"
                },
                {
                    "titulo":"Manutenção de Roteador",
                    "descricao":"Cliente reclamou que está sem internet, possível troca"
                }
            ]
        }
    ]

    return(
        <View>
            <TextInput style={style.input} onChangeText={(value) => setBusca(value)} />
            {
                chamados[id].chamados.map((item, index) => {
                    if(item.titulo.toLowerCase().includes(busca.toLowerCase())) {
                        return (
                            <View style={style.container} key={index}>
                                <Text style={{ fontWeight: 'bold', fontSize: '16px'}}>{item.titulo}</Text>
                                <Text style={style.descricao}>{item.descricao}</Text>
                            </View>
                        )
                    }
                })
            }
        </View>
    )
}