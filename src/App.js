/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';
import axios from 'axios';

class App extends Component {
  constructor() { 
    super(); 
    this.state = {
      accountBalance: 0,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
    this.componentDidMount()
  }

  async componentDidMount(){
    let creditResp = await axios.get("https://johnnylaicode.github.io/api/credits.json");
    let debitResp = await axios.get("https://johnnylaicode.github.io/api/debits.json");

    let creditsTotal = 0;
    let debitsTotal = 0;
    if (creditResp && creditResp.data && debitResp && debitResp.data) {
      creditsTotal = creditResp.data.reduce((total, credit) => total + credit.amount, 0);
      debitsTotal = debitResp.data.reduce((total, debit) => total + debit.amount, 0);
    }
    this.setState({
      creditList : creditResp.data,
      debitList : debitResp.data,
      accountBalance : parseFloat(creditsTotal, 10) - parseFloat(debitsTotal, 10)
    })
  }


  addCredit = (creditData) => {
    this.setState({
      creditList: [...this.state.creditList, creditData]
    })
  }
  addDebit = (debitData) => {
    this.setState({
      debitList: [...this.state.debitList, debitData]
    })
  }
  render() {  
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (<Credits addCredit={this.addCredit} credits={this.state.creditList} accountBalance={this.state.accountBalance} />) 
    const DebitsComponent = () => (<Debits debits={this.state.debitList} addDebits={this.addDebit} accountBalance={this.state.accountBalance} />) 
    return (
      <Router basename="/bank-of-react-starter-code">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;