import "./headerticket.css"
import { SearchOutlined,FilterOutlined } from '@ant-design/icons';
export default function Headerticket(props) {
    return (
        <div className="headerticket">
           <nav className="headerticket__navbar">
                <ul className="headerticket__list headerticket__search">
                    <li className="headerticket__list-item  headerticket__list-item-search"> 
                        <input type="text" className="headerticket__search-input" placeholder="Tìm bằng số vé"/>
                        <SearchOutlined className="headerticket__search-icon"/>
                    </li>
                </ul>

                <ul className="headerticket__list">
                    <li className="headerticket__list-item headerticket__list-item-button display">
                        <div className="headerticket__list-content">
                            <FilterOutlined className="headerticket__list-icon" />
                            {props.namebtnone}
                        </div>
                    </li>

                    <li className="headerticket__list-item headerticket__list-item-button">
                        <span className="headerticket__list-content">
                             {props.namebtntwo}
                        </span>
                    </li>
                </ul>
           </nav>
        </div>
    )
}
