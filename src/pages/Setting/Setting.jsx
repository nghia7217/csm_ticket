
import Header from "../../components/Header/Header"
import TableContent from "../../components/Tablecontent/TableContent"
import Pagination from "../../components/Pagination/Pagination";
import "./setting.css"
import "../../components/Headerticket/headerticket.css"
import { SearchOutlined } from '@ant-design/icons';
export default function Setting() {
    return (
        <div className="setting">
            <Header name="Danh sách gói vé"/>
            <div className="headerticket">
                <nav className="headerticket__navbar">
                    <ul className="headerticket__list headerticket__search">
                        <li className="headerticket__list-item  headerticket__list-item-search"> 
                            <input type="text" className="headerticket__search-input" placeholder="Tìm bằng số vé"/>
                            <SearchOutlined className="headerticket__search-icon"/>
                        </li>
                    </ul>
                    <ul className="headerticket__list">
                        <li className="headerticket__list-item headerticket__list-item-button">
                            <span className="headerticket__list-content">
                                Xuất file (.csv)
                            </span>
                        </li>
                        <li className="headerticket__list-item headerticket__list-item-button setting__list-item">
                            <span className="headerticket__list-content setting__list-content">
                                Thêm gói vé
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
            <TableContent/>
            <Pagination/>
        </div>
    )
}