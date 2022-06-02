import React, { Component } from "react";
import { Link } from "react-router-dom";
import Qr from "./common/qrcode";

class ProductsTable extends React.Component {
  render() {
    const { products, onDelete, onShow, onClose } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Creation Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.product_id}>
              <td>{p.product_id}</td>
              <td>
                <Link to={`/products/${p.product_id}`}>{p.name}</Link>
              </td>
              <td>{p.price}</td>
              <td>{p.creationDate}</td>
              <td>
                <button
                  onClick={() => onDelete(p)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
              <td>
                <Qr product={p} onClick={() => onShow(p)} onClose={onClose} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductsTable;
