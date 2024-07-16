import { Component } from "react";
import {Link} from 'react-router-dom'
import { IoMdEye } from "react-icons/io";
import './Signup.css'

class SignupPage extends Component{
    state={name:'',email:'',password:'',showPassword:false,number:'',lastname:'',city:'',zipCode:'500072'}

    onChangeName=event=>{
        this.setState({name:event.target.value})
    }

    onChangeEmail=event=>{
        this.setState({email:event.target.value})
    }

    onChangePassword=event=>{
        this.setState({password:event.target.value})
    }

    onChangeCompany=event=>{
        this.setState({city:event.target.value})
    }

    onChangeNumber=event=>{
        this.setState({number:event.target.value})
    }

    onClickChangeType=()=>{
        this.setState(pre=>({
            showPassword:!pre.showPassword
        }))
    }

    onChangeLastName=event=>{
        this.setState({lastname:event.target.value})
    }

    onSubmitForm=async (event)=>{
        event.preventDefault()
        const {name,email,password,city,lastname,zipCode,number}=this.state
        const data={
            user_firstname:name,
            user_email:email,
            user_password:password,
            user_city:city,
            user_zipcode:zipCode,
            user_lastname:lastname,
            user_phone:number
        }

        const url='https://syoft.dev/Api/user_registeration/api/user_registeration'
        const options={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }
        const response=await fetch(url,options)
        if (response.ok){
            console.log('registration successful')
            const jsonData=await response.json()
            console.log(jsonData)
        }else{
            const jsonData=await response.json()
            console.log(jsonData)
        }
    }

    render(){
        const {name,email,password,city,showPassword,number,lastname}=this.state
        return (
            <div className="main-container">

           
            <div className="signup-container">
                <div className="first-container">
                    <div className="description-container">
                      <h1 className="heading">Welcome to <br/>our community</h1>
                      <p className="description">Fuse helps developers to build organized and well coded<br/>dashboards full of beautiful and rich modules. join us and start building you application today.</p>
                    </div>
                    <div className="pics-holder">
                       <div className="pics-container">
                        <div className="profile-div">
                            <img src='https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.jpg?s=612x612&w=0&k=20&c=Wd2vTDd6tJ5SeEY-aw0WL0bew8TAkyUGVvNQRj3oJFw=' alt='profile1' className="img"/>
                        </div>
                        <div className="profile-div">
                            <img src='https://media.istockphoto.com/id/1411818808/photo/portrait-shot-of-smiling-young-businessman-at-office-looking-at-camera-concept-successful.jpg?s=612x612&w=0&k=20&c=PCRJgpDVUNZvuqUCU7kc65BfBD9X9y15oGB2k0ua5Gc=' alt='profile2' className="img"/>
                        </div>
                        <div className="profile-div">
                            <img src='https://media.istockphoto.com/id/1318482009/photo/young-woman-ready-for-job-business-concept.jpg?s=612x612&w=0&k=20&c=Jc1NcoUMoM78AxPTh9EApaPU2kXh2evb499JgW99b0g=' alt='profile3' className="img"/>
                        </div>
                        <div className="profile-div">
                            <img src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=" alt='profile4' className="img"/>
                        </div>
                        <p className="para">More than 17k people joined us, it's your turn</p>
                    </div>  
                    </div>
                                         
                </div>
                <div className="second-container">
                    <div className="top">
                        <h1 className="logo">SYOFT.</h1>
                        <h1 className="sign-up">Sign up</h1>
                        <p className="sign-para">Already have an account? <Link to='/userlogin' className="link">Sign in</Link></p>
                    </div>
                    <form className="form" onSubmit={this.onSubmitForm}>
                        <div className="form-input">
                            <label >Full name*</label>
                            <input className="input" onChange={this.onChangeName} type="text" id="name" required placeholder="Enter Your Name" value={name}/>
                        </div>
                        <div className="form-input">
                            <label >LastName</label>
                            <input className="input" onChange={this.onChangeLastName} type="company" placeholder="enter Last Name" value={lastname}/>
                        </div>
                        <div className="form-input">
                            <label >Email address*</label>
                            <input className="input" id='email' onChange={this.onChangeEmail} type="text" required placeholder="Enter Your Email" value={email}/>
                        </div>
                        <div className="form-input">
                            <label >Phone number</label>
                            <input className="input" id='email' onChange={this.onChangeNumber} type="text" required placeholder="Enter Your Number" value={number}/>
                        </div>
                        <div className="form-input">
                            <label >Password*</label>
                            <div className="password-container">
                                <input className="pass" onChange={this.onChangePassword} type={showPassword?'text':'password'} required placeholder='Enter Your Password' value={password}/>
                                <IoMdEye size={20} className="eye" color="#d1e3d6" onClick={this.onClickChangeType} />
                            </div>
                        </div>
                        <div className="form-input">
                            <label >City</label>
                            <input className="input" onChange={this.onChangeCompany} type="company" placeholder="enter city" value={city}/>
                        </div>
                        
                        <button className="btn" type="submit">Create your free account</button>
                    </form>
                </div>
            </div> </div>
        )
    }
}
export default SignupPage