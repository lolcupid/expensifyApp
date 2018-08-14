import React from 'react';
import { connect } from "react-redux";
import { DateRangePicker } from 'react-dates'
import { setTextFilter } from '../actions/filters';
import { sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseInput extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }
  render() {
    return (
      <div className='container'>
        <div className='input-group'>
          <div className='input-group-items'>
            <input className='text-input' type='text' value={this.props.filters.text} onChange={(e) => {
              this.props.dispatch(setTextFilter(e.target.value))
            }} />
          </div>
          <div className='input-group-items'>
            <select className='select-input' onChange={(e) => {
              if (e.target.value === 'date') {
                this.props.dispatch(sortByDate())
              } else if (e.target.value === 'amount') {
                this.props.dispatch(sortByAmount())
              }
            }}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className='input-group-items'>
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              startDateId="start_date_input"
              endDateId="end_date_input"
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseInput)