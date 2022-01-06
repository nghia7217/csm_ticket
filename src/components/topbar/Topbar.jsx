import React from 'react'
import "./topbar.css"
import {MailOutlined} from '@ant-design/icons'
import {BellOutlined} from '@ant-design/icons'
import {SearchOutlined} from '@ant-design/icons'
import logo from './img/insight.png'
export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='grid'>
                <div className="header-with-search">
                    <div className='header__logo'>
                        <img src={logo} alt="Logo" className='header__logo-img' />
                    </div>
                    <div className='header__search'>
                        <div className='header__search-all'>
                            <input type="text" className='header__search-input' placeholder='Search'/>
                            <button className='header__search-icon-search'><SearchOutlined /></button>
                        </div>
                    </div>
                    <div className='header__option'>
                        <div className='header__option-icon'>
                             <MailOutlined />
                        </div>
                        <div className='header__option-icon'>
                             <BellOutlined />
                        </div>
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="header__option-avatar" />
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
