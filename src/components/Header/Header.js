import './Header.css'

import React from 'react'

const Header = () => {
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
                    <div className='menu-btn'>
                        This Week
                    </div>
                </div>
                <input type='' className='task-search' placeholder='search tasks' />
            </div>
            <div className='header-right-section'>
                <div className='user-info'>
                    Username
                    <img className='user-img' src="https://img.icons8.com/fluent-systems-regular/48/000000/user.png" alt='user menu' />
                </div>
            </div>

        </div>

    )
}

export default Header
