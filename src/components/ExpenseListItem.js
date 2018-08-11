import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <p>Description: {description}</p>
      <p>Amout: {numeral(amount).format('$0,0.00')}</p>
      <p>CreatedAt: {moment(createdAt).format('MMM Do YYYY')}</p>
      <Link to={'/edit/'+id}>Go Details</Link>
    </div>
  )
}
export default ExpenseListItem;