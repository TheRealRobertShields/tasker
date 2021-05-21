import './Header.css'

import React from 'react'

import ScreenLine from './ScreenLine/ScreenLine'
const Header = ({ currentUser, setCurrentUser, screenContent, setScreenContent }) => {

    const updateScreen = (text) => {
        setScreenContent([...screenContent, text])
        console.log(screenContent)
    }

    const logout = () => {
        console.log(currentUser)
        updateScreen(`${currentUser.username} logged out`)
        setCurrentUser(null)
        document.querySelector('.task-form').style.display = 'none';
        document.querySelector('.login-form').style.display = 'block';
    }

    const openTaskForm = () => {
        document.querySelector('.task-form').style.display = 'block';
        document.querySelector('.login-form').style.display = 'none';
    }


    return (
        <div className='header'>
            <div className='header-left-section'>
                <div className='task-menu'>
                    <div className='menu-btn'>
                        Recurring
                    </div>
                    <div className='menu-btn'>
                        Today
                    </div>
                    <div className='menu-btn'>
                        This Week
                    </div>
                    <div className='menu-btn' onClick={openTaskForm}>
                        New Task
                    </div>
                </div>
                <input type='text' className='task-search' placeholder='search tasks' />
            </div>

            <div className='header-screen'>
                {
                    screenContent.map((line) => (
                        <ScreenLine text={line} key={Date.now()} />
                    ))
                }
            </div>

            <div className='user-info'>
                <div className='user-displaytext'>
                    {currentUser ? <>
                    <h2>{currentUser.username}</h2>
                    <div className='user-logout' onClick={() => logout()}>logout</div>
                    </> : null}
                </div>
                {currentUser ?
                <img className='user-img' src="https://img.icons8.com/fluent-systems-regular/48/000000/user.png" alt='user menu' />
                : null }
            </div>
        </div>

    )
}

export default Header
