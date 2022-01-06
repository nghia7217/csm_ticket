import Chart from "../../components/chart/Chart"
import Familypackage from "../../components/familypackage/Familypackage"
import Ticketeven from "../../components/ticketeven/Ticketeven"
import "./home.css"

export default function Home() {
    return (
        <div className="home">
          <Chart />
          <div className="ticketusagechart">
              <Familypackage/>
              <Ticketeven/>
          </div>
        </div>
    )
}
