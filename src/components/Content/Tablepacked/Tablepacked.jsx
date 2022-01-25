import './tablepacked.css'
import { Table, Modal } from 'antd';
import {EditOutlined } from '@ant-design/icons'

import React, { useState } from 'react';

export default function TableContent() {

  const [isEditing,setIsEditing]=useState(false); 
  const onEditpacked=()=>{
    setIsEditing(true)
  }

  const data = [
    {stt: '1',bookingcode: 'ALT20210501',namepacked: 'Gói gia đình',dateuse:'14/04/2021 08:00:00',daterelease:'14/04/2021 23:00:00',price:"90.000 VNĐ",pricecombo:"20.000 VNĐ",statususe:'Đang áp dụng',portcheckin:'Cổng 1',},
    {stt: '2',bookingcode: 'ALT20210501',namepacked: 'Gói gia đình',dateuse:'14/04/2021 08:00:00',daterelease:'14/04/2021 23:00:00',price:"90.000 VNĐ",pricecombo:"20.000 VNĐ",statususe:'Tắt',portcheckin:'Cổng 1',},
  ];

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
     
    },
    {
      title: 'Mã gói',
      dataIndex: 'bookingcode',
     
    },
    
    {
      title: 'Tên gói vé',
      dataIndex: 'namepacked',
     
    },
   
    {
      title: 'Ngày áp dụng',
      dataIndex: 'dateuse',
     
    },
    {
      title: 'Ngày hết hạn',
      dataIndex: 'daterelease',
     
    },
    {
      title: 'Giá vé (VNĐ/Vé)',
      dataIndex: 'price',
     
    },
    {
      title: 'Giá Combo (VNĐ/Combo)',
      dataIndex: 'pricecombo',
     
    },
    {
      title: 'Tình trạng sử dụng',
      dataIndex: 'statususe',
      render: statususe =>{
        switch (statususe) {
          case 'Đang áp dụng':
            return (<div className="statususe notuse">
              <p className="status_dot"></p>
              <p className="status_text">
                Đang áp dụng
              </p>
            </div>)
          case 'Tắt':
            return (<div className="statususe expires">
              <p className="status_dot"></p>
              <p className="status_text">
                Tắt
              </p>
              </div>)
        }
     }
    },  
    {
      title: '',
      dataIndex: 'portcheckin',
      render:()=>{
        return<>
        <div className='Updatepaked' onClick={onEditpacked}>
          <EditOutlined style={{color:"#FF993C", marginRight: 2}} />
          <p style={{display:"inline-block", color:"#FF993C"}}>Cập nhật</p>
        </div>
        </>
      }
    },
  ]
  
  return <div>
      <Table dataSource={data} columns={columns} 
      pagination={{
          pageSize: 12,
          style: {
            justifyContent: 'center'
          },
          pageSizeOptions: ['10', '20', '30', '40'],
        }}
        size='small'
      />;
      <Modal
      title="Cập nhật thông tin gói vé"
      visible={isEditing}
      onCancel={()=>{
        setIsEditing(false)
      }}
      onOk={()=>{
        setIsEditing(false)
      }}
      okText="Lưu"
          cancelText="Huỷ"
      >
                    <div className="Setting__modal-name-ticket">
                        <h5 className="Setting__modal-nameticket">Tên gói vé  <span className="Setting__modal-required">*</span> </h5>  
                        <input type="text"  placeholder="Nhập tên gói vé" className="Setting__modal-input"/>
                    </div>
                    <div className="Setting__modal-date">
                        <ul className="Setting__modal-date-ticket Setting__modal-nameticket">Ngày áp dụng</ul>
                        <ul className="Setting__modal-date-ticket Setting__modal-nameticket">Ngày hết hạn</ul>
                    </div>
                    <h3 className="Setting__modal-nameticket">Giá vé áp dụng</h3>
                    <div className="Setting__modal-Ticket-prices">
                      <input type="checkbox" className="Setting__modal-checkbox"/>
                        <span>Vé lẻ (vnđ/vé) với giá</span>
                        <input type="text" placeholder="Giá vé" className="Setting__modal-checkbox-input" /> / vé
                    </div>
                    <div>
                      <input type="checkbox" className="Setting__modal-checkbox" />
                        <span>Combo vé với giá</span>
                        <input type="text" placeholder="Giá vé" className="Setting__modal-checkbox-input"/>/ <input type="text" placeholder="Giá vé" className="Setting__modal-checkbox-input"/> vé
                    </div>
                    <h3 className="Setting__modal-nameticket">Tình trạng</h3>
      </Modal>
  </div>;
}
