import React from 'react'
import CountryStateObj from './CountryStateObj'
class DistrictComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            countryState : "",
            selectedDistrict :"",
            districts: [],
            email : ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler() {
        fetch('http://localhost:3000/user-details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                district: this.state.selectedDistrict
            })
        }).then( data => {
            alert(`Details saved successfully, Click ok`);
        }).catch( data => {
            alert(`Falied to saved data, Try again`);
        });
        this.setState({
            countryState : "",
            selectedDistrict :"",
            districts: [],
            email : ""
        });
    }
    handleChange(event) {
        const {name, value} = event.target;
        if(name === "selectedDistrict") {
            this.setState({
                ...this.state,
                selectedDistrict: value
            })
        }
        else if(name === "countryState") {
            fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${event.target.value}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    countryState: value,
                    selectedDistrict:"",
                    districts: data.districts.map(district=> {
                       return {
                            id : district.district_id ,
                            name : district.district_name
                        }
                    })
                })  
            })
            .catch(error => console.log(error));
        }
        else if(name === "email") {
            this.setState(
                {
                    ...this.state,
                    email: value
                }
            )
        }
        else {

        }
    }
    render() {
        return(
            <div>
                <select name="countryState" onChange={this.handleChange}>
                    <option value="">---------Select state-----</option>
                    {
                        CountryStateObj.map((state)=>{
                            return <option key = {state.id} value={state.id}>{state.name}</option>
                        })
                    }
                </select>
                {" "}
                <select name="selectedDistrict" onChange={this.handleChange}>
                    <option value="">---------Select district-----</option>
                    {
                        this.state.districts.map((district)=> {
                            return <option key = {district.id} value={district.id}>{district.name}</option>
                        })
                    }
                </select>
                {" "}
                <input type = "text" name = "email" placeholder = "enter your email address here" value = {this.state.email} onChange={this.handleChange}/><br/>
                <button type="button" onClick = {this.clickHandler}>Save</button>
            </div>
        )
    }
}
export default DistrictComponent