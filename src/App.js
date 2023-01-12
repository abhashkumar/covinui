import './App.css';
import 'antd/dist/antd.css';
import React from 'react';
import PincodeComponent from './PincodeComponent';
import DistrictComponent from './DistrictComponent';
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div><p> Vaccine available !!! Get notified by email</p></div>
        </header>
        <div className = "center">
            <button type="button" name = "byDistrict" onClick = {this.handleClick}>search by district</button>
            {"  "}
            <button type="button" name = "byPincode" onClick = {this.handleClick}>search by pincode</button>
            {this.state.isDistrictSelect ? <DistrictComponent />:<PincodeComponent/> }
        </div>
      </div>
    );
  }
}

export default App;
