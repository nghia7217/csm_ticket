import "./ticketlist.css"
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import TableContent from "../../components/Tablecontent/TableContent";
import Headerticket from "../../components/Headerticket/Headerticket";
export default function Ticketlist() {
     
  
    return (
        <div className="tickerlist">
          <Header name="Danh sách vé"/>
          <Headerticket namebtnone="Lọc vé" namebtntwo="Xuất file (.csv)"/>
          <TableContent row1="STT" row2="Booking code" row3="Số vé" row4="Tình trạng sử dụng" row5="Ngày sử dụng" row6="Ngày xuất vé" row7="Cổng check - in"/>
          <Pagination/>
        </div>
        
    )
}
