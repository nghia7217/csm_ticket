import "./headerticket.css"

export default function Headerticket() {
    return (
        <div>
            <div className="chart__name">
                <ul className="chart__name-header"> 
                    <li className="chart__name-left">Doanh thu</li>
                    <li className="chart__name-right">
                      <span className="chart__name-right-day">Lọc vé</span> 
                    </li>
                    <li className="chart__name-right">
                      <span className="chart__name-right-day">Xuất file (.csv)</span> 
                    </li>   
                </ul>
            </div>
        </div>
    )
}
