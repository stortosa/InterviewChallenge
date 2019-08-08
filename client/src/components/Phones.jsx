import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Phones extends Component {
  constructor() {
    super();
    this.state = {
      listofPhones: []
    };
  }

  getAllPhones = () => {
    axios
      .get(`http://localhost:5000/allPhones`)

      .then(responseFromApi => {
        console.log(responseFromApi.data);
        this.setState({
          listofPhones: responseFromApi.data
        });
      });
  };

  componentDidMount() {
    this.getAllPhones();
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrap">
          {this.state.listofPhones.map((phone, idx) => {
            return (
              <div key={idx} className="container">
                <Link to={`/singlePhone/${phone.id}`}>
                  <h3>{phone.name}</h3>
                  <h3>{phone.manufacturer}</h3>
                  <h3>{phone.color}</h3>
                  <img src={phone.imageFileName} alt="phones" />
                </Link>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
