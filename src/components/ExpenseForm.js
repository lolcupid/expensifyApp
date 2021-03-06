import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  state = {
    description: this.props.expense ? this.props.expense.description : '',
    note: this.props.expense ? this.props.expense.note : '',
    amount: this.props.expense ? this.props.expense.amount : '',
    createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
    calendarFocus: false,
    error: ''
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => {
      return {
        description
      }
    })
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => {
      return {
        note
      }
    })
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => {
        return {
          amount
        }
      })
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => {
        return {
          createdAt
        }
      })
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => {
      return {
        calendarFocus: focused
      }
    })
  }
  onSubmitChange = (e) => {
    e.preventDefault();

    if (!this.state.description && !this.state.amount) {
      this.setState(() => {
        return {
          error: 'Please provide description and amount'
        }
      })
    } else {
      this.setState(() => {
        return {
          error: ''
        }
      })
      this.props.onSubmitChange({
        description: this.state.description,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),
        amount: Number(this.state.amount)
      })
    }
  }

  render() {
    return (
      <form className='form-input' onSubmit={this.onSubmitChange}>
        {this.state.error && <p className='form-input-error'>{this.state.error}</p>}
        <input className='text-input'
          type="text"
          onChange={this.onDescriptionChange}
          value={this.state.description}
          placeholder='Description'
          autoFocus
        />
        <input className='text-input'
          type="number"
          onChange={this.onAmountChange}
          value={this.state.amount}
          placeholder='Amount'
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocus}
          onFocusChange={this.onFocusChange}
          isOutsideRange={() => false}
          numberOfMonths={1}
        />
        <textarea className='textarea-input'
          value={this.state.note}
          onChange={this.onNoteChange}
          placeholder='Add note for description'
        >
        </textarea>
        <div>
          <button className='btn'>Add</button>
        </div>
      </form>
    )
  }
}