import { useState } from 'react'
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';

import style from './style';

export default function Login ({ navigation }) {
    const [email, setEmail] = useState('user01@empresa.com')
    const [senha, setSenha] = useState('teste1234')

    const users = [
        {
            "id": 1,
            "email": "user01@empresa.com",
            "senha": "teste1234",
        },
        {
            "id": 2,
            "email": "user02@empresa.com",
            "senha": "1234teste",
        }
    ]

    const irHome = () => {
        users.forEach(user => {
            if(user.email === email && user.senha === senha) navigation.navigate("Home", {"id": user.id - 1});
        })
    }

    return(
        <View style={style.container}>
            <Image style={style.icone} source={{uri: 'https://github.com/wellifabio/senai2022/blob/master/2des/indmo/aula06/assets/logo.png?raw=true'}}/>
            <View style={style.viewInputs}>
                <TextInput style={style.inputs} onChangeText={(val) => setEmail(val)} placeholder="E-Mail"/>
                <TextInput style={style.inputs} onChangeText={(val) => setSenha(val)} placeholder="Senha"/>
                <TouchableOpacity style={style.botao} onPress={irHome}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}