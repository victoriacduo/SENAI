import {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

export default function App() {

  const [resultado, setValor] = useState("");
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [botao, setBotao] = useState("");

  return(
    <View style={style.container}>
      <View style={style.calculadora}>
        <View>
          <TextInput style={style.inputs} placeholder="Primeiro valor" onChangeText={(val) => { setValor1(val) }}/>
          <TextInput style={style.inputs} placeholder="Segundo valor" onChangeText={(val) => { setValor2(val) }}/>
        </View>
        <View style={style.operacoesDiv}>
          <TouchableOpacity style={style.operacoes} onPress={() => { setBotao (parseInt(valor1) + parseInt(valor2))}}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.operacoes} onPress={() => { setBotao (parseInt(valor1) - parseInt(valor2))}}>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.operacoes} onPress={() => { setBotao (parseInt(valor1) / parseInt(valor2))}}>
            <Text>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.operacoes} onPress={() => { setBotao (parseInt(valor1) * parseInt(valor2))}}>
            <Text>*</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={style.button} onPress={() => { setValor(botao) }}>
            <Text>CACULAR</Text>
          </TouchableOpacity>
        </View>
        <View style={style.resultado}>
          <Text>{resultado}</Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  calculadora: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    height: '40vh',
    width: '70vw',
    border: '20px #000',
  },
  inputs: {
    height: '25px',
    padding: '10px',
    border: '2px solid #000',
    margin: '5px'
  },
  operacoesDiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  operacoes: {
    marginTop: '5px',
    marginBottom: '10px',
    marginRight: '10px',
    marginLeft: '10px',
    border: '2px solid #000',
    padding: '10px',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #000',
    width: '183px',
  },
  resultado: {
    display: 'flex',
    alignItems: 'center',
    padding: '70px'
  }
});