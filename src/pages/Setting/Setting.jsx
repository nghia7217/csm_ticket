
import Header from "../../components/Header/Header"
import Headerticket from "../../components/Headerticket/Headerticket"
import TableContent from "../../components/Tablecontent/TableContent"
import Pagination from "../../components/Pagination/Pagination";
import "./setting.css"

export default function Setting() {
    return (
        <div className="setting">
            <Header name="Danh sách gói vé"/>
            <Headerticket namebtnone="Xuất file (.csv)" namebtntwo="Thêm gói vé"/>
            <TableContent/>
            <Pagination/>
        </div>
    )
}