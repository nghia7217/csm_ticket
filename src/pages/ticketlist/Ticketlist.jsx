import "./ticketlist.css"
import { Table } from 'antd';
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
function showTotal(total) {
  return `Total ${total} items`;
}
export default function Ticketlist() {
      const dataSource = [
        {    
          STT: '1',
          "Booking code": 'ALTOJMNB',
          "Số vé": 123456789034,
          "Status":'Đã sử dụng',
          "Ngày sử dụng":'14/04/2021',
          "Ngày xuất vé":'14/04/2021',
          "Cổng check - in":'Cổng 1',
        },
        {    
          STT: '2',
          "Booking code": 'ALTOJMNB',
          "Số vé": 123456789034,
          "Status":'Đã sử dụng',
          "Ngày sử dụng":'14/04/2021',
          "Ngày xuất vé":'14/04/2021',
          "Cổng check - in":'Cổng 1',
        },
        {    
          STT: '3',
          "Booking code": 'ALTOJMNB',
          "Số vé": 123456789034,
          "Status":'Đã sử dụng',
          "Ngày sử dụng":'14/04/2021',
          "Ngày xuất vé":'14/04/2021',
          "Cổng check - in":'Cổng 1',
        },
        {    
          STT: '4',
          "Booking code": 'ALTOJMNB',
          "Số vé": 123456789034,
          "Status":'Đã sử dụng',
          "Ngày sử dụng":'14/04/2021',
          "Ngày xuất vé":'14/04/2021',
          "Cổng check - in":'Cổng 1',
        },
        {    
          STT: '5',
          "Booking code": 'ALTOJMNB',
          "Số vé": 123456789034,
          "Status":'Đã sử dụng',
          "Ngày sử dụng":'14/04/2021',
          "Ngày xuất vé":'14/04/2021',
          "Cổng check - in":'Cổng 1',
        },
        {    
          STT: '6',
          "Booking code": 'ALTOJMNB',
          "Số vé": 123456789034,
          "Status":'Đã sử dụng',
          "Ngày sử dụng":'14/04/2021',
          "Ngày xuất vé":'14/04/2021',
          "Cổng check - in":'Cổng 1',
        },
        {    
          STT: '7',
          "Booking code": 'ALTOJMNB',
          "Số vé": 123456789034,
          "Status":'Đã sử dụng',
          "Ngày sử dụng":'14/04/2021',
          "Ngày xuất vé":'14/04/2021',
          "Cổng check - in":'Cổng 1',
        },
        {    
          STT: '8',
          "Booking code": 'ALTOJMNB',
          "Số vé": 123456789034,
          "Status":'Đã sử dụng',
          "Ngày sử dụng":'14/04/2021',
          "Ngày xuất vé":'14/04/2021',
          "Cổng check - in":'Cổng 1',
        },
        {    
          STT: '9',
          "Booking code": 'ALTOJMNB',
          "Số vé": 123456789034,
          "Status":'Đã sử dụng',
          "Ngày sử dụng":'14/04/2021',
          "Ngày xuất vé":'14/04/2021',
          "Cổng check - in":'Cổng 1',
        },
        {    
          STT: '10',
          "Booking code": 'ALTOJMNB',
          "Số vé": 123456789034,
          "Status":'Đã sử dụng',
          "Ngày sử dụng":'14/04/2021',
          "Ngày xuất vé":'14/04/2021',
          "Cổng check - in":'Cổng 1',
        },
      ];
      
      const columns = [
        {
          title: 'STT',
          dataIndex: 'STT',
          key: 'STT',
        },
        {
          title: 'Booking code',
          dataIndex: 'Booking code',
          key: 'Booking code',
        },
        {
          title: 'Số vé',
          dataIndex: 'Số vé',
          key: 'Số vé',
        },
        {
            title: 'Tình trạng sử dụng',
            dataIndex: 'Status',
            key: 'status',            
        },
        {
            title: 'Ngày sử dụng',
            dataIndex: 'Ngày sử dụng',
            key: 'Ngày sử dụng',
        },
        {
            title: 'Ngày xuất vé',
            dataIndex: 'Ngày xuất vé',
            key: 'Ngày xuất vé',
        },
        {
            title: 'Cổng check - in',
            dataIndex: 'Cổng check - in',
            key: 'Cổng check - in',
        },
        {
            title: '',
            dataIndex: '',
            key: '',
        },

      ];
      
  
    return (
        <div className="tickerlist">
          <Header name="Danh sách vé"/>
         <Table dataSource={dataSource} columns={columns} pagination={false}/>;
         <Pagination/>
        </div>
        
    )
}
