/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import React, {useState} from 'react';

const Credits = (props) => {
  const [creditObj, setCreditObj] = useState({ description: '', amount: 0 });
  const {credits} = props;
  let creditsView =  () => credits.map((credit) => {
    const {id, description, amount, date} = credit;
    let dateYYD = date.slice(0, 10);
    return <li key={id}>{amount} {description} {dateYYD}</li>
  })


  const handleChange = (e) => {
    const {name, value} = e.target;
    setCreditObj({...creditObj, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const {description, amount} = creditObj;
    if(!description || !amount) return;
    props.addCredit({
      ...creditObj,
      amount: parseFloat(amount,10),
      date: new Date().toISOString().split("T")[0]
    });
    setCreditObj({ description: '', amount: 0 });
  }


  return (
    <div>
      <h1>Credits</h1>

      {creditsView()}

      <form onSubmit={(e) => {
        handleSubmit(e);
      }}>
        <input type="text" name="description" 
        value = {creditObj.description}
        onChange={handleChange}
        required/>
        <input type="number" name="amount" 
       value = {creditObj.amount}
       onChange={handleChange}
       required/>
        <button type="submit">Add Credit</button>
      </form>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;