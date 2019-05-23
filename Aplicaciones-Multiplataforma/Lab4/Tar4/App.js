/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

import Contador from './src/components/Contador';

export default class App extends Component {
  state = {
    valorInicio: '250',
    valorFin: '25'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigTitle}>Calculadora basica</Text>
        <Text style={styles.welcome}>Valor Asignado 1: {this.state.valorInicio}</Text>
        <Text style={styles.welcome}>Valor Asignado 2: {this.state.valorFin}</Text>
        {!isNaN(this.state.valorInicio)?(<View>
        <Contador valor={parseInt(this.state.valorInicio)} valor2={parseInt(this.state.valorFin)}/>
        </View>):(<Text>Debe ingresar numeros para realizar las operaciones</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigTitle: {
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
