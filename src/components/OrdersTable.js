import React from 'react';
import { Table } from 'react-bootstrap';

const OrdersTable = ({ orders }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ORDER ID</th>
          <th>AMOUNT</th>
          <th>CREATED</th>
          <th>SHIPPIED</th>
        </tr>
      </thead>
      <tbody>
        {orders && orders.map((order) => {
          return (
            <tr>
              <td>{order.order_id}</td>
              <td>${order.total_amount}</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
};

export default OrdersTable;