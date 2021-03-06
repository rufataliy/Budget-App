import React from "react";
import moment from "moment"
import {SingleDatePicker} from "react-dates"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
// const date = new Date();

const now = moment();

export default class ExpenseForm extends React.Component {
  state = {
    description:"",
    note:"",
    amount:"",
    createdAt:moment(),
    calenderFocused:false,
    error:""
  };
  onNoteChange=(e)=>{
    const note = e.target.value;
    this.setState(()=>({note}))
  }
  onDescriptionChange = (e)=>{
    const description = e.target.value;
    this.setState(()=>({description}));
  }
  onAmountChange = (e)=> {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/) ) {
      this.setState(()=>({amount}))
    }
  }
  onDateChange=(createdAt)=>{
    if (createdAt) {
      this.setState(()=>({createdAt}))
    }

  }
  onFocusChange = ({focused})=>{
    this.setState(()=>({calenderFocused:focused}))
  }
  onSubmit = (e)=>{
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(()=>({error:"Pleaaaase"}))
    }else {
      this.setState(()=>({error:""}))
      this.props.onSubmit({
        description:this.state.description,
        amount:parseFloat(this.state.amount,10)*100,
        createdAt:this.state.createdAt.valueOf(),
        note:this.state.note
     })
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.description}
            onChange={this.onDescriptionChange}
            type="text"
            placeholder="description"
            autofocus/>
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}

          />
          <textarea
            placeholder="Add a note"
            value={this.state.note}
            onChange={this.onNoteChange}
          >

          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
