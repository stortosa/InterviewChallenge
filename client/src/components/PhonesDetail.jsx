import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class PhonesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // creo propiedad para coger el id del objeto del json
      //para luego igualarlo al id del setState
      id: this.props.match.params.id,
      //kiero guardar las id en phone como objeto para luego sacarlos con el axios
      //y mostralas en pantalla
      singlePhone: {}
    };
    // console.log(this.state.id)
  }

  getSinglePhone = () => {
    console.log("dddddddddddddddddddddddddddddddddd");
    // const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/allPhones`)
      .then(responseFromApi => {
        responseFromApi.data.map(phone => {
          console.log(phone.id);
          //buscando en la base del json lo que coincida con la id que queremos
          //en this.state ya hemos nombrado la propiedad id, aki la igualamos para
          //ver si coinciden con lo que tiene el json, con el mismo nombre de id
          if (this.state.id == phone.id) {
            this.setState({
              ...this.state,
              singlePhone: phone
              //llenamos phone del this.state con los datos del json
            });
            console.log(this.state.phone);
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSinglePhone();
  }

  render() {
    console.log("entra");
    return (
      <React.Fragment>
        <div className="wrapDos">
          <div className="">
            <h1>{this.state.singlePhone.name}</h1>
            {/* //para sacar bien la imagen aki */}
            <img
              src={`../${this.state.singlePhone.imageFileName}`}
              alt="phones"
            />
            <p>Description:</p> <h3>{this.state.singlePhone.description}</h3>
            <p>Manufacture:</p><h3> {this.state.singlePhone.manufacturer}</h3>
            <p>Screen:</p><h3> {this.state.singlePhone.screen}</h3>
            <p>Processor:</p><h3> {this.state.singlePhone.processor}</h3>
            <p>RAM:</p><h3> {this.state.singlePhone.ram}</h3>
            <p>Color:</p> <h3>{this.state.singlePhone.color}</h3>
            <p>Price:</p><h2> {this.state.singlePhone.price} €</h2>
            <Link className="link" to={"/Phones"}>Back to Phones</Link>

          </div>

        </div>
      </React.Fragment>
    );
  }
}
