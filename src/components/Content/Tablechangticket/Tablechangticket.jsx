import './tablechangticket.css'
import { Table } from 'antd';
const data = [
    {stt: '1',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '2',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '3',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '4',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '5',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '6',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '7',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '8',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '9',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '10',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '11',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '12',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '13',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '14',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '15',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '16',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '17',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '18',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '19',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},
    {stt: '20',numberticket: 123456789034,dateuse:'14/04/2021',nameticket:'Vé cổng',portcheckin:'Cổng 1',status: 'Đã đối soát'},

  

  ];

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
     
    },
    {
      title: 'Số vé',
      dataIndex: 'numberticket',
     
    },
    {
      title: 'Ngày sử dụng',
      dataIndex: 'dateuse',
      
    },
    {
      title: 'Tên loại vé',
      dataIndex: 'nameticket',
     
    },
    {
      title: 'Cổng check - in',
      dataIndex: 'portcheckin',
      
    },
    {
      title: '',
      dataIndex: 'status',
      
      render: status =>{
        switch (status) {
          case 'Đã đối soát':
            return (
              <p className="status">Đã sử dụng</p>
            )
        }
     }
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
