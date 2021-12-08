import React, { Component } from "react";
import { Link } from "react-router-dom";

import avatar from "../../images/avatar.jpg";

import "./User.css";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dados: [],
    };
  }

  bringMeBack = () => {
    const usuario = JSON.parse(window.localStorage.getItem('usuario'))
    console.log(usuario.token);
  }

  logOut = () => {
    window.localStorage.removeItem('usuario');
  }
  

  render() {
    return (
      <div className="container">
        <div className="container-user">
          <div className="profile">
            <div className="image-profile">
              <img src={avatar} width="250" height="250" alt="Avatar" />
            </div>
            <div>
              <h5>
                Nome: <span>Vetores</span>{" "}
              </h5>
              <h5>
                Permissão: <span>Administrador</span>{" "}
              </h5>
            </div>
          </div>
          <div className="menu">
            <fieldset>
              <Link to="/listaFichas">
                <h5>Lista de casos</h5>
              </Link>
              <Link to="/">
                <h5>Casos arquivados</h5>
              </Link>
              <Link to="/">
                <h5>Cadastrar bairro</h5>
              </Link>
              <Link to="/cadastroFuncionario">
                <h5>Cadatrar usuário</h5>
              </Link>
              <button onClick={this.logOut}>Sair</button>
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}
