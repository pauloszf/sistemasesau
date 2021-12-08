import React, { Component } from "react";
import Api from "../../config/api";
import { Redirect } from "react-router-dom";

import "./login.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        email: "",
        senha: "",
      },
      estaLogando: false,
      estaAutenticado: false,
      erro: false,
    };
  }

  autenticaUsuario = async () => {
    this.setState({ estaLogando: true, erro: false });
    const email = this.state.login.email;
    const senha = this.state.login.senha;
    console.log(email, senha);
    try {
      await Api.post("/user/login", this.state.login).then((user) => {
        localStorage.setItem("usuario", JSON.stringify(user.data));
        this.setState({ estaAutenticado: true });
        console.log(user.data);
      });
    } catch (err) {
      console.log("Erro", err);
      this.setState({
        erro: true,
        estaLogando: false,
        estaAutenticado: false,
      });
    }
    /*
    auth
      .signInWithEmailAndPassword(email, senha)
      .then(user => {
        this.setState({ estaAutenticado: true });
      })
      .catch(err => {
        console.log("Erro", err);
        this.setState({
          erro: true,
          estaLogando: false,
          estaAutenticado: false
        });
      });
      */
  };

  aoAlterar = (event) => {
    const valor = event.target.value;
    const nome = event.target.name;

    let login = { ...this.state.login };

    login[nome] = valor;

    this.setState({ login });
  };
  render() {
    if (this.state.estaAutenticado) {
      return <Redirect to="/usuario" />;
    }

    return (
      <div className="login-form">
        <h1>Login</h1>

        <div className="txtb">
          <label>Login</label>
          <input
            type="text"
            name="email"
            value={this.state.login.email}
            onChange={this.aoAlterar}
          />
          <span data-placeholder="Username"></span>
        </div>

        <div className="txtb">
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            value={this.state.login.senha}
            onChange={this.aoAlterar}
          />
          <span data-placeholder="Password"></span>
        </div>
        {this.state.erro && <small> Email e/ou senha incorretos. </small>}

        <input
          type="submit"
          className="logbtn"
          onClick={this.autenticaUsuario}
          value="Entrar"
        />
      </div>
    );
  }
}
