import Chart from "../../components/Chart/MainChart/Chart"
import Header from "../../components/Header/Header"
import DonutChart from "../../components/Chart/DonutChart/DonutChart"
import "./home.css"

export default function Home() {
    return (
        <div className="home">
            <Header name='Thống kê'/>
          <Chart />
          <DonutChart/>
        </div>
    )
}
