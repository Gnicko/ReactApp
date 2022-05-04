import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { Component } from "react";
import "./Estudiante.css";
import Paper from "@mui/material/Paper";

export default class Estudiante extends Component {
  constructor(props) {
    super(props);
    this.cargarCurso = this.cargarCurso.bind(this);

    this.state = {
      curso: [{ nombre: "React", horas: "12" }],
      estudiantes: [],
      lista: [
        { nombre: "objetos1", horas: "10" },
        { nombre: "seminario", horas: "7" },
        { nombre: "ingenieria1", horas: "10" },
        { nombre: "ingenieria2", horas: "14" },
        { nombre: "base de datos", horas: "4" },
      ],
    };
  }
  cargarCurso() {
    this.setState((state) => ({
      curso: [...state.curso, state.lista[Math.floor(Math.random() * 5)]],
    }));
  }

  listarEstudiantes(inputValue) {
    fetch("http://localhost:1234/estudiantes?apellido=" + inputValue)
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          estudiantes: json.estudiantes,
        });
      });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.inputValue !== this.props.inputValue) {
      this.listarEstudiantes(this.props.inputValue);
    }
  }
  componentDidMount() {
    this.listarEstudiantes(this.props.inputValue);
  }

  render() {
    return (
      <Container>
        <div className="estilo">
          <TableContainer component={Paper}>
            <h3>Estudiantes</h3>
            <Table border="1">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Apellido</TableCell>
                  <TableCell>Curso</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.estudiantes.map((e, index) => (
                  <TableRow key={index}>
                    <TableCell>{e.nombre}</TableCell>
                    <TableCell>{e.apellido} </TableCell>
                    <TableCell>
                      {e.cursos
                        .map((c) => c.curso)
                        .reduce((acumulador, c) => acumulador + ", " + c)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    );
  }
}
