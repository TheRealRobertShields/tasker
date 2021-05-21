import './LoginForm.css'
import React, { useState } from 'react'
import { createUser } from '../../actions/users'
import { useDispatch, useSelector } from 'react-redux'

const Login = ({ currentUser, setCurrentUser }) => {
    const [userData, setUserData] = useState({
        username: '', email: '', password: '', themeColor: '', profileImg: ''
    })
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // if(currentUser) 
        //     dispatch(updateUser(currentUser, userData));
        // else
        dispatch(createUser(userData));
        clear()
    }
    const clear = (e) => {

    }
    const confirmPasswords = (e) => {
        if(e.target.value.trim() === '') {
            e.target.style.border = '2px solid rgba(0,0,0,0)'
        }
        else {
            if(e.target.value === userData.password) {
                e.target.style.border = '2px solid lime'
            }
            else {
                e.target.style.border = '2px solid red'
            }
        }
    }
    const validatePassword = (e) => {
        setUserData({ ...userData, password: e.target.value })
        if(!isLoginCurrPage) {
            if(e.target.value.trim() === '')
                e.target.style.border = '2px solid rgba(0,0,0,0)'
            else {
                if(e.target.value.length > 6)
                    e.target.style.border = '2px solid lime'
                else 
                    e.target.style.border = '2px solid red'
            }
        }
    }

    const [isLoginCurrPage, setIsLoginCurrPage] = useState(true)


    const login = (e) => {
        e.preventDefault()
        var user = users.find(user => user.email === userData.email && user.password === userData.password)
        if(user) {
            setCurrentUser(user)
            document.querySelector('.login-form').style.display = 'none'
        }
        else
            console.log(user + ' does not exist.')
        clear()
    }

    return (
        <div className='login-form'>
            <form autoComplete='off' className='form' >
                <h1 className='task-title-header'>{isLoginCurrPage ? 'Login!' : 'Sign up!'}</h1>
                {isLoginCurrPage ? null :
                <div className='input-group'>
                    <label>Username</label>
                    <input type='text' placeholder='username' value={userData.lname} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                </div>
                }
                <div className='input-group'>
                    <label>Email</label>
                    <input type='text' placeholder='email' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                </div>
                <div className='input-group'>
                    <label>Password</label>
                    <input type='password' placeholder='password' value={userData.password} onChange={(e) => validatePassword(e)} />
                    <span className='password-span'></span>
                </div>
                {isLoginCurrPage ? null :
                    <div className='input-group'>
                        <label>Password Confirm</label>
                        <input className='confirmPassword' type='password' placeholder='confirm password' onChange={(e) => confirmPasswords(e)} />
                        <span className='password-span'></span>
                    </div>
                }
                <div className='input-group'>
                    <button className='btn-submit' type='submit' onClick={isLoginCurrPage ? (e) => login(e) : (e) => handleSubmit(e)}>{isLoginCurrPage ? 'Login' :  'Sign up'}</button>
                </div>
                <div>
                    <span>want to</span>
                    <span className='signup-link' onClick={() => setIsLoginCurrPage(!isLoginCurrPage)}> {isLoginCurrPage ? ' sign up?' : ' login?'}</span>
                </div>
            </form>
        </div>
    )
}

export default Login
