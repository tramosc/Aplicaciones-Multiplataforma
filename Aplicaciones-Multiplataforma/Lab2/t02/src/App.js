import React, { Component } from 'react';

import Contador from './Componentes/Contador/Contador';

class App extends Component {
  render() {
    return (<div>
      <Contador nro1={150} nro2={50} rpta={0}/>
    </div>);
  }
}

export default App;
