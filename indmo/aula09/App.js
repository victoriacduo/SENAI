import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() { 
  const [pokemons, setPokemons] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(res => { return res.json()})
    .then(pokemons => setPokemons(pokemons));
  };

  return(
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Digite o nome do Pokemon..." onChangeText={ (value) => { setBusca(value) }}/>
      {
        (pokemons !== undefined)
        ?
        <View>
          <Text style={styles.nome}>{pokemons.name}</Text>
          <Image style={styles.img} source={{ uri: pokemons.sprites.front_default }}/>
        </View>
        :
        <View>
          <Image style={styles.img} source={{ uri: "https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" }}/>
        </View>
      }
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px'
  },
  nome:{
    fontSize: '16px',
    padding: '5px'
  },
  input: {
    width: '250px',
    height: '30px',
    border: '1px solid #000',
    borderRadius: '5px',
    padding: '8px',
    margin: '10px'
  }
})