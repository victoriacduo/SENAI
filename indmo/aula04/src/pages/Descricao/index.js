import { View, Text } from 'react-native';

export default function Descricao({ route }) {

    var {Descricao} = route.params;

    return(
        <View>
            <Text>Sabor: {Descricao.sabor}</Text>
            <Text>Marca: {Descricao.marca}</Text>
        </View>
    )
}