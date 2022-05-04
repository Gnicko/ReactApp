import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper/Paper";
import InputBase from "@mui/material/InputBase/InputBase";
import Divider from "@mui/material/Divider/Divider";
import SearchIcon from "@mui/icons-material/Search";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      searchText: "",
    };
  }
  handleClick(e, itemClickeado) {
    this.props.handler(itemClickeado);
  }
  handleSearch() {
    this.props.doSearch(this.state.searchText);
  }
  cargarInput(e) {}
  render() {
    return (
      <AppBar position="static" style={{ backgroundColor: "#48C9B0  " }}>
        <Container maxWidth="xl ">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={(e) => this.handleClick(e, 0)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Inicio
              </Button>
              <Button
                onClick={(e) => this.handleClick(e, 1)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Crear Estudiante
              </Button>
              <Button
                onClick={(e) => this.handleClick(e, 2)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Estudiante
              </Button>
              <Button
                onClick={(e) => this.handleClick(e, 3)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Inscribir A Materias
              </Button>

              <Box
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              ></Box>
              <Paper
                component="form"
                sx={{
                  backgroundColor: "#2E86C1 ",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputBase
                  sx={{
                    color: "white",
                    pl: "10px",
                  }}
                  placeholder="Buscar por apellido"
                  inputProps={{ "aria-label": "buscar" }}
                  type="text"
                  onChange={(e) =>
                    this.setState({
                      searchText: e.target.value,
                    })
                  }
                />
                <Divider sx={{ m: 0.5 }} orientation="vertical" />

                <IconButton
                  sx={{ color: "white", paddingLeft: 10 }}
                  onClick={this.handleSearch}
                >
                  <SearchIcon
                    sx={{
                      textAlign: "center",
                      color: "white",
                      height: "30px",
                    }}
                  />
                  Buscar
                </IconButton>
              </Paper>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}
