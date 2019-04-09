import React from 'react';
import moment from 'moment';
import { Table } from 'react-bootstrap';

const CartItemTable = ({ cartItems }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>ATTRIBUTES</th>
          <th>QTY</th>
          <th>PRICE</th>
        </tr>
      </thead>
      <tbody>
        {cartItems && cartItems.map((cartItem) => {
          return (
            <tr>
              <td>{cartItem.item_id}</td>
              <td>{cartItem.name}</td>
              <td>{cartItem.attributes}</td>
              <td>{cartItem.quantity}</td>
              <td>${cartItem.subtotal}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
};

export default CartItemTable;