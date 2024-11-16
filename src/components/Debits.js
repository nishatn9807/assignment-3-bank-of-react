/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import React, {useState} from 'react';

const Debits = (props) => {
  // Create the list of Debit items
  const [debitObj, setDebitObj] = useState({ description: '', amount: 0 });
  const {debits} = props;
  let debitsView =  () => debits.map((debit) => {
    const {id, description, amount, date} = debit;
    let dateYYD = date.slice(0, 10);
    return <li key={id}>{amount} {description} {dateYYD}</li>
  })


  const handleChange = (e) => {
    const {name, value} = e.target;
    setDebitObj({...debitObj, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const {description, amount} = debitObj;
    if(!description || !amount) return;
    props.addDebit({
      ...debitObj,
      amount: parseFloat(amount,10),
      date: new Date().toISOString().split("T")[0]
    });
    setDebitObj({ description: '', amount: 0 });
  }

  // Render the list of Debit items and a form to input new Debit item
  return (
    <div>
      <h1>Debits</h1>

      {debitsView()}

      <form onSubmit={(e) => {
        handleSubmit(e);
      }}>
        <input type="text" name="description" 
        value = {debitObj.description}
        onChange={handleChange}
        required/>
        <input type="number" name="amount" 
       value = {debitObj.amount}
       onChange={handleChange}
       required/>
        <button type="submit">Add Debit</button>
      </form>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;