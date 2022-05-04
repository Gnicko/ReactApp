import React, { Component } from "react";
import "./CrearEstudiante.css";
import {
  FormControl,
  InputLabel,
  Input,
  MenuItem,
  Select,
  Button,
  Container,
  Grid,
  FormHelperText,
  Alert,
} from "@mui/material";

export default class CrearEstudiante extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      form: {
        nombre: "",
        apellido: "",
        curso: "",
      },
      resultado: "",
      errors: {},
      cursos: [],
    };
  }
  handleChange(e) {
    let nombre = e.target.name;
    let valor = e.target.value;
    this.setState((state) => ({
      form: {
        ...state.form,
        [nombre]: valor,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:1234/estudiantes", {
      method: "POST",
      body: JSON.stringify({
        nombre: this.state.form.nombre,
        apellido: this.state.form.apellido,
        cursos: [this.state.form.curso],
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.result === "error") {
          this.setState({
            resultado: json.result,
            errors: json.errors,
            mensaje: "Complete los campos correctamente",
          });
          return;
        }
        this.setState({
          resultado: json.result,
          mensaje: "El estudiante se creo correctamente",
        });
      });
    this.setState({
      errors: "",
      mensaje: "",
      resultado: "",
    });
  }
  componentDidMount() {
    fetch("http://localhost:1234/cursos")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          cursos: json.cursos,
          respuesta: json.result,
        });
      });
  }
  render() {
    return (
      <div className="estiloCrearEstudiante">
        <Container>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <Alert variant="outlined" severity={this.state.resultado}>
                {this.state.mensaje}
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel>Nombre </InputLabel>
                <Input
                  type="text"
                  name="nombre"
                  value={this.state.form.nombre}
                  onChange={this.handleChange}
                  error={this.state.errors.nombre}
                />
                <FormHelperText error={this.state.errors.nombre}>
                  {this.state.errors.nombre}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel>apellido</InputLabel>
                <Input
                  type="text"
                  name="apellido"
                  value={this.state.form.apellido}
                  onChange={this.handleChange}
                  error={this.state.errors.apellido}
                />
                <FormHelperText error={this.state.errors.apellido}>
                  {this.state.errors.apellido}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth>
                <InputLabel>Curso </InputLabel>
                <Select onChange={this.handleChange} name="curso" label="Curso">
                  {this.state.cursos.map((c, index) => (
                    <MenuItem key={index} value={c.id}>
                      {c.curso}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText error={this.state.errors.cursos}>
                  {this.state.errors.cursos}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submite" onClick={this.handleSubmit}>
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
