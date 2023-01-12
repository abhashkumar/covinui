import React from 'react'
import { Input } from 'antd';
class PincodeComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            pincode : "",
            email : ""
        }
        this.notify = this.notify.bind(this)
    }
    notify() {

    }
    render() {
        return (
         <div>
             <Input type = "text" placeholder="enter pincode here" />
             <Input type = "text" placeholder="enter your email here" />
             <button type="button">Save</button>
         </div>
        );
    }
}

export default PincodeComponent