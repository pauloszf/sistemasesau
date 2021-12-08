import React from "react";
import { Switch } from "react-router-dom";

import Login from "./components/login/login";
import Cadastro from "./components/cadastro/cadastro";
import CadastroFuncionario from "./components/funcionarios/cadastroFuncionario";
import Container from "@material-ui/core/Container";
import ListaFichas from "./components/ficha/ListaFichas";
import Ficha from "./components/ficha/Ficha";
import Usuario from "./components/user/user";
import Arquivados from "./components/ficha/Arquivados";

import Route from './Route';

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route
          exact
          path="/cadastroFuncionario"
          component={CadastroFuncionario}
        />
        <Route exact path="/listaFichas" component={ListaFichas} isPrivate />
        <Route exact path="/ficha/:id" component={Ficha} isPrivate />
        <Route exact path="/arquivo" component={Arquivados} isPrivate />
        <Route exact path="/usuario" component={Usuario} isPrivate />
      </Switch>
    </Container>
  </main>
);

export default Main;
