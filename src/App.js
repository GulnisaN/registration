import React from "react";

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            phoneNumber: '',
            emailAddress: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange = (event) => {
        this.setState({fullName: event.target.fullName})
        this.setState({phoneNumber: event.target.phoneNumber})
        this.setState({emailAddress: event.target.emailAddress})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {fullName, phoneNumber, emailAddress} = this.state.value;
        alert(`Full Name: ${fullName}\nPhone Number: ${phoneNumber}\nEmail Address: ${emailAddress}`);
    }

    render() {
        return(
            <div onSubmit={this.handleSubmit}>
                <h2>Registration form</h2>
                <input type="text"
                       placeholder="Full Name"
                       name="fullName"
                       value={this.state.fullName}
                       onChange={this.handleInputChange}
                       required
                />
                <input type="tel"
                       placeholder="Phone Number"
                       name="phoneNumber"
                       value={this.state.phoneNumber}
                       onChange={this.handleInputChange}
                       required
                />
                <input type="email"
                       placeholder="Email Address"
                       name="emailAddress"
                       value={this.state.emailAddress}
                       onChange={this.handleInputChange}
                       required
                />

                <button type="submit" onClick={this.handleSubmit}>Submit</button>

            </div>
        )
    }


}

export default Registration;