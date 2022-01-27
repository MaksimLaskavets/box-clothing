/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unused-state */
import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss"

class SignIn extends React.Component{
	constructor(props){
		super(props)

		this.state={
			email : '',
			password : ''
		}
	}

	handleSubmit=event=>{
		event.preventDefault()

		this.setState=({email:'',password:''})
	}

	handleChange=event=>{
		// вот здесь не совсем понял
		const{name,value}=event.target

		this.setState({[name]:value})

	}

	render(){
		return (
			<div className="sign-in">
				<h1>I already have an account</h1>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput 
					handleChange={this.handleChange} 
					name="email" 
					type="email"
					label="email" 
					value={this.state.email}
					 required/>
					<FormInput 
					handleChange={this.handleChange} 
					name="password" 
					type="password"
					label="password" 
					 value={this.state.password}
					  required/>
				<CustomButton type="submit" > Sign in</CustomButton>
				</form>
			</div>
		)
	}
}

export default SignIn