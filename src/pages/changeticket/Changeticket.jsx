import "./changeticket.css"
import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import Headerticket from "../../components/Headerticket/Headerticket";
import Filtertickets from "../../components/Filtertickets/Filtertickets";
import Tablechangticket from "../../components/Tablechangticket/Tablechangticket";
export default function Changeticket() {
    return (
        <div className="changeticket">
              
           <div className="grid__3">
                 <Header name="Đối soát vé"/>
                 <Headerticket namebtntwo="Xuất file (.csv)" />
                <Tablechangticket row1 ="STT" row2 ="Số vé"  row3 ="Ngày sử dụng"  row4 ="Tên loại vé"  row5 ="Cổng check - in"/>
                 <Pagination/>
           </div>
           <div className="grid__1">
               <Filtertickets/>
           </div>
        </div>
    )
}
