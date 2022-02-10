import './tableContent.css'
import { Table } from 'antd';

const data = [
    {stt: '1',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '2',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Chưa sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '3',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Hết hạn',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '4',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Hết hạn',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '5',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '6',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '7',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '8',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '9',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '10',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '11',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '12',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '13',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '14',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '15',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '16',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '17',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '18',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '19',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '20',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '21',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '22',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '23',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},
    {stt: '24',bookingcode: 'ALT20210501',numberticket: 123456789034,nameevent: 'Hội chợ triển lãm tiêu dùng 2021',statususe:'Đã sử dụng',dateuse:'14/04/2021',daterelease:'14/04/2021',portcheckin:'Cổng 1',},

  ];

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      
    },
    {
      title: 'Booking code',
      dataIndex: 'bookingcode',
     
    },
    {
      title: 'Số vé',
      dataIndex: 'numberticket',
     
    },
    {
      title: 'Tên sự kiện',
      dataIndex: 'nameevent',
     
    },
    {
      title: 'Tình trạng sử dụng',
      dataIndex: 'statususe',
     
      render: statususe =>{
        switch (statususe) {
          case 'Đã sử dụng':
            return (<div className="statususe used">
              <p className="status_dot"></p>
              <p className="status_text">Đã sử dụng</p>
            </div>)
          case 'Chưa sử dụng':
            return (<div className="statususe notuse">
              <p className="status_dot"></p>
              <p className="status_text">
                Chưa sử dụng
              </p>
            </div>)
          case 'Hết hạn':
            return (<div className="statususe expires">
              <p className="status_dot"></p>
              <p className="status_text">
                Hết hạn
              </p>
              </div>)
        }
     }

    },
    {
      title: 'Ngày sử dụng',
      dataIndex: 'dateuse',
     
    },
    {
      title: 'Ngày xuất vé',
      dataIndex: 'daterelease',
   
    },
    {
      title: 'Cổng check - in',
      dataIndex: 'portcheckin',
     
    },
  ]

export default function TableContent() {
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
  </div>;
}
