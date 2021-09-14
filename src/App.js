import React, { useState, useEffect } from "react";
import API from "./api";
import Card from "./components/Card";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import * as Utils from './utils';

function App() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchProduct, setProductInput] = useState("");

  const {filterProducts} = Utils;

  useEffect(() => {
    API.getProduct().then((res) => {
      setProducts(res.data);
    });
  }, []);

  const cardResults = products
    .filter((product) => filterProducts(product, searchInput, searchProduct))
    .map((product) => (<Card cardResults={product} key={uuidv4()} />));

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="text">Interview Header</h1>
        </div>
      </div>
      <div className="container">
        <form>
          <label>
            Search:
            <input
              type="text"
              name="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </label>
        </form>
      </div>
      <label htmlFor="productType">Choose a product type:</label>
      <select id="productType" onChange={(e) => setProductInput(e.target.value)}>
        <option value="">---</option>
        <option value="RETAIL">Retail</option>
        <option value="CASH">Cash</option>
      </select>
      <div className="container">
        <h1>Results: </h1>
        <div>{cardResults}</div>
      </div>
      <div style={{ marginTop: 30 }} className="footer">
        {" "}
        <div className="container">
          <h1>Interview Footer </h1>
        </div>
        <p>Built with love</p>
      </div>
    </>
  );
}

export default App;
