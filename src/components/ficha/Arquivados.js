import React, { Component } from "react";

import Api from "../../config/api";

export default class Arquivados extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fichas: [],
    };
  }

  async componentDidMount() {
    const listaFichas = await Api.get("arquivados");

    this.setState({ fichas: listaFichas.data });
    console.log(listaFichas.data);
  }

  render() {
    return <div></div>;
  }
}
