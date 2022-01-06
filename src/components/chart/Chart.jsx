import "./chart.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';
import{CalendarOutlined } from '@ant-design/icons'


export default function Chart() {
     const data = [
        {
          name: 'Thứ 2',
          uv: 1400,
         
        },
        {
          name: 'Thứ 3',
          uv: 1800,
         
        },
        {
          name: 'Thứ 4',
          uv: 2000,
        
        },
        {
          name: 'Thứ 5',
          uv: 2780,
        
        },
        {
          name: 'Thứ 6',
          uv: 1890,
         
        },
        {
          name: 'Thứ 7',
          uv: 2390,
         
        },
        {
          name: 'CN',
          uv: 3490,
         
        },
      ];

    return (
        <div className="chart">
            <h3 className="chart__title">
                Thống kê
            </h3>
            <div>
                <ul>
                    <li>Doanh thu</li>
                    <li>
                        Tháng 4, 2021
                        <CalendarOutlined/>
                    </li>
                </ul>
            </div>
            <ResponsiveContainer width="100%" aspect={4 / 1}>    
                <AreaChart  data={data}>
                    <XAxis dataKey="name" stroke="#888888"/>
                    <YAxis/>
                    <CartesianGrid stroke="#ECE9F1"/>
                     <Area type="monotone" dataKey="uv" stroke="#FF8A48" fill=" rgba(250, 160, 95, 0.26)" />
                    <Tooltip/>
                    <Line/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
