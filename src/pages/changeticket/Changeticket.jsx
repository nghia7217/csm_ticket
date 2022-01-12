import "./changeticket.css"
import Header from "../../components/Header/Header";
import TableContent from "../../components/Tablecontent/TableContent";
import Pagination from "../../components/Pagination/Pagination";
import Headerticket from "../../components/Headerticket/Headerticket";
import Filtertickets from "../../components/Filtertickets/Filtertickets";
export default function Changeticket() {
    return (
        <div className="changeticket">
              
           <div className="grid__3">
                 <Header name="Đối soát vé"/>
                 <Headerticket namebtntwo="Xuất file (.csv)" />
                 <TableContent/>
                 <Pagination/>
           </div>
           <div className="grid__1">
               <Filtertickets/>
           </div>
        </div>
    )
}
