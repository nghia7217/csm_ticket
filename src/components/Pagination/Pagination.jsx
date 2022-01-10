import "./pagination.css"
import { CaretLeftOutlined,CaretRightOutlined } from '@ant-design/icons';
export default function Pagination() {
    return (
        <div className="pagination">
            <ul className="paginations">
                <li className="paginations-item">
                    <a href="#" className="paginations-item__link">
                        <i className="paginations-item__icon"><CaretLeftOutlined /></i>
                    </a>
                </li>
                <li className="paginations-item paginations-item--active">
                    <a href="#" className="paginations-item__link">1</a>
                </li>
                <li className="paginations-item">
                    <a href="#" className="paginations-item__link">2</a>
                </li>
                <li className="paginations-item">
                    <a href="#" className="paginations-item__link">3</a>
                </li>
                <li className="paginations-item">
                    <a href="#" className="paginations-item__link">4</a>
                </li>
                <li className="paginations-item">
                    <a href="#" className="paginations-item__link">5</a>
                </li>
                <li className="paginations-item">
                    <a href="#" className="paginations-item__link">...</a>
                </li>
                <li className="paginations-item">
                    <a href="#" className="paginations-item__link">20</a>
                </li>
                <li className="paginations-item">
                    <a href="#" className="paginations-item__link">
                        <i className="paginations-item__icon paginations-item__icon--active"><CaretRightOutlined /></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}
