import { Component } from "react";
import {Redirect,Link} from 'react-router-dom'
import Cookies from "js-cookie";
import './SignIn.css'

class SignInPage extends Component{
    state={email:'',password:'',isLogin:false,showPassword:false}

    onChangeEmail=event=>{
        this.setState({email:event.target.value
        })
    }

    onChangePassword=event=>{
        this.setState({password:event.target.value})
    }

    onChangeShow=()=>{
        this.setState(pre=>({showPassword:!pre.showPassword}))
    }

    onSubmitForm=async (event)=>{
        event.preventDefault()
        const {email,password}=this.state
        const payload={
            user_email:email,
            user_password:password
        }
        const url='https://syoft.dev/Api/userlogin/api/userlogin'
        const options={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
            ,body:JSON.stringify(payload)
        }

        const response=await fetch(url,options)
        if (response.ok){
            const data=await response.json()
            console.log(data)
            localStorage.setItem('user',JSON.stringify(data))
            this.setState({isLogin:true})
            Cookies.set('jwt_token',data.token)
        }else{
            console.log('login failed')
        }
    }

    render(){
        if(this.state.isLogin){
            return <Redirect to='/'/>
        }
        const {email,password}=this.state
        return(
            <div className="main-container">
                <h1>Login</h1>
                <div className="login-card">
                   
                <form onSubmit={this.onSubmitForm} className="login-form">
                    <div className="login-div">
                        <label>Email*</label>
                        <input className="login-input" type="text" onChange={this.onChangeEmail} value={email} placeholder="Enter Your Email"/>
                    </div>
                    <div className="login-div">
                        <label>Password*</label>
                        <input className="login-input" type={this.state.showPassword?'text':'password'} onChange={this.onChangePassword} value={password} placeholder="Enter Your Password"/>
                    </div>
                    <div className="signup-show">
                    <div>
                        <p className="signup-link">Don't have an Account? <Link to='/user_registeration' className="link">Sign up</Link></p>
                    </div>
                    <div className="checkbox">
                        <label htmlFor="checkbox">Show Password</label>
                        <input type="checkbox" id="checkbox" onChange={this.onChangeShow}/>
                    </div>
                    </div>
                    
                    <button className="btn" type="submit">Login</button>
                </form> 
                </div>
                
            </div>
        )
    }
}
export default SignInPage