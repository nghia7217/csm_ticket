import "./familypackage.css"
import "../Chart/chart.css"
import{CalendarOutlined } from '@ant-design/icons'
import chart from "./img/chartfamily.png"
export default function Familypackage() {
    return (
        <div className="familypackage">
            <div className="familypackage__left">         
                <ul className="chart__name-header"> 
                    <li className="chart__name-right">
                      <span className="chart__name-right-day">
                        Tháng 4, 2021
                      </span>
                        <CalendarOutlined className="chart__name-right-item"/>
                    </li>
                </ul>
           
            </div>
            <div className="familypackage__right">
                <h3 className="familypackage__right-title">
                    Gói gia đình
                </h3>
                <img src={chart} alt=""  className="familypackage__right-img"/>
            </div>
            
        </div>
    )
}
