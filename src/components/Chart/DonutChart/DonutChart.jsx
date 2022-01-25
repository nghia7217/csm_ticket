import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import './donutchart.css'
import{CalendarOutlined } from '@ant-design/icons'
const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },

  ];

const data1 = [
    { name: 'Group A', value: 30256 },
    { name: 'Group B', value: 28302 },
  ];
  
  
  const COLORS = ['#4F75FF', '#FF8A48'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index } ) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) - 20;
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

  
    return (
        <>
        <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
          <feDropShadow stdDeviation="5 5" in="SourceGraphic" dx="0" dy="0" flood-color="#1F3646" flood-opacity="0.25" x="0%" y="0%" width="100%" height="100%" result="dropShadow2"/>
        </filter>
        <rect x={x-10} 
        y={y-16} 
        fill="white" 
        dominantBaseline="central" 
        fontSize={14} 
        colorRendering="red"
        rx="10" ry="10" width="50" height="34"
        style={{fill:'width' ,strokeWidth:5 }} filter="url(#filter)"/>
        <text 
          x={x} 
          y={y} 
          fill="black" 
          dominantBaseline="central" 
          fontSize={11} 
          fontWeight={900}
          width="60px"
          colorRendering="red">
          {`${data[index].value}`}
        </text>
        </>

    );
  };


  const renderCustomizedLabel1 = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index }  ) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) - 20;
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
    <> 
      <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
        <feDropShadow stdDeviation="5 5" in="SourceGraphic" dx="0" dy="0" flood-color="#1F3646" flood-opacity="0.25" x="0%" y="0%" width="100%" height="100%" result="dropShadow2"/>
      </filter>
      <rect x={x-10 } 
        y={y-16} 
        fill="white" 
        dominantBaseline="central" 
        fontSize={14} 
        colorRendering="red"
        rx="10" ry="10" width="50" height="34"
        style={{fill:'width' ,strokeWidth:5 }} filter="url(#filter)"/>
        <text 
          x={x} 
          y={y} 
          fill="black" 
          dominantBaseline="central" 
          fontSize={11} 
          fontWeight={900}
          width="60px">
          {`${data1[index].value}`}
        </text>
    </>
    );
  };

export default function DonutChart() {
   
  return <div className='donutChart' style={{display: 'flex', alignItems: 'flex-start'}}>
      <div className='donutChart-item'>
         <li className="chart__name-right">
                      <span className="chart__name-right-day">
                        Tháng 4, 2021
                      </span>
                        <CalendarOutlined className="chart__name-right-item"/>
        </li>
      </div>
     <div className="donutChart-item">
          <h3 style={{textAlign: 'center', fontSize: 13}}>Gói gia đình</h3>
          <PieChart width={300} height={200} margin={{ top: -100 }}>
            <Pie
              data={data}
              cx='50%'
              cy={200}
              innerRadius='26%'
              outerRadius={88}
              startAngle={90}
              endAngle={450}
              fill="#8884d8"
              viewBox="0 100 300 400"
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              legendType='square'
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} stroke='unset' fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
         
        <div className="donutChart-item">
          <h3 style={{textAlign: 'center', fontSize: 13}}>Gói sự kiện</h3>
          <PieChart width={300} height={200} margin={{ top: -100 }}>
            <Pie
              data={data1}
              cx='50%'
              cy={200}
              innerRadius='26%'
              outerRadius={88}
              startAngle={90}
              endAngle={450}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel1}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} stroke='unset' fill={COLORS[index % COLORS.length]}/>
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="donutChart-item" style={{fontSize: 11, fontWeight: 900}}>
          <div style={{display: 'flex'}}>
            <div style={{width: 30, height: 14, backgroundColor: '#4F75FF', borderRadius: 3}}></div>
            <p style={{paddingLeft: 6}}>Vé đã sử dụng</p>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{width: 30, height: 14, backgroundColor: '#FF8A48', borderRadius: 3}}></div>
            <p style={{paddingLeft: 6}}>Vé chưa sử dụng</p>
          </div>
        </div>
  </div>;
}
