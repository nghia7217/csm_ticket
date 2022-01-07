import "./ticketlist.css"
import { Table } from 'antd';

export default function Ticketlist() {
    const dataSource = [
        {
          key: '1',
          STT: '1',
          "Booking code": 'ALTOJMNB',
          "Số vé": 123456789034,
          "Tình trạng sử dụng":'Đã sử dụng',
          "Ngày sử dụng":'14/04/2021',
          "Ngày xuất vé":'14/04/2021',
          "Cổng check - in":'Cổng 1',
        },
        {
            key: '2',
            STT: '2',
            "Booking code": 'ALTOJMNB',
            "Số vé": 123456789034,
            "Tình trạng sử dụng":'Đã sử dụng',
            "Ngày sử dụng":'14/04/2021',
            "Ngày xuất vé":'14/04/2021',
            "Cổng check - in":'Cổng 1',
          },
          {
            key: '3',
            STT: '3',
            "Booking code": 'ALTOJMNB',
            "Số vé": 123456789034,
            "Tình trạng sử dụng":'Đã sử dụng',
            "Ngày sử dụng":'14/04/2021',
            "Ngày xuất vé":'14/04/2021',
            "Cổng check - in":'Cổng 1',
          },
          {
            key: '4',
            STT: '4',
            "Booking code": 'ALTOJMNB',
            "Số vé": 123456789034,
            "Tình trạng sử dụng":'Đã sử dụng',
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
            dataIndex: 'Tình trạng sử dụng',
            key: 'Tình trạng sử dụng',
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
         <Table dataSource={dataSource} columns={columns} />;
        </div>
        
    )
}
