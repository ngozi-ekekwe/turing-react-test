import React from 'react';
import moment from 'moment';
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
              <td>{moment(order.created_at).format('MMMM Do YYYY')}</td>
              <td>-</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
};

export default OrdersTable;