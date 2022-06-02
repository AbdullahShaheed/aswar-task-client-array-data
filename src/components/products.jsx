import React, { Component } from "react";
import { getProducts } from "./../services/fakeProductService";
import ProductsTable from "./productsTable";
import InfoModel from "./common/infoModal";
import { Link } from "react-router-dom";

class Products extends React.Component {
  state = {
    products: getProducts(),
    product: {},
    modalVisible: false,
  };

  toggleModal = () => {
    const visible = this.state.modalVisible;
    this.setState({ modalVisible: !visible });
  };
  handleDelete = (product) => {
    const products = this.state.products.filter(
      (p) => p.product_id !== product.product_id
    );
    this.setState({ products });
  };

  toggleModal = () => {
    const visible = this.state.modalVisible;
    this.setState({ modalVisible: !visible });
  };

  render() {
    const { length } = this.state.products;
    return (
      <React.Fragment>
        <Link to="/products/new" className="btn btn-primary mb-1">
          Add New Product
        </Link>
        <p>Showing {length} products in the database</p>
        <ProductsTable
          products={this.state.products}
          onDelete={this.handleDelete}
          onShow={(product) => {
            this.toggleModal();
            this.setState({ product });
          }}
        />
        <InfoModel
          data={this.state.product}
          visisble={this.state.modalVisible}
          onClose={this.toggleModal}
        />
      </React.Fragment>
    );
  }
}

export default Products;
