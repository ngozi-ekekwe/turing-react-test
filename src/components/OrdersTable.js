import React from 'react';
import { Table } from 'react-bootstrap';

const OrdersTable = ({orders}) => {
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
        {orders && orders.length >0 &&<tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>}
      </tbody>
    </Table>
  );
};

export default OrdersTable;