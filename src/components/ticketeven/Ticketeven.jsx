import "./ticketeven.css"
import rec from "./img_ticket/Rectangle.png"
import rec1 from "./img_ticket/Rectangle2.png"
import charteven from "./img_ticket/goisukien.png"
export default function Ticketeven() {
    return (
        <div className="ticketeven">
            <div className="ticketeven__left">
                <h3 className="ticketeven__left-title">
                    Gói sự kiện
                </h3>
                <img src={charteven} alt=""  className="ticketeven__left-img"/>
            </div>
            <div className="ticketeven__right">
                <ul className="ticketeven__right-ul">
                    <li>
                        <img src={rec1} alt="" className="ticketeven__right-img"/>             
                        Vé đã sử dụng
                    </li>
                    <li>
                        <img src={rec} alt="" className="ticketeven__right-img"/>  
                        Vé chưa sử dụng
                    </li>
                </ul>
            </div>

        </div>    
    )
}
