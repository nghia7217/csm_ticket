import "./ticketlist.css"
import Header from "../../components/Header/Header";
import Headerticket from "../../components/Headerticket/Headerticket";
import { Link } from 'react-router-dom'
import TableContent from "../../components/Content/Tablecontent/TableContent";
import 'antd/dist/antd.css';

export default function Ticketlist() {
 
    return (
        <div className="tickerlist">        
          <Header name="Danh sách vé"/>
          <div className="package">
            <ul className="package__list">
             <Link to="/ticket/package_family">
               <li className="package_list-item ">Gói gia đình</li>
             </Link>
              <Link to="/ticket/package_even">
                <li className="package_list-item package_list-item--activity">Gói sự kiện</li>
              </Link>
            </ul>
          </div>
        
          <Headerticket namebtnone="Lọc vé" namebtntwo="Xuất file (.csv)"/>
          <TableContent></TableContent>
        </div>
        
    )
}
