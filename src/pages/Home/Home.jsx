import Chart from "../../components/Chart/Chart"
import Familypackage from "../../components/familypackage/Familypackage"
import Header from "../../components/Header/Header"
import Ticketeven from "../../components/ticketeven/Ticketeven"
import "./home.css"

export default function Home() {
    return (
        <div className="home">
            <Header name='Thống kê'/>
          <Chart />
          <div className="ticketusagechart">
              <Familypackage/>
              <Ticketeven/>
          </div>
        </div>
    )
}
