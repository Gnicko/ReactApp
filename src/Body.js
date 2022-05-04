import React, { Component } from "react";
import CrearEstudiante from "./CrearEsudiante";
import Estudiante from "./Estudiante";
import App from "./App";
import InscribirEstudiante from "./InscribirEstudiante";

export default class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.itemClicked === 0 && <App />}
        {this.props.itemClicked === 1 && <CrearEstudiante />}
        {this.props.itemClicked === 2 && (
          <Estudiante inputValue={this.props.inputValue} />
        )}
        {this.props.itemClicked === 3 && <InscribirEstudiante />}
      </div>
    );
  }
}
