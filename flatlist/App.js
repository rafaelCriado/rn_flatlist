import React, {Component}from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      flatData:[
        {key:"1", nome: "Rafael Marques Criado", idade: 30},
        {key:"2", nome: "Atilio Criado", idade: 65},
        {key:"3", nome: "Marlene Marques Criado", idade: 59},
        {key:"4", nome: "Camila Marques Criado", idade: 37},
        {key:"5", nome: "Janaina Garcia", idade: 25},
        {key:"6", nome: "Leonardo José", idade: 30},
        {key:"7", nome: "Bruninho", idade: 15},
        {key:"8", nome: "Cesar Kawabata", idade: 5},
        {key:"9", nome: "Rafael Marques Criado", idade: 30},
        {key:"10", nome: "Atilio Criado", idade: 65},
        {key:"13", nome: "Marlene Marques Criado", idade: 59},
        {key:"14", nome: "Camila Marques Criado", idade: 37},
        {key:"15", nome: "Janaina Garcia", idade: 25},
        {key:"16", nome: "Leonardo José", idade: 30},
        {key:"17", nome: "Bruninho", idade: 15},
        {key:"18", nome: "Cesar Kawabata", idade: 5}
      ]
    };
  }

  flatRender = (item)=>{
    return(
      <View style={styles.flatItem}>
        <Text style={styles.flatItemNome}>{item.nome}</Text>
        <Text style={styles.flatItemIdade}>{item.idade} anos</Text>
      </View>
    );
  }

  render(){
    return(
      <View style={styles.body}>
        <View style={styles.head}>
          <Text style={styles.headTexto}>Componente Flat list</Text>
        </View>
        <View style={styles.lista}>
          <FlatList data={this.state.flatData} renderItem={({item})=>this.flatRender(item)}></FlatList>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>teste de flatlist</Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
  },
  head:{
    height:80,
    backgroundColor: '#333'
  },
  headTexto:{
    fontSize: 28,
    lineHeight:80,
    color: '#fff',
     textAlign:"center"
  }, 
  lista:{
    flex:1,
    backgroundColor:'#bbb',
    padding: 10
  },
  flatItem:{
    marginTop:5,
    marginBottom:5,
    borderWidth:1,
    borderColor:'#555',
    borderRadius:5,
    backgroundColor:'#666',
    padding:5,
    alignContent:'stretch'
    
  },
  flatItemNome:{
    fontSize:20,
    color:'#fff'
  },
  flatItemIdade:{
    fontSize:15,
    color:'#fff'
  },
  footer:{
    height:40,
    backgroundColor: '#333'
  },
  footerText:{
    lineHeight:40,
    fontSize:14,
    color: '#fff',
    textAlign:"center"
  }
});