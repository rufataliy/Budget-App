// Export a stateless functional component
// description amount createdAt
import React from "React"
import {connect} from "react-redux"
import {removeExpense} from "../actions/expenses"


const ExpenseListItem = ({description, amount, createdAt, id, dispatch})=>(
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={(e)=>{
      dispatch(removeExpense({id}))
    }}>Remove</button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses:state.expenses
  }
}

export default connect(mapStateToProps)(ExpenseListItem)
