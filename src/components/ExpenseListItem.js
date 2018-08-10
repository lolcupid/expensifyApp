import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <p>Description: {description}</p>
      <p>Amout: {amount}</p>
      <p>CreatedAt: {createdAt}</p>
      <Link to={'/edit/'+id}>Go Details</Link>
    </div>
  )
}
export default ExpenseListItem;