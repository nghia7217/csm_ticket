import "./changeticket.css"
import "../../components/Headerticket/headerticket.css"
import { SearchOutlined } from '@ant-design/icons';
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import Filtertickets from "../../components/Filtertickets/Filtertickets";
import Tablechangticket from "../../components/Tablechangticket/Tablechangticket";
export default function Changeticket(props) {
    return (
        <div className="changeticket">
           <div className="grid__3">
                 <Header name="Đối soát vé"/>
              <div className="headerticket">
                <nav className="headerticket__navbar">
                    <ul className="headerticket__list headerticket__search">
                        <li className="headerticket__list-item  headerticket__list-item-search"> 
                            <input type="text" className="headerticket__search-input" placeholder="Tìm bằng số vé"/>
                            <SearchOutlined className="headerticket__search-icon"/>
                        </li>
                    </ul>
                    <ul className="headerticket__list ">
                        <li className="headerticket__list-item headerticket__list-item-button changeticket__list">
                            <span className="headerticket__list-content changeticket__list-content">
                                Chốt đối soát
                            </span>
                        </li>
                    </ul>
                </nav>
              </div>
                 <Tablechangticket row1 ="STT" row2 ="Số vé"  row3 ="Ngày sử dụng"  row4 ="Tên loại vé"  row5 ="Cổng check - in"/>
                 <Pagination/>
           </div>
           <div className="grid__1">
               <Filtertickets/>
           </div>
        </div>
    )
}
