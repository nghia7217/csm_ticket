import React from 'react'
import './sidebar.css'
import {HomeOutlined, UnorderedListOutlined  } from "@ant-design/icons"
import vector from './icon/Quan_ly_ve.png'
import vector1 from './icon/Doi_soat_ve.png'
import vector2 from './icon/Thiet_bi.png'
import vector3 from './icon/Cai_dat.png'
export default function Sidebar() {
    return (
        <div className='sidebar'>
           <div className='sidebarWrapper'>
               <div className="sidebarWrapper__Menu">
                        <ul className="sidebarWrapper__Menu-List">
                            <li className="sidebarWrapper__Menu-list-item active">
                                 <HomeOutlined className='sidebarWrapper__Menu-icon' /> 
                                 Trang chủ
                            </li>
                            <li className="sidebarWrapper__Menu-list-item">
                              <img src={vector} alt="" className='sidebarWrapper__Menu-icon'/>                               
                                 Quản lý vé
                            </li>
                            <li className="sidebarWrapper__Menu-list-item">
                                <img src={vector1} alt="" className='sidebarWrapper__Menu-icon'/>   
                                 Đối soát vé
                            </li>
                            <li className="sidebarWrapper__Menu-list-item">
                                 <UnorderedListOutlined className='sidebarWrapper__Menu-icon'  /> 
                                 Dánh sách sự kiện
                            </li>
                            <li className="sidebarWrapper__Menu-list-item">
                                <img src={vector2} alt="" className='sidebarWrapper__Menu-icon'/>   
                                 Quản lý thiết bị 
                            </li>
                            <li className="sidebarWrapper__Menu-list-item">
                                 <img src={vector3} alt="" className='sidebarWrapper__Menu-icon'/>   
                                 Cài đặt        
                            </li>
                            <span className='sidebarWrapper__Menu-list-item-children'>Gói dịch vụ</span>  
                        </ul> 
                                     
               </div>
           </div>
        </div>
    )
}
