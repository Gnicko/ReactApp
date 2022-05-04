import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { Component } from "react";

export default class InscribirEstudiante extends Component {
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
  render() {
    return (
      <Container>
        <Button variant="contained" onClick={this.cargarCurso}>
          Inscribirme
        </Button>
        <TableContainer>
          <Table border="1">
            <TableHead>
              <TableRow>
                <TableCell>Curso</TableCell>
                <TableCell>Cantidad de Hs</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.curso.map((c, index) => (
                <TableRow key={index}>
                  <TableCell>{c.nombre}</TableCell>
                  <TableCell>{c.horas} horas semanales</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}
