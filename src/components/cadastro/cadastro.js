import React, { Component } from "react";
import api from "../../config/api";
/* import User from '../user/user'; */

import "./Cadastro.css";

export default class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ficha: {
        nome: "",
        endereco: "",
        bairro: "",
        idade: "",
        genero: "",
        telefone: 0,
        cartaoSUS: 0,
        unidade: "",
        doenca: "Selecione",
        febre: "false",
        fraqueza: "false",
        edema: "false",
        emagrecimento: "false",
        tosse: "false",
        diarreia: "false",
        palidez: "false",
        baco: "false",
        infeccao: "false",
        hemorragia: "false",
        figado: "false",
        ictericia: "false",
        imageForm: null,
      },
      erro: false,
    };
  }

  salvar = async (event) => {
    event.preventDefault();

    //const formulario = this.state.ficha;

    const data = new FormData();

    data.append("nome", this.state.ficha.nome);
    data.append("endereco", this.state.ficha.endereco);
    data.append("bairro", this.state.ficha.bairro);
    data.append("idade", this.state.ficha.idade);
    data.append("genero", this.state.ficha.genero);
    data.append("telefone", this.state.ficha.telefone);
    data.append("cartaoSUS", this.state.ficha.cartaoSUS);
    data.append("unidade", this.state.ficha.unidade);
    data.append("doenca", this.state.ficha.doenca);
    data.append("febre", this.state.ficha.febre);
    data.append("fraqueza", this.state.ficha.fraqueza);
    data.append("emagrecimento", this.state.ficha.emagrecimento);
    data.append("tosse", this.state.ficha.tosse);
    data.append("diarreia", this.state.ficha.diarreia);
    data.append("palidez", this.state.ficha.palidez);
    data.append("baco", this.state.ficha.baco);
    data.append("infeccao", this.state.ficha.infeccao);
    data.append("hemorragia", this.state.ficha.hemorragia);
    data.append("figado", this.state.ficha.figado);
    data.append("ictericia", this.state.ficha.ictericia);
    data.append("imageForm", this.state.ficha.imageForm);

    console.log(data);
    try {
      await api.post("/forms", data);
    } catch (error) {
      console.log(error);
    }
  };

  hadleImageChange = (e) => {
    const name = e.target.name;

    let ficha = { ...this.state.ficha };

    ficha[name] = e.target.files[0];

    this.setState({ ficha });
  };

  aoAlterar = (event) => {
    const valor = event.target.value;
    const name = event.target.name;

    let ficha = { ...this.state.ficha };

    ficha[name] = valor;

    this.setState({ ficha });
  };

  aoSelecionar = (event) => {
    const nome = event.target.name;

    let ficha = { ...this.state.ficha };

    ficha[nome] = "true";

    this.setState({ ficha });
  };

  render() {
    return (
      <div className="container">
        <p className="titulo-ficha">Cadastro de Ficha de Notificação</p>
        <label className="label-ficha"> Nome Completo </label>
        <input
          type="text"
          label="Nome"
          value={this.state.ficha.nome}
          name="nome"
          onChange={this.aoAlterar}
          className="input-ficha"
        />
        <br />
        <label className="label-ficha"> Logradouro </label>
        <input
          label="Endereço"
          value={this.state.ficha.endereco}
          name="endereco"
          onChange={this.aoAlterar}
          type="text"
          className="input-ficha"
        />
        <br />
        <label className="label-ficha"> Bairro </label>
        <input
          label="Bairro"
          value={this.state.ficha.bairro}
          name="bairro"
          onChange={this.aoAlterar}
          type="text"
          className="input-ficha"
        />
        <br />
        <label className="label-ficha"> Idade </label>
        <input
          type="number"
          value={this.state.ficha.idade}
          name="idade"
          onChange={this.aoAlterar}
          className="input-ficha"
        />
        <br />
        <label className="label-ficha"> Genero </label>
        <input
          type="text"
          value={this.state.ficha.genero}
          name="genero"
          onChange={this.aoAlterar}
          className="input-ficha"
        />
        <br />
        <label className="label-ficha"> Telefone </label>
        <input
          type="number"
          value={this.state.ficha.telefone}
          name="telefone"
          onChange={this.aoAlterar}
          className="input-ficha"
        />
        <br />
        <label className="label-ficha"> Número do Cartão do SUS </label>
        <input
          type="number"
          value={this.state.ficha.cartaoSUS}
          name="cartaoSUS"
          onChange={this.aoAlterar}
          className="input-ficha"
        />
        <br />
        <label className="label-ficha"> Unidade de Saúde </label>
        <input
          type="text"
          value={this.state.ficha.unidade}
          name="unidade"
          onChange={this.aoAlterar}
          className="input-ficha"
        />
        <br />
        <label className="label-ficha"> Escolher um arquivo </label>
        <input
          type="file"
          name="imageForm"
          className="input-ficha"
          onChange={this.hadleImageChange}
        />
        <br />
        <label className="label-ficha"> Agravos/Doenças </label>
        <select
          className="browser-default custom-select"
          value={this.state.ficha.doenca}
          onChange={this.aoAlterar}
          name="doenca"
        >
          <option>Escolha uma opção</option>
          <option value="dengue" name="dengue">
            Dengue
          </option>
          <option value="zika" name="zika">
            Zika
          </option>
          <option value="chikungunya" name="chikungunya">
            Chikungunya
          </option>
        </select>
        <br />
        <label className="label-ficha"> Manifestações Clínicas </label>
        <div>
          <label className="label-ficha">Febre</label>
          <input
            filled
            value={this.state.ficha.febre}
            name="febre"
            type="checkbox"
            id="checkbox1"
            onClick={this.aoSelecionar}
          />
          <label className="label-ficha">Fraqueza</label>
          <input
            filled
            value={this.state.ficha.fraqueza}
            name="fraqueza"
            type="checkbox"
            id="checkbox2"
            onChange={this.aoSelecionar}
          />
          <label className="label-ficha">Edema</label>
          <input
            filled
            value={this.state.ficha.edema}
            name="edema"
            type="checkbox"
            id="checkbox3"
            onChange={this.aoSelecionar}
          />
          <label className="label-ficha">Emagrecimento</label>
          <input
            filled
            value={this.state.ficha.emagrecimento}
            name="emagrecimento"
            type="checkbox"
            id="checkbox4"
            onChange={this.aoSelecionar}
          />
          <label className="label-ficha">Tosse</label>
          <input
            filled
            value={this.state.ficha.tosse}
            name="tosse"
            type="checkbox"
            id="checkbox5"
            onChange={this.aoSelecionar}
          />
          <label className="label-ficha">Diarréia</label>
          <input
            filled
            value={this.state.ficha.diarreia}
            name="diarreia"
            type="checkbox"
            id="checkbox6"
            onChange={this.aoSelecionar}
          />
          <label className="label-ficha">Palidez</label>
          <input
            filled
            value={this.state.ficha.palidez}
            name="palidez"
            type="checkbox"
            id="checkbox7"
            onChange={this.aoSelecionar}
          />
          <label className="label-ficha">Aumento do baço</label>
          <input
            filled
            value={this.state.ficha.baco}
            name="baco"
            type="checkbox"
            id="checkbox8"
            onChange={this.aoSelecionar}
          />
          <label className="label-ficha">Quadro infeccioso</label>
          <input
            filled
            value={this.state.ficha.infeccao}
            name="infeccao"
            type="checkbox"
            id="checkbox9"
            onChange={this.aoSelecionar}
          />
          <label className="label-ficha">Fenômenos hemorrágicos</label>
          <input
            filled
            value={this.state.ficha.hemorragia}
            name="hemorragia"
            type="checkbox"
            id="checkbox10"
            onChange={this.aoSelecionar}
          />
          <label className="label-ficha">Aumento do figado</label>
          <input
            filled
            value={this.state.ficha.figado}
            name="figado"
            type="checkbox"
            id="checkbox11"
            onChange={this.aoSelecionar}
          />
          <label className="label-ficha">Ictericia</label>
          <input
            filled
            value={this.state.ficha.ictericia}
            name="ictericia"
            type="checkbox"
            id="checkbox12"
            onChange={this.aoSelecionar}
          />
        </div>
        <div className="text-center mt-4">
          <button color="unique" onClick={this.salvar}>
            Cadastrar Ficha de Notificação
          </button>
        </div>
      </div>
    );
  }
}
