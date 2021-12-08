import React, { Component } from "react";
import io from "socket.io-client";
import Api from "../../config/api";
import { Link } from "react-router-dom";

import "./ListaFichas.css";

export default class ListaFichas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fichas: [],
      loading: false,
    };
  }
  async componentDidMount() {
    this.registerToSocket();

    try {
      this.setState({ loading: true });
      const listaFichas = await Api.get("forms");
      this.setState({ fichas: listaFichas.data });
    } catch (err) {
      console.log(err);
    }

    this.setState({ loading: false });
  }

  registerToSocket = () => {
    const socket = io("http://localhost:3333");

    socket.on("post", (newPost) => {
      this.setState({ fichas: [newPost, ...this.state.fichas] });
    });
  };

  async delete(id) {
    await Api.delete(id);
  }

  render() {
    const ListFichas = this.state.fichas.map((ficha) => {
      return (
        <div className="card" key={ficha._id}>
          <div className="card-title">{ficha.doenca}</div>
          <hr />
          <div className="card-content">
            {ficha.nome}
            <div className="card-endereco">
              {ficha.bairro}, {ficha.endereco}
            </div>
          </div>
          <hr className="linha-botao" />
          <Link to={{ pathname: "/ficha/" + ficha._id, state: { ficha } }}>
            <button className="btn-link">Ficha Completa</button>
          </Link>
        </div>
      );
    });
    return (
      <div className="card-container">
        {this.state.loading && (
          <div className="loading">
            <lottie-player
              src="https://assets5.lottiefiles.com/datafiles/4xGIdqdKJEUd3Nb/data.json"
              background="transparent"
              speed="1"
              autoplay
              loop
            ></lottie-player>
          </div>
        )}
        {ListFichas}
      </div>
    );
  }
}
