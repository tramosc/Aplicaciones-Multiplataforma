import React,{Component} from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';

class Contador extends Component{
	state = {
		valor: this.props.valor,
		valor2: this.props.valor2,
		rpta: 0
	}
	componentDidUpdate(oldProps,oldState){
		if(oldProps.valor!==this.props.valor && !isNaN(this.props.valor)){
			this.seState({
				valor: this.props.valor
			});
		}
		if(oldProps.valor2!==this.props.valor2 && !isNaN(this.props.valor2)){
			this.seState({
				valor2: this.props.valor2
			});
		}
	}
	suma = () => {
		this.setState({
			rpta: this.state.valor + this.state.valor2
		});
	}
	resta = () => {
		this.setState({
			rpta: this.state.valor - this.state.valor2
		});
	}
	multiplicacion = () => {
		this.setState({
			rpta: this.state.valor * this.state.valor2
		});
	}
	division = () => {
		this.setState({
			rpta: this.state.valor / this.state.valor2
		});
	}
	render(){
		return (<View>
			<Text>Respuesta: {this.state.rpta}</Text>
			<Button title='Suma' onPress={this.suma}/>
			<Button title='Resta' color='#841584' onPress={this.resta}/>
			<Button title='Multiplicacion' onPress={this.multiplicacion}/>
			<Button title='Division' color='#841584' onPress={this.division}/>
			</View>);
	}
}

export default Contador;