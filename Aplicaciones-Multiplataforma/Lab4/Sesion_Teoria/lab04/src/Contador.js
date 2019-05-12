import React,{Component} from 'react';
import{
    View,
    Text,
    Button
} from 'react-native';

class Contador extends Component{
    state = {
        valor: this.props.valor
    }
    componentDidUpdate(oldProps,oldState){
        if(oldProps.valor!==this.props.valor && !isNaN(this.props.valor)){
            this.setState({
                valor: this.props.valor
            });
        }
    }
    disminuirHandler = () =>{
        this.setState({
            valor: this.state.valor - 1
        });
    }
    incrementarHandler = () =>{
        this.setState({
            valor: this.state.valor + 1
        });
    }
    render(){
        return (<View>
            <Text>Mi contador: {this.state.valor}</Text>
            <Button
                title='Disminuir' 
                onPress={this.disminuirHandler}
                />
                
            <Button
                title='Incrementar' 
                color='#841584'
                onPress={this.incrementarHandler} 
                />
        </View>);
    }
}

export default Contador;