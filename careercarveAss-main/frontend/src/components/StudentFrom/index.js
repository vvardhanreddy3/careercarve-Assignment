import {Component} from 'react'
import './index.css'

class StudentFrom extends Component{
    state = {studentName: '', email: '', interestArea: "",nameErrorMsg:"",emailErrorMag:""}
    onChangeStudentname = event => {
        this.setState({studentName: event.target.value})
      }
    onChangeEmail = event => {
        this.setState({email: event.target.value})
      }
    onChangeInterestArea=event=>{
        this.setState({interestArea:event.target.value})
    }
    submitForm=async event =>{
        event.preventDefault()
        const {studentName,email}=this.state
        if (studentName===""){
            this.setState({nameErrorMsg:"Enter Student Name"});
        }
        if(email===""){
            this.setState({emailErrorMag:"Enter Student Name"})
        }
        else{
            this.setState({nameErrorMsg:""});
            this.setState({emailErrorMag:""})
        }
    }
    render(){
        const{studentName,email,interestArea,emailErrorMag,nameErrorMsg}=this.state
        return (
            <div className="login-container">
            <form className="form-container" onSubmit={this.submitForm}>
            <div className="input-container">
                <label className="input-label" htmlFor="username">
                Studnet Name
                </label>
                <input
                type="text"
                id="username"
                onChange={this.onChangeStudentname}
                className="username-input-field"
                value={studentName}
                placeholder="Student Name"
                />
                <p className="error-message">{nameErrorMsg}</p>
            </div>
            <div className="input-container">
                <label className="input-label" htmlFor="password">
                Email
                </label>
                <input
                type="text"
                id="email"
                value={email}
                className="password-input-field"
                onChange={this.onChangeEmail}
                placeholder="Email"
                />
                <p className="error-message">{emailErrorMag}</p>
            </div>
            <div className="input-container">
                <label for="interest" className="input-label">Choose ur Interest</label>
                <select name="interest" id="interest" className="password-input-field">
                <option  value={interestArea}>FMCG Sales</option>
                <option  value={interestArea}>Equity Research</option>
                <option value={interestArea}>Digital Marketing</option>

            </select>

            </div>
            
            <button className="login-button" type="submit">
                Seach for Mentors
            </button>
            </form>
      </div>
        )
    }
}

export default StudentFrom