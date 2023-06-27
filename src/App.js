import './App.css';
import 'antd/dist/antd.css';
import React from 'react';
import PincodeComponent from './PincodeComponent';
import DistrictComponent from './DistrictComponent';

import  { MemoziedTestMemo, TestCOmponent1 }  from './TestCOmponent1';
import SuggestFruit from './SuggestionSetTimeoutAndClearTimeout';
import ReactStrapComponent  from './ReactStrapComponent'


class App extends  React.Component{
  constructor() {
    super()
    this.state = {
      isDistrictSelect: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const name = event.target.name
    console.log(event.target);
    this.setState({
      isDistrictSelect: name === "byDistrict"
    })
  }
  testComponentsList = [2,3,5].map((item) => {
    return(
      <MemoziedTestMemo id = {item} darkMode = {false}/>
    )
  })
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div><p> Vaccine available !!! Get notified by email</p></div>
          <MemoziedTestMemo id = {1}
          ispun = {true}
          cooments = {["A","B","C"]}
          />
          {
          /*
          {this.testComponentsList}
          */}
        </header>
        <div className = "center">
            <button type="button" name = "byDistrict" onClick = {this.handleClick}>search by district</button>
            {"  "}
            <button type="button" name = "byPincode" onClick = {this.handleClick}>search by pincode</button>
            {this.state.isDistrictSelect ? <DistrictComponent />:<PincodeComponent/> }
        </div>
        <SuggestFruit />
        <ReactStrapComponent/>
      </div>
    );
  }
}

export default App;

//Memoization with props still renders the child componet if we remove props then it does not render the child component