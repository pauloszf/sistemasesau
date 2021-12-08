import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../config/api";
import "./Ficha.css";

import Back from "../../images/back.png";

export default class Ficha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ficha: this.props.location.state.ficha,
      fichaArquivo: [],
      doencas: [],
    };
  }

  componentDidMount() {
    this.filtraDoencas();
    console.log(this.state.ficha);
  }

  filtraDoencas = () => {
    let doencasLista = [
      "febre",
      "fraqueza",
      "edema",
      "emagrecimento",
      "tosse",
      "diarreia",
      "palidez",
      "baco",
      "infeccao",
      "hemorragia",
      "figado",
      "ictericia",
    ];
    let listaDoenca = [];
    const ficha = { ...this.state.ficha };
    let j = 0;

    for (let i = 0; i < doencasLista.length; i++) {
      if (ficha[doencasLista[i]] === "true") {
        listaDoenca[j] = { nome: doencasLista[i], id: j };
        j++;
      }
    }
    try {
      const { doencas } = this.state;
      for (let h = 0; h < listaDoenca.length; h++) {
        doencas[h] = listaDoenca[h];
      }
      this.setState({ doencas });
    } catch (err) {
      console.log(err);
    }
  };

  arquivar = async (e) => {
    e.preventDefault();
    const ficha = { ...this.state.fichaArquivo };
    ficha[0] = this.state.ficha;
    try {
      /*
      this.setState({ fichaArquivo });
      */
      await api.post("/arquivados", ficha);
      console.log(ficha);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const ListarDoencas = this.state.doencas.map((lista) => {
      return <h5 key={lista.id}> {lista.nome} </h5>;
    });
    return (
      <div className="container">
        <Link to="/listaFichas">
          <img className="voltar" src={Back} alt="Voltar" />
        </Link>
        <fieldset>
          <legend>Dados pessoais</legend>
          <div className="ficha">
            <h5>
              {" "}
              Nome: <span>{this.state.ficha.nome}</span>{" "}
            </h5>
            <h5>
              {" "}
              Idade: <span>{this.state.ficha.idade}</span>{" "}
            </h5>
            <h5>
              {" "}
              Genero: <span>{this.state.ficha.genero}</span>{" "}
            </h5>
            <h5>
              {" "}
              Endereço: <span>{this.state.ficha.endereco}</span>{" "}
            </h5>
            <h5>
              {" "}
              Bairro: <span>{this.state.ficha.bairro}</span>{" "}
            </h5>
            <h5>
              Cartão SUS: <span>{this.state.ficha.cartaoSUS}</span>
            </h5>
            <h5>
              {" "}
              Telefone: <span>{this.state.ficha.telefone}</span>{" "}
            </h5>
            <h5>
              {" "}
              Doença: <span>{this.state.ficha.doenca}</span>{" "}
            </h5>
          </div>
        </fieldset>
        <fieldset>
          <legend>Sintomas</legend>
          <div className="ficha">{ListarDoencas}</div>
        </fieldset>
        <button className="btn-arquivar" onClick={this.arquivar}>
          Arquivar
        </button>
      </div>
    );
  }
}
