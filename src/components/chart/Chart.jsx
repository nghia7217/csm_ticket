import "./chart.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';
import{CalendarOutlined } from '@ant-design/icons'


export default function Chart() {
     const data = [
        {
          name: 'Thứ 2',
          "Doanh thu": 1400,
         
        },
        {
          name: 'Thứ 3',
          "Doanh thu": 1800,
         
        },
        {
          name: 'Thứ 4',
          "Doanh thu": 2000,
        
        },
        {
          name: 'Thứ 5',
          "Doanh thu": 2780,
        
        },
        {
          name: 'Thứ 6',
          "Doanh thu": 1890,
         
        },
        {
          name: 'Thứ 7',
          "Doanh thu": 2390,
         
        },
        {
          name: 'CN',
          "Doanh thu": 3490,
         
        },
      ];

    return (
        <div className="chart">
            <div className="chart__name">
                <ul className="chart__name-header"> 
                    <li className="chart__name-left">Doanh thu</li>
                    <li className="chart__name-right">
                      <span className="chart__name-right-day">
                        Tháng 4, 2021
                      </span>
                        <CalendarOutlined className="chart__name-right-item"/>
                    </li>
                </ul>
            </div>
            <ResponsiveContainer width="100%" aspect={4 / 1}>    
                <AreaChart  data={data}>
                    <XAxis dataKey="name" stroke="#888888"/>
                    <YAxis/>
                    <CartesianGrid stroke="#ECE9F1"/>
                     <Area type="monotone" dataKey="Doanh thu" stroke="#FF8A48" fill=" rgba(250, 160, 95, 0.26)" />
                    <Tooltip/>
                    <Line/>
                </AreaChart>
            </ResponsiveContainer>

           
              <ul className="totalrevenue">
                <li className="totalrevenue__header">Tổng doanh thu theo tuần</li>
                <li className="totalrevenue__price">525.145.000 <span className="totalrevenue__price-denominations">đồng</span></li>
              </ul>
        </div>       
    )
}
