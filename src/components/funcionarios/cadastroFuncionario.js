import React, { Component } from "react";
import api from "../../config/api";

export default class cadastroFuncionario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cadastro: {
        nome: "",
        email: "",
        nivel: "Selecione",
        senha: "",
      },
      erro: "",
    };
  }

  aoAlterar = (event) => {
    const valor = event.target.value;
    const nome = event.target.name;

    let cadastro = { ...this.state.cadastro };

    cadastro[nome] = valor;

    this.setState({ cadastro });
  };

  salvar = async (e) => {
    e.preventDefault();

    try {
      /*
      const data = new FormData();

      data.append("nome", this.state.cadastro.nome);
      data.append("email", this.state.cadastro.email);
      data.append("dataNascimento", this.state.cadastro.dataNascimento);
      data.append("senha", this.state.cadastro.senha);*/

      await api.post("/user", this.state.cadastro);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  };

  confirmaSenha = () => {
    const { senha, confirmaSenha } = this.state.senha;
    if (senha !== confirmaSenha) {
      alert("As senhas não combinam!");
    } else {
    }
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.salvar}>
          <label>Nome</label>
          <input
            type="text"
            value={this.state.cadastro.nome}
            onChange={this.aoAlterar}
            name="nome"
          />
          <label>Email</label>
          <input
            type="text"
            value={this.state.cadastro.email}
            onChange={this.aoAlterar}
            name="email"
          />
          <label>Nivel</label>
          <select
            value={this.state.cadastro.nivel}
            onChange={this.aoAlterar}
            name="nivel"
          >
            <option>Escolha uma opção</option>
            <option value="vetores" name="vetores">
              Vetores
            </option>
            <option value="postoDeSaude" name="postoDeSaude">
              Posto de Saúde
            </option>
          </select>

          <label>Senha</label>
          <input
            type="password"
            value={this.state.cadastro.senha}
            onChange={this.aoAlterar}
            name="senha"
          />
          <label>Repita a Senha</label>
          <input
            type="password"
            value={this.state.cadastro.confirmaSenha}
            onChange={this.aoAlterar}
            name="confirmaSenha"
            disabled
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
