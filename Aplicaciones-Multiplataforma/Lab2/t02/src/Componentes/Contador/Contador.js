import React, { Component } from 'react';

export default class Contador extends Component {
    state = {
        cont1: this.props.nro1,
        cont2: this.props.nro2,
        rpta: this.props.rpta
    }
    sumar = () => {
        this.setState({
            rpta: this.state.cont1 + this.state.cont2
        });
    }
    restar = () => {
        this.setState({
            rpta: this.state.cont1 - this.state.cont2
        });
    }
    dividir = () => {
        this.setState({
            rpta: this.state.cont1 / this.state.cont2
        });
    }
    multiplicar = () => {
        this.setState({
            rpta: this.state.cont1 * this.state.cont2
        });
    }
    porcentaje = () => {
        this.setState({
            rpta: (this.state.cont1 / 100) * this.state.cont2
        });
    }
    render() {
        return (<div>
            <a>Numero 1: {this.props.nro1}<p></p>
            Numero 2: {this.props.nro2}</a>
            <p><h1>Resultado: {this.state.rpta}</h1></p>
            <button onClick={this.sumar}>Sumar</button>
            <button onClick={this.restar}>Restar</button>
            <button onClick={this.dividir}>Division</button>
            <button onClick={this.multiplicar}>Multiplicacion</button>
            <button onClick={this.porcentaje}>Porcentaje</button>
        </div>);
    }
}