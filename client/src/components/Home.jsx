import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="">
        <div className="nav">
          <Link className="link" to={"/"}>
            Home
          </Link>
          <Link className="link" to={"/phones"}>
            Phones
          </Link>
        </div>
        <div>
          {/* <h1>Phone Catalogue</h1> */}
        </div>
      </div>
    );
  }
}
