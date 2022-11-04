import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Final({ navigation, route }) {
    const [resp, setResp] = useState([]);

    const gabarito = ["first", "thrid", "second", "fourth", "first"];

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('resp');
            console.log(value)
            setResp(value.split(";"));
        } catch(e) {
            console.log(e);
            //error reading value
        }
    }

    if(resp.length === 0) getData();

        return(
            <View style={style.page}>
                <View style={style.container}>
                    <Text style={style.result}>PONTOS: {route.params.score}</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        width: '300px',
        height: '350px',
        backgroundColor: 'white',
        borderRadius: '20px',
    },
    result: {
        fontSize: '16px',
        fontWeight: 'bold'
    },
})