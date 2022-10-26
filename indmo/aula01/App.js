import { View, Text, StyleSheet, Image, Button} from 'react-native';

export default function App() {
  const pessoas = [
    {
      "img": require("./assets/mecanico.jpg"),
      "nome": "Tiago Oliveira Melo",
      "cargo": "Assistente de Mecânico"
    },
    {
      "img": require("./assets/rebeca.jpg"),
      "nome": "Rebeca Barbosa Souza",
      "cargo": "Professora de Inglês"
    },
    {
      "img": require("./assets/treinador.jpg"),
      "nome": "Arthur Correia Fernandes",
      "cargo": "Treinador de Cachorros"
    },
    {
      "img": require("./assets/isabelle.jpg"),
      "nome": "Isabelle Lima Pereira",
      "cargo": "Editora de Conteúdo"
    },
  ];

  // const imgGatin = require('./assets/gatinho.jpg');
  // const trashIcon = require('./assets/delete.png');

  return(
    <View style={style.container}>
      {
        pessoas.map(pessoa => {
          return(
            <View style={style.retangulo}>
              <Image style={style.foto} source={pessoa.img}/>
              <Text style={style.textos}>{pessoa.nome}</Text>
              <Text style={style.textos}>{pessoa.cargo}</Text>
            </View>
          )
        })
      }
      <Button style={style.botao} title="Adicionar"/>
    </View>


//     <View style={style.container}>
//       <View style={style.primeira}>
//         <Text>Bem vindo, Fulano</Text>
//         <TextInput style={style.input} placeholder="Email"/>
//         <Button title="Cadastrar"/>
//         <TouchableOpacity style={style.btExcluir}>
//           <Image style={{width: '32px', height: '32px'}} source={trashIcon}/>
//           <Text>Apagar Registro</Text>
//         </TouchableOpacity>
//         {
//           usuarios.map(usuario => {
//             return(
//               // <View>
//               //   <Text>{usuario.matricula}</Text>
//               //   <Text>{usuario.nome}</Text>
//               // </View>
//               <TouchableOpacity style={style.btExcluir}>
//                 <Text>{`${usuario.matricula} - ${usuario.nome}`}</Text>
//               </TouchableOpacity>
//             )
//           })
//         }
//       </View>
//       <View style={style.segunda}>
//         <Text>Minha Segunda View</Text>
//         <Image style={style.imgGatin} source = {imgGatin}/>
//         <Image style={style.imgGatin} source={{uri: 'https://i.pinimg.com/736x/61/80/33/618033dc51a54a4e43321bc9acdc503d.jpg'}}/>
//       </View>
//     </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  retangulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px',
    backgroundColor: '#E8FFD3',
    width: '90vw',
    padding: '10px;',
    borderRadius: '20px'
  },
  foto: {
    backgroundColor: '#FFF',
    marginRight: '20px',
    width: '70px',
    height: '70px',
    borderRadius: '50%'
  },
  textos: {
    fontSize: '15px',
  },
  botao: {
      backgroundColor: '#eee',
      // border: 'none',
      // padding: '1rem',
      // fontSize: '1rem',
      // width: '10em',
      // borderRadius: '1rem',
      // color: 'lightcoral',
      // boxShadow: '0 0.4rem #dfd9d9',
      // cursor: 'pointer'
  },
  // input: {
  //   borderBottomWidth: '1px',
  //   borderBottomColor: 'gray',
  //   padding: '10px',
  // },
  // btExcluir: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#FCFFA6',
  //   border: '2px solid #adffa6',
  //   borderRadius: '10px',
  // }
});